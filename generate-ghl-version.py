#!/usr/bin/env python3
"""
Generate GHL-ready HTML file with inlined CSS and JS
"""

# Read the original HTML
with open('index.html', 'r') as f:
    html_content = f.read()

# Read CSS
with open('css/style.css', 'r') as f:
    css_content = f.read()

# Read JS
with open('js/main.js', 'r') as f:
    js_content = f.read()

# Remove @tailwind directives (not needed when using CDN)
css_content = css_content.replace('@tailwind base;\n', '')
css_content = css_content.replace('@tailwind components;\n', '')
css_content = css_content.replace('@tailwind utilities;\n', '')

# Replace external CSS link with inline CSS
html_content = html_content.replace(
    '    <!-- Custom CSS -->\n    <link rel="stylesheet" href="css/style.css">',
    f'    <!-- Custom CSS (Inlined for GHL) -->\n    <style>\n{css_content}    </style>'
)

# Replace external JS link with inline JS
html_content = html_content.replace(
    '    <script src="js/main.js"></script>',
    f'    <!-- Custom JavaScript (Inlined for GHL) -->\n    <script>\n{js_content}    </script>'
)

# Replace image paths with placeholders
image_replacements = {
    'assets/images/Logo.png': '[REPLACE-WITH-GHL-URL-LOGO]',
    'assets/images/endimg.png': '[REPLACE-WITH-GHL-URL-INSTRUCTOR]',
    'assets/images/logogrid/slder1.png': '[REPLACE-WITH-GHL-URL-LOGO1]',
    'assets/images/logogrid/slder2.png': '[REPLACE-WITH-GHL-URL-LOGO2]',
    'assets/images/logogrid/Slder3.png': '[REPLACE-WITH-GHL-URL-LOGO3]',
    'assets/images/pplimgs/Hakeem.webp': '[REPLACE-WITH-GHL-URL-HAKEEM]',
    'assets/images/pplimgs/Larita.webp': '[REPLACE-WITH-GHL-URL-LARITA]',
    'assets/images/pplimgs/Caitlin.webp': '[REPLACE-WITH-GHL-URL-CAITLIN]',
    'assets/images/pplimgs/Elleni.webp': '[REPLACE-WITH-GHL-URL-ELLENI]',
    'assets/images/pplimgs/Jacinda.webp': '[REPLACE-WITH-GHL-URL-JACINDA]',
    'assets/images/pplimgs/Tanya.webp': '[REPLACE-WITH-GHL-URL-TANYA]',
    'assets/images/pplimgs/Ronnie.webp': '[REPLACE-WITH-GHL-URL-RONNIE]',
    'assets/images/pplimgs/Amanda.webp': '[REPLACE-WITH-GHL-URL-AMANDA]',
    'assets/images/pplimgs/Kerristen.webp': '[REPLACE-WITH-GHL-URL-KERRISTEN]',
    'assets/images/pplcomnts/aa.webp': '[REPLACE-WITH-GHL-URL-COMMENT-AA]',
    'assets/images/pplcomnts/bb.webp': '[REPLACE-WITH-GHL-URL-COMMENT-BB]',
    'assets/images/pplcomnts/cc.webp': '[REPLACE-WITH-GHL-URL-COMMENT-CC]',
    'assets/images/pplcomnts/dd.webp': '[REPLACE-WITH-GHL-URL-COMMENT-DD]',
    'assets/images/pplcomnts/ee.webp': '[REPLACE-WITH-GHL-URL-COMMENT-EE]',
    'assets/images/pplcomnts/ff.webp': '[REPLACE-WITH-GHL-URL-COMMENT-FF]',
    'assets/images/pplcomnts/hh.png': '[REPLACE-WITH-GHL-URL-COMMENT-HH]',
    'assets/images/pplcomnts/ii.webp': '[REPLACE-WITH-GHL-URL-COMMENT-II]',
    'assets/images/pplcomnts/jj.webp': '[REPLACE-WITH-GHL-URL-COMMENT-JJ]',
    'assets/images/pplcomnts/kk.webp': '[REPLACE-WITH-GHL-URL-COMMENT-KK]',
    'assets/images/pplcomnts/ll.webp': '[REPLACE-WITH-GHL-URL-COMMENT-LL]',
}

for old_path, placeholder in image_replacements.items():
    html_content = html_content.replace(old_path, placeholder)

# Add GHL tracking placeholder
html_content = html_content.replace(
    '    <link rel="icon" type="image/png" href="[REPLACE-WITH-GHL-URL-LOGO]">',
    '''    <link rel="icon" type="image/png" href="[REPLACE-WITH-GHL-URL-LOGO]">
    
    <!-- GHL TRACKING CODE -->
    <!-- Paste your GHL tracking script here -->
    <script>
    // Your GHL tracking code will go here
    // Get this from your GHL account settings
    </script>
    <!-- END GHL TRACKING CODE -->'''
)

# Add comment before Typeform section
html_content = html_content.replace(
    'href="apply.html"',
    'href="#apply"  <!-- UPDATE THIS: Change to your GHL form page URL or use #apply for same-page form -->'
)

# Write the GHL-ready file
with open('ghl-ready/index-ghl-ready.html', 'w') as f:
    f.write(html_content)

print("✅ GHL-ready HTML file created successfully!")
print("📁 Location: ghl-ready/index-ghl-ready.html")
print("\n📋 Next steps:")
print("1. Upload images from ghl-ready/images-to-upload/ to GHL Media Library")
print("2. Replace all [REPLACE-WITH-GHL-URL-...] placeholders with actual URLs")
print("3. Add your GHL tracking code")
print("4. Paste into GHL custom code editor")
