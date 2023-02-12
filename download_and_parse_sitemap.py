import os, time
start=time.time()
domain ="utmccf.com"
fname="sitemap.xml"
os.system(f'curl -O https://{domain}/{fname}')
with open(fname+".old", 'r') as f:
    old = f.read()
with open(fname, 'r') as f:
    xml = f.read()
if(old!=xml):
    os.rename(fname, fname+".old")
    #exit()

import re
for line in re.findall("<lastmod>2023.*?</lastmod>",xml):
    print(line[:50])

from bs4 import BeautifulSoup as bs
import lxml
xmlDict = {}
soup = bs(xml, "xml")

for tag in soup.find_all("url"):
    #print(tag.text)
    if "2023" in str(tag.lastmod):
        ##print("a",tag.loc,"\n")
        for line in re.findall(">http.*?</",str(tag)):
            url = line[1:-2]
            print(url)
            #os.system(f'wget {url}')

    
    if re.search("<lastmod>2023.*?</lastmod>",tag.text) :
        pass
print(time.time()-start)
