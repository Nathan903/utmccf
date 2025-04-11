import os
from bs4 import BeautifulSoup, NavigableString, Comment
import shutil

source_folder = "clean_utmccf.wordpress.com"  # Replace with your source folder path
destination_folder = "clean_utmccf.wordpress.com_zht"  # Replace with your destination folder path

from opencc import OpenCC
cc = OpenCC('s2t')  # Simplified to Traditional
def convert_to_traditional(text):
    return cc.convert(text)

# Tags we want to skip translating their content
SKIP_TAGS = {'script', 'style', 'code', 'noscript'}

# Attributes we don't want to touch
SKIP_ATTRS = {'href', 'src', 'onclick', 'onload', 'style', 'class', 'id'}

# Should this tag's text be translated?
def should_translate(tag):
    return tag.name not in SKIP_TAGS

# Recursively translate only NavigableStrings in allowed tags
def translate_element(element):
    for content in element.contents:
        if isinstance(content, NavigableString) and not isinstance(content, Comment):
            # Clean and skip whitespace-only strings
            stripped = content.strip()
            if stripped:
                new_text = convert_to_traditional(content)
                content.replace_with(new_text)
        elif content.name and should_translate(content):
            translate_element(content)

# Copy folder structure
def ensure_folder_structure(path):
    if not os.path.exists(path):
        os.makedirs(path)

    # Walk through the source folder
for root, dirs, files in os.walk(source_folder):
    rel_path = os.path.relpath(root, source_folder)
    dest_dir = os.path.join(destination_folder, rel_path)
    ensure_folder_structure(dest_dir)

    for file in files:
        src_file_path = os.path.join(root, file)
        dest_file_path = os.path.join(dest_dir, file)

        if file.lower().endswith(".html"):
            with open(src_file_path, "r", encoding="utf-8") as f:
                html = f.read()

            soup = BeautifulSoup(html, "html.parser")
            translate_element(soup.body or soup)  # Translate only <body> if present

            with open(dest_file_path, "w", encoding="utf-8") as f:
                f.write(str(soup))
        else:
            # Copy non-HTML files directly
            shutil.copy2(src_file_path, dest_file_path)
