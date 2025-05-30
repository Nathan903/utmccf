domain = "utmccf.wordpress.com"

downloadAgain=False
resultzip=False
verbose=False
testOnlyOneFile=False
removeExtraFiles=True
testWebsite=False

import os, re, time, datetime, pytz, sys, subprocess, shutil
import create_newsletters
startTime=time.time()
resultPath=f'clean_{domain}'
doNotShowShellResult=">run.log 2>&1"#">/dev/null 2>&1 "

# functions for debugging and logging purposes. Not crucial
os.makedirs(resultPath, exist_ok=True)
def print_to_log_file(prefix, message=""):
  with open(resultPath+"/debug.log", "a") as f:
    f.write(prefix+" "+message+"\n")
def print_done(message):
  print_to_log_file("\t\t"+message)
  print(message)
def print_debug_info(message_str):
  print_to_log_file("\t\tINFO:",message_str)
def print_success(message_str):
  print_to_log_file("\t\tSUCCESS:",message_str)
warning_counter=0
def print_warning(message_str):
  global warning_counter
  warning_counter+=1
  print_to_log_file("WARNING:",message_str)
  print("WARNING:",message_str)
error_counter=0
def print_error(message_str):
  global error_counter
  error_counter+=1
  print_to_log_file("ERROR:",message_str)
  print("ERROR:",message_str)

if len(sys.argv) > 1:
  print_debug_info(f"ARG={sys.argv[1]}")
  if sys.argv[1]=="--downloadAgain":
    downloadAgain=True

  
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

  ############below are css that conflicts with extra.css#####################
  r""".large-screen.navigation-classic .primary-navigation .menu-primary > ul > li:hover,""",
  r""".large-screen.navigation-classic .primary-navigation .menu-primary > ul > li.current-menu-item > a,""",
  r""".large-screen.navigation-classic .primary-navigation .menu-primary > ul > li.current_page_item > a,""",
  r""".large-screen.navigation-classic .primary-navigation .menu-primary > ul > li > a:hover,""",
  r""".large-screen.navigation-classic .primary-navigation .menu-primary > ul > li > a:focus,""",
  r""".large-screen.navigation-classic .primary-navigation .menu-primary > ul > li > a:active,""",
  r""".large-screen.navigation-classic .primary-navigation ul ul li,""",
  r'aria-current="page"', #aria-current="page" for navbar
  r'current-menu-parent',# for navbar
  r'current-menu-item',# for navbar
  r'current-menu-ancestor',# for navbar
  r'current-page-parent',# for navbar
  r'current-page-item',# for navbar
  r'current-page-ancestor',# for navbar
  r'current_menu_parent',# for navbar
  r'current_menu_item',# for navbar
  r'current_menu_ancestor',# for navbar
  r'current_page_parent',# for navbar
  r'current_page_item',# for navbar
  r'current_page_ancestor',# for navbar
  # <div class="wordads-tag" data-slot-type="sidebar" style="display: none;"></div> 
  r'<div[^>]*class=["\'][^"\']*\bwordads-tag\b[^"\']*["\'][^>]*>.*?</div>',

)
tagsToReplace=(
  ( #add <link rel="stylesheet" href="extra.css"> to after head
    r'(<head\b[^>]*>)', #<head>
    r"""\1<link rel="stylesheet" href="/extra.css">"""
  ),
  ( # add js to <button class="menu-toggle" aria-expanded="false">Menu</button>
    r'<button[^>]*class="menu-toggle"[^>]*>.*?</button>',
    r"""<button onclick="var l=document.querySelector('#customLogo'),t=document.querySelector('#customTitle');l.style.display=t.style.display=(l.style.display==='none'?'block':'none');" class="menu-toggle" aria-expanded="false"></button>"""
  ),
  ( # remove the header image <a href="index.html" class="header-image" rel="home"><img src="wp-content/uploads/2019/05/cropped-header4-1.png" width="1350" height="110" alt=""></a>
    r'(?s)(<a[^>]*class=["\']header-image["\'][^>]*>)(.*?)(</a>)',
    r"""   <img id="customLogo" src="/logo.svg" alt="utmccf_logo" style="width:10%; max-width:110px; object-fit: cover;margin: -10px 0px -15px 0px; display:inline!important;">
    <span id="customTitle" style="letter-spacing: normal; color: white; line-height: 1.25;">
          <span style="font-size: 1.4em; font-weight: bold; letter-spacing: 0.04em;">多伦多大学国语基督徒团契</span>
          <br>
          <span style="font-size: 0.9em; line-height: 0em;">University of Toronto Mandarin Chinese Christian Fellowship</span>
    </span>"""
  ),

)
scriptKeywords=(
  "insertInlineAds",
  "google_analytics",
  "google-analytics",
  "Advertisements",
  "s.pubmine.com",
  "advertising",
  "sascdn.com",
  "smartadserver",
  "outbrain",
  "atatags-",
  # "gdpr"
)
socialMediaIconSvg = {
  ############insert svg icon for social medias##################
  '#icon-facebook"></use>':'<path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z">',
  '#icon-youtube"></use>':'<path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"></path>',
  '#icon-instagram"></use>':'<path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>'
}
warning_found_broken_absolute_url=False
def check_for_broken_absolute_url(file_path, text):
  global warning_found_broken_absolute_url
  warning_found_broken_absolute_url=True
  def absolute_url_to_relative(url):
    keyword = "utmccf.com"
    pos = url.find(keyword)
    if pos != -1:
      return url[pos+len(keyword):]
    return url

  #see https://stackoverflow.com/questions/904046/absolute-urls-relative-urls-and
  # Define the pattern to search for
  pattern = 'utmccf.com'
  regexpattern = r"""     "[^@]{0,13}?utmccf\.com.{0,512}?"     """.strip()#.replace("$DOMAIN$",)
  for line in text.split("\n"):
    if re.search(regexpattern, line):
      warning=f"This page 『 {file_path.replace('clean_','').replace('/index.html','')} 』 contains these absolute url links:\n"
      for url in re.findall(regexpattern, line):
        url=url.strip('"')
        warning +=f"\t- 【 {url} 】\tfix it by changing it to:【 {absolute_url_to_relative(url)} 】\n"
      print_warning(warning)

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

  newsletterimg, this_weeks_event_summary = create_newsletters.get_latest_newsletter()
  text = text.replace(r"<!--$this_weeks_event$-->", fr"""<img src="/newsletters/{newsletterimg}" alt="Newsletter" style="box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);"/>""")
  text = text.replace(r"$this_weeks_event_summary$", this_weeks_event_summary)

  for literalsToRemove in findUnwantedScripts(text):
    text = text.replace(literalsToRemove,"")     

  for key in socialMediaIconSvg:
    text = text.replace(key, key+socialMediaIconSvg[key])
  
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
  

  for tagToReplace,tagToReplaceWith in tagsToReplace:
    if verbose:
      for i in (re.findall(tagToReplace,text)):
        print(i)
    text = re.sub(tagToReplace,tagToReplaceWith, text, flags=re.IGNORECASE)


  # remove the whitespace on the top of the website
  try:
    indexInsert=text.index('<html')+ len('<html')
    text=text[:indexInsert]+' style="margin-top: 0px !important; scroll-padding-top: 0px !important;" '+text[indexInsert:]
  except:
    print_error(f"`clean()` - cannot find <html> tag in file in [{filepath}]")
  if text.count("<body") == 1:
    text = text.replace("<body", r'<body style="margin-top: 0px !important;" ')
  else:
    print_error(f"`clean()` - found {text.count('<body')} body tags")

  if original==text:
    print_warning(f"`clean()` - no change in [{filepath}]")

  check_for_broken_absolute_url(filepath,text)

  with open(filepath,'w',encoding="utf-8") as f:
    f.write(text)

  
if downloadAgain:
  if os.path.exists(domain):
    shutil.rmtree(domain)
  downloadCommand=f'wget --reject xml,txt --reject-regex "(.*)\?(.*)|(.*)/feed/(.*)" --mirror --convert-links --adjust-extension --page-requisites --no-parent https://{domain}/404 --content-on-error'
  os.system(downloadCommand +doNotShowShellResult)
  downloadCommand=f'wget --reject xml,txt --reject-regex "(.*)\?(.*)|(.*)/feed/(.*)" --mirror --convert-links --adjust-extension --page-requisites --no-parent https://{domain}/'
  os.system(downloadCommand +doNotShowShellResult)
  print_success(f"Finished download (at: {int(time.time()-startTime)} seconds)")

#copy everything downloaded in /utmccf.wordpress.com and /manually_made_extra_files into /clean_utmccf.wordpress.com
from distutils.dir_util import copy_tree
if testOnlyOneFile:
  from distutils import file_util
  source_file = domain+"/index.html"
  destination_file = resultPath+"/index.html"
  file_util.copy_file(source_file, destination_file)
  clean(destination_file)
  exit()
else:
  copy_tree(domain, resultPath)
  copy_tree("manually_made_extra_files", resultPath)

extensionToExcludeFromProduction = ('.py','.')
keywordsToExcludeFromProduction = ('/?', '/feed/')
extensionToNotClean = ('.txt','.xml', ".log",".jpg",".png",".webp", ".svg",".css",".pdf")

#main loop to clean all files in /clean_utmccf.wordpress.com
for subdir, dirs, files in os.walk(resultPath):
  for file in files:
    path=os.path.join(subdir, file)
    if removeExtraFiles and path.endswith(('.py','.')):
      os.remove(path)
      print_debug_info(f"ignoring [{path}]. This is omitted in production website.")
      continue 

    if path.endswith(".html"):
      clean(path)
    elif path.endswith(extensionToNotClean):
      #files to NOT clean
      pass
      #print_debug_info(f"downloaded file [{path}] is not an HTML. It is not processed for ad/tracker cleaning")
    else:
      print_warning(f"downloaded file [{path}] is not an HTML. It is not processed for ad/tracker cleaning")

print_warning(subprocess.run(['wget', '--version'], capture_output=True, text=True, check=True).stdout)
print_success(f"Finished processing (at: {int(time.time()-startTime)} seconds)")
if resultzip:
  os.system(f"zip -r result_{domain}.zip {resultPath}"+doNotShowShellResult)
  print_success(f"Finished zipping (at: {int(time.time()-startTime)} seconds)")
print_done(f"DONE: website published with {warning_counter} warnings and {error_counter} errors. Last updated {datetime.datetime.now(pytz.timezone('America/Toronto')).strftime('%Y-%m-%d %H:%M:%S %Z') }\n\n")

if warning_counter!=0 or error_counter!=0:
  print("* Website is published with warnings/errors. Please check all affected pages. If nothing is broken, ignore the warnings/errors")
if warning_found_broken_absolute_url:
  print("** Absolute url may or may not cause broken links on the website. Click on all links & buttons on the listed pages to see if they are broken")

if testWebsite:
  from test_website import test_website
  test_website(resultPath)

import convert_site_to_traditional_characters