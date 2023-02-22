domain = "utmccf.wordpress.com"

downloadAgain=False
resultzip=False
verbose=False
testOnlyOneFile=False
removeExtraFiles=False
tagsToRemove=(
  #marketing bar
  r"""<div id="marketingbar".*?marketing_bar"><\/a><\/div>""",
  #remove the blank space above main menu e.g.   <a href="index.html" class="site-logo-link" rel="home" itemprop="url"></a>
  r"""<a href=.*?site-logo-link.*?>.*?</a>""", 
  #footer ad, e.g. <div class="site-info"><a href="https://wordpress.com/?ref=footer_blog" rel="nofollow">Blog at WordPress.com.</a></div>
  r"""<div.class=.site-info.>[\s\S]*?log at WordPress.com[\s\S]*?</div>""",
  r"""<script id="wpcom_remote_login_js">[\s\S]*?<\/script>""", #wp login  
  r"""<script\b[^>]*>[^>]*?actionbar[\s\S]*?<\/script\b[^>]*>""", #actionbar
  r"""<!-- CCPA \[start\] -->[\s\S]*?<!-- CCPA \[end\] -->""", #<!-- CCPA [start] -->blabla<!-- CCPA [end] -->
  r"""<div.*?class="widget widget_eu_cookie_law_widget".*?>[\s\S]*?</div>[\s]*?</div>""", #cookie banner

  ############below are optional optimization####################
  r"""<link.*rel=.pingback..*?>""", #pingbacks like <link rel="pingback" href="https://tendertastytester.wordpress.com/xmlrpc.php">
  r"""<link.*rel='dns-prefetch'.*/>""", #dns prefetches
)

scriptKeywords=(
  "insertInlineAds",
  "google_analytics",
  "google-analytics",
  "Advertisements",
  "advertising",
  "sascdn.com",
  "smartadserver",
  "outbrain",
  "gdpr"
)

import os, re,time
startTime=time.time()
resultPath=f'clean_{domain}'
doNotShowShellResult=">run.log 2>&1"#">/dev/null 2>&1 "

def contains(text,keywordList):
  for keyword in keywordList:
    if keyword in text:
      return True
  return False

def findUnwantedScripts(text): #look for all <script> tags
  toBeRemoved=[]
  for scriptTag in (re.findall(r"<script[\s\S]*?>[\s\S]*?<\/script>",text)):
    if contains(scriptTag,scriptKeywords):
      toBeRemoved.append(scriptTag)
  return toBeRemoved

def clean(filepath):
  with open(filepath, encoding="utf-8") as f:
    original=text=f.read()

  for literalsToRemove in findUnwantedScripts(text):
    text = text.replace(literalsToRemove,"")     
  
  for tagToRemove in tagsToRemove:
    if verbose :
      print(f'\x1b[0;30;47m{tagToRemove}\x1b[0m')
      for i in (re.findall(tagToRemove,text)):
        """
        #developing test to give exception
        if "src='https:" in i and "wp.com" in i and "plugin" not in i:
          continue
        if "edin-" in i:
          continue
        text=text.replace(i,"") #remove item
        i= ''.join(i.split()) #remove all whitespace
        """
        if len(i)>300:
          i=i[:150]+'\x1b[0;30;40m  ...  \x1b[0m'+i[-150:]
        print('\x1b[0;30;41m>>>\x1b[0m',i)
    #https://stackoverflow.com/questions/16585635/how-to-find-script-tag-from-the-string-with-javascript-regular-expression  
    #https://stackoverflow.com/questions/500864/case-insensitive-regular-expression-without-re-compile
    text = re.sub(tagToRemove,"",text,flags=re.IGNORECASE)
  
  try:
    indexInsert=text.index('<html')+ len('<html')
    text=text[:indexInsert]+' style="margin-top: 0px !important; scroll-padding-top: 0px !important;" '+text[indexInsert:]
  except:
    print(f"!Error: cannot find <html> tag in file @ {filepath}")

  text=text.replace("Blog at WordPress.com","Blog not at WordPress.com")
  
  if original==text:
    print(f"!Warning: no change @ {filepath}")

  with open(filepath,'w',encoding="utf-8") as f:
    f.write(text)

  
if downloadAgain:
  downloadCommand=f'wget --reject xml,txt --reject-regex "(.*)\?(.*)|(.*)/feed/(.*)" --mirror --convert-links --adjust-extension --page-requisites --no-parent https://{domain}/'
  os.system(downloadCommand +doNotShowShellResult)
  print("Finished download (at:",int(time.time()-startTime),"seconds)")

from distutils.dir_util import copy_tree
copy_tree(domain, resultPath)

for subdir, dirs, files in os.walk(resultPath):
  for file in files:
    path=os.path.join(subdir, file)
    if removeExtraFiles and ('?' in path or 'feed' in path):
      os.remove(path)
      print(path)
    else:
      clean(path)
    if testOnlyOneFile:
      exit()

print("Finished processing (at:",int(time.time()-startTime),"seconds)")
if resultzip:
  os.system(f"zip -r result_{domain}.zip {resultPath}"+doNotShowShellResult)
  print("Finished zipping (at:",int(time.time()-startTime),"seconds)")

print("DONE.")
