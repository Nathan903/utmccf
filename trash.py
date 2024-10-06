import re

# Regular expression pattern to match <head> tags with optional attributes
pattern = r'(<head\b[^>]*>)'

# Replacement string
replacement = r'\1<a>right after head</a>'

# Example HTML content
html_content = """
<html>
<html style="margin-top: 0px !important; scroll-padding-top: 0px !important;"  lang="en">
<head>
<title>Example</title>
</head>
<body>
<p>Some content here.</p>
</body>
</html>
"""

# Perform the substitution
modified_html = re.sub(pattern, replacement, html_content)

print(modified_html)