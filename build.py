# SSG with Python
import os

# List of Pages to rebuild
PAGES = ['index.html', 'archive.html', 'sponsor.html', 'team.html', 'edusummit.html', 'speakers.html', 'accepted-cfps.html', 'coc.html', 'about.html', 'schedule.html', 'directions.html', 'food.html']

print("Regenerating Pages...")

# Change Directory to src
os.chdir("src")

# Iterate over the pages and write the reusable components
for page in PAGES:
    if not os.path.exists(page):
        print(f"Skipping {page} (file not found)")
        continue
        
    print(f"Working on {page}")
    with open('header.html', 'r', encoding='utf-8') as header, \
            open('navbar.html', 'r', encoding='utf-8') as navbar, \
            open(page, 'r', encoding='utf-8') as content, \
            open('footer.html', 'r', encoding='utf-8') as footer, \
            open(f"../{page}", "w", encoding='utf-8') as output:
        output.write(header.read())
        output.write(navbar.read())
        output.write(content.read())
        output.write(footer.read())

# Change Directory
os.chdir("../")

# Success
print("All Done!")
