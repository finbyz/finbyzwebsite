#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to increment version
increment_version() {
    local version=$1
    local increment_type=${2:-patch}
    
    # Remove 'v' prefix if present
    version=${version#v}
    
    IFS='.' read -r major minor patch <<< "$version"
    
    case $increment_type in
        major)
            major=$((major + 1))
            minor=0
            patch=0
            ;;
        minor)
            minor=$((minor + 1))
            patch=0
            ;;
        patch|*)
            patch=$((patch + 1))
            ;;
    esac
    
    echo "v$major.$minor.$patch"
}

# Parse command line arguments
INCREMENT_TYPE="patch"
PUSH_IMAGE=false
CREATE_GIT_TAG=false
PUSH_GIT_TAG=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --major)
            INCREMENT_TYPE="major"
            shift
            ;;
        --minor)
            INCREMENT_TYPE="minor"
            shift
            ;;
        --patch)
            INCREMENT_TYPE="patch"
            shift
            ;;
        --push)
            PUSH_IMAGE=true
            shift
            ;;
        --tag)
            CREATE_GIT_TAG=true
            shift
            ;;
        --push-tag)
            CREATE_GIT_TAG=true
            PUSH_GIT_TAG=true
            shift
            ;;
        --all)
            PUSH_IMAGE=true
            CREATE_GIT_TAG=true
            PUSH_GIT_TAG=true
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --major          Increment major version (x.0.0)"
            echo "  --minor          Increment minor version (0.x.0)"
            echo "  --patch          Increment patch version (0.0.x) [default]"
            echo "  --push           Push Docker image to registry"
            echo "  --tag            Create Git tag"
            echo "  --push-tag       Create and push Git tag"
            echo "  --all            Build, tag, and push everything"
            echo "  -h, --help       Show this help message"
            echo ""
            echo "Multi-platform builds:"
            echo "  Without --push:  Builds for linux/amd64 only (local)"
            echo "  With --push:     Builds for linux/amd64 and linux/arm64"
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
done

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}  Docker Build & Version Script${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

# Check if current commit has a tag
CURRENT_TAG=$(git describe --exact-match --tags HEAD 2>/dev/null || echo "")

if [ -n "$CURRENT_TAG" ]; then
    VERSION="$CURRENT_TAG"
    echo -e "${GREEN}✓ Using current Git tag: $VERSION${NC}"
else
    LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
    
    if [ -n "$LATEST_TAG" ]; then
        VERSION=$(increment_version "$LATEST_TAG" "$INCREMENT_TYPE")
        echo -e "${GREEN}✓ Last Git tag: $LATEST_TAG${NC}"
        echo -e "${GREEN}✓ Auto-incremented ($INCREMENT_TYPE): $VERSION${NC}"
    else
        VERSION="v0.0.1"
        echo -e "${YELLOW}⚠ No Git tags found. Starting with: $VERSION${NC}"
    fi
fi

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠ Warning: You have uncommitted changes${NC}"
fi

export APP_VERSION=$VERSION
IMAGE_NAME="ghcr.io/finbyz/finbyzwebsite-nextjs"
IMAGE_TAG="$IMAGE_NAME:$VERSION"

# Setup buildx for multi-platform builds
echo ""
echo -e "${BLUE}🔧 Setting up Docker Buildx...${NC}"
if ! docker buildx inspect multiplatform-builder >/dev/null 2>&1; then
    docker buildx create --name multiplatform-builder --use
    echo -e "${GREEN}✓ Created buildx builder: multiplatform-builder${NC}"
else
    docker buildx use multiplatform-builder
    echo -e "${GREEN}✓ Using existing buildx builder: multiplatform-builder${NC}"
fi

echo ""
echo -e "${BLUE}🐳 Building Docker image...${NC}"
echo -e "   Version: ${GREEN}$VERSION${NC}"
echo -e "   Image: ${GREEN}$IMAGE_TAG${NC}"

# Determine platforms based on push flag
if [ "$PUSH_IMAGE" = true ]; then
    PLATFORMS="linux/amd64,linux/arm64"
    BUILD_ACTION="--push"
    echo -e "   Platforms: ${GREEN}linux/amd64, linux/arm64${NC}"
    echo ""
    echo -e "${YELLOW}Note: Multi-platform builds with --push will automatically push to registry${NC}"
else
    PLATFORMS="linux/amd64"
    BUILD_ACTION="--load"
    echo -e "   Platforms: ${GREEN}linux/amd64 (local only)${NC}"
    echo ""
    echo -e "${YELLOW}Note: Building single platform for local use${NC}"
    echo -e "${YELLOW}      Use --push flag for multi-platform builds${NC}"
fi

echo ""

# Build the image with version tag
docker buildx build \
    -f ./docker/Dockerfile \
    --platform "$PLATFORMS" \
    -t "$IMAGE_TAG" \
    -t "$IMAGE_NAME:latest" \
    --build-arg APP_VERSION="$VERSION" \
    $BUILD_ACTION \
    .

echo ""
echo -e "${GREEN}✅ Build complete!${NC}"
echo -e "   Tagged as: ${GREEN}$IMAGE_TAG${NC}"
echo -e "   Tagged as: ${GREEN}$IMAGE_NAME:latest${NC}"

# Confirmation message for push
if [ "$PUSH_IMAGE" = true ]; then
    echo ""
    echo -e "${GREEN}✓ Multi-platform images pushed to registry${NC}"
    echo -e "   Platforms: linux/amd64, linux/arm64${NC}"
fi

# Create Git tag if requested
if [ "$CREATE_GIT_TAG" = true ]; then
    echo ""
    
    # Check if tag already exists
    if git rev-parse "$VERSION" >/dev/null 2>&1; then
        echo -e "${YELLOW}⚠ Git tag $VERSION already exists${NC}"
    else
        echo -e "${BLUE}🏷️  Creating Git tag...${NC}"
        git tag -a "$VERSION" -m "Release $VERSION"
        echo -e "${GREEN}✓ Created Git tag: $VERSION${NC}"
        
        # Push tag if requested
        if [ "$PUSH_GIT_TAG" = true ]; then
            echo -e "${BLUE}📤 Pushing Git tag...${NC}"
            git push origin "$VERSION"
            echo -e "${GREEN}✓ Pushed Git tag: $VERSION${NC}"
        fi
    fi
fi

# Summary
echo ""
echo -e "${BLUE}================================${NC}"
echo -e "${GREEN}✅ All operations complete!${NC}"
echo -e "${BLUE}================================${NC}"
echo ""
echo "Summary:"
echo -e "  Version: ${GREEN}$VERSION${NC}"
echo -e "  Images: ${GREEN}$IMAGE_TAG${NC}"
echo -e "          ${GREEN}$IMAGE_NAME:latest${NC}"
if [ "$PUSH_IMAGE" = true ]; then
    echo -e "  Platforms: ${GREEN}linux/amd64, linux/arm64${NC}"
else
    echo -e "  Platforms: ${GREEN}linux/amd64 (local only)${NC}"
fi

if [ "$PUSH_IMAGE" = true ]; then
    echo -e "  Docker push: ${GREEN}✓ Done${NC}"
else
    echo -e "  Docker push: ${YELLOW}⊗ Skipped${NC}"
fi

if [ "$CREATE_GIT_TAG" = true ]; then
    echo -e "  Git tag: ${GREEN}✓ Created${NC}"
    if [ "$PUSH_GIT_TAG" = true ]; then
        echo -e "  Git tag push: ${GREEN}✓ Done${NC}"
    else
        echo -e "  Git tag push: ${YELLOW}⊗ Skipped${NC}"
    fi
else
    echo -e "  Git tag: ${YELLOW}⊗ Skipped${NC}"
fi

echo ""

# Show next steps if things weren't done
if [ "$PUSH_IMAGE" = false ]; then
    echo "💡 To build and push multi-platform images:"
    echo "   $0 --push"
    echo ""
    echo "💡 Or manually push with buildx:"
    echo "   docker buildx build --platform linux/amd64,linux/arm64 \\"
    echo "     -f ./docker/Dockerfile \\"
    echo "     -t $IMAGE_TAG -t $IMAGE_NAME:latest \\"
    echo "     --build-arg APP_VERSION=\"$VERSION\" \\"
    echo "     --push ."
    echo ""
fi

if [ "$CREATE_GIT_TAG" = false ]; then
    echo "💡 To create a Git tag:"
    echo "   git tag $VERSION"
    echo "   git push origin $VERSION"
    echo ""
fi

echo "💡 To run the container:"
echo "   docker run -p 3000:3000 -e NODE_ENV=production $IMAGE_TAG"
echo ""
echo "💡 To see all images:"
echo "   docker images | grep finbyzwebsite-nextjs"
echo ""
echo "💡 To inspect multi-platform manifest:"
echo "   docker buildx imagetools inspect $IMAGE_TAG"