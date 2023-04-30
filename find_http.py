import os
import re

def green(message):
    return('\x1b[6;30;42m' + message+ '\x1b[0m')
print(green("1"))
# Define a function to search for a pattern in a file
def search_in_file(file_path, pattern):
    with open(file_path, 'r') as file:
        for line in file:
            if re.search(pattern, line):
                print(file_path)
                print(line.replace(pattern, green(pattern)))

# Define the pattern to search for
pattern = r'//utmccf.com'

# Iterate through all files in the current and sub-directories
for root, dirs, files in os.walk('.'):
    for file_name in files:
        # Ignore hidden files
        if file_name.startswith('404') :
            continue
        # Search for the pattern in the file
        if file_name.endswith(".html"):
            file_path = os.path.join(root, file_name)
            search_in_file(file_path, pattern)
