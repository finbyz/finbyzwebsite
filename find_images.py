
import os
import re

ROUTES = [
    "/ai-automation/guides/moltbot-vs-claude-code",
    "/resources/brochure",
    "/hiring-process",
    "/n8n/insights",
    "/docs",
    "/n8n",
    "/pricing",
    "/resources",
    "/why-join-finbyz",
    "/solutions/ems-software",
    "/solutions/erp",
    "/careers/hiring-process",
    "/careers/insights",
    "/careers/job-openings",
    "/careers/why-join-finbyz"
]

BASE_DIR = "/home/frappe/finbyz-nextjs/src/app"

def find_page_files(route):
    cleaned_route = route.lstrip('/')
    target_suffix = os.path.join(cleaned_route, "page.tsx")
    matches = []
    
    for root, dirs, files in os.walk(BASE_DIR):
        if "page.tsx" in files:
            full_path = os.path.join(root, "page.tsx")
            # For strict match (relative to src/app):
            rel_path = os.path.relpath(full_path, BASE_DIR)
            
            # Remove (group) folders from rel path for comparison
            # e.g. (webpages)/pricing/page.tsx -> pricing/page.tsx
            clean_rel = re.sub(r'\([^)]+\)/', '', rel_path)
            
            # Check exact match first
            if clean_rel == target_suffix:
                return [full_path]

            # Fallback: ends with suffix (less strict)
            if full_path.endswith(target_suffix):
                matches.append(full_path)
    
    return matches

def extract_image(file_path):
    try:
        with open(file_path, 'r') as f:
            content = f.read()
            
        # 1. DynamicHero heroImage={{ src: '...' }}
        # Match src: '...' or src: "..."
        match = re.search(r"heroImage\s*=\s*\{\{\s*[^}]*src:\s*['\"]([^'\"]+)['\"]", content)
        if match: return match.group(1)

        # 2. HeroSection image="..." or similar
        match = re.search(r"HeroSection\s+[^>]*image=['\"]([^'\"]+)['\"]", content)
        if match: return match.group(1)
        
        # 3. BlogHero heroImage="..."
        match = re.search(r"BlogHero\s+[^>]*heroImage=['\"]([^'\"]+)['\"]", content)
        if match: return match.group(1)
        
        # 4. <Image ... src="..." ... /> roughly
        # This is too broad usually.
        
        # 5. Look for `const heroImage = "..."` or inside object
        # heroProps = { ... image: '...' }
        match = re.search(r"heroProps\s*=\s*\{[^}]*image:\s*['\"]([^'\"]+)['\"]", content)
        if match: return match.group(1)
        
        # 6. Look for `src` prop in a likely Hero component tag
        match = re.search(r"<[A-Za-z]*Hero[A-Za-z]*\s+[^>]*src=['\"]([^'\"]+)['\"]", content)
        if match: return match.group(1)

    except Exception as e:
        return f"ERROR: {e}"

    return "NOT_FOUND"

print(f"{'ROUTE':<50} | {'IMAGE':<50} | {'FILE_PATH'}")
print("-" * 150)

found_results = []

for route in ROUTES:
    paths = find_page_files(route)
    image = "N/A"
    path_str = "NOT FOUND"
    
    if paths:
        # Prefer exact match if possible, otherwise first match?
        # Logic in find_page_files prioritization handles exact match return immediately.
        # But if multiple fuzzy matches?
        # For now just take the first one found if list returned.
        chosen_path = paths[0]
        path_str = chosen_path
        image = extract_image(chosen_path)
        found_results.append((route, image, chosen_path))
    else:
        # Try harder? Maybe /hiring-process is /careers/hiring-process?
        # But script is checking ends_with.
        pass
        
    print(f"{route:<50} | {image:<50} | {path_str}")

