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
            echo "Examples:"
            echo "  $0                    # Build only"
            echo "  $0 --push             # Build and push image"
            echo "  $0 --push-tag         # Build and create+push git tag"
            echo "  $0 --all              # Build, push image, create and push git tag"
            echo "  $0 --minor --all      # Increment minor version and do everything"
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
IMAGE_NAME="finbyzwebsite-nextjs:$VERSION"

echo ""
echo -e "${BLUE}🐳 Building Docker image...${NC}"
echo -e "   Version: ${GREEN}$VERSION${NC}"
echo -e "   Image: ${GREEN}$IMAGE_NAME${NC}"
echo ""

# Build the image
docker compose -f docker/docker-compose.yml build

echo ""
echo -e "${GREEN}✅ Build complete!${NC}"

# Push Docker image if requested
if [ "$PUSH_IMAGE" = true ]; then
    echo ""
    echo -e "${BLUE}📤 Pushing Docker image...${NC}"
    
    # Tag as latest as well
    docker tag $IMAGE_NAME finbyzwebsite-nextjs:latest
    
    # Push versioned image
    docker push $IMAGE_NAME
    echo -e "${GREEN}✓ Pushed: $IMAGE_NAME${NC}"
    
    # Push latest tag
    docker push finbyzwebsite-nextjs:latest
    echo -e "${GREEN}✓ Pushed: finbyzwebsite-nextjs:latest${NC}"
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
echo -e "  Image: ${GREEN}$IMAGE_NAME${NC}"

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
    echo "💡 To push the Docker image:"
    echo "   docker push $IMAGE_NAME"
    echo ""
fi

if [ "$CREATE_GIT_TAG" = false ]; then
    echo "💡 To create a Git tag:"
    echo "   git tag $VERSION"
    echo "   git push origin $VERSION"
    echo ""
fi