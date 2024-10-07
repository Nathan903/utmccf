import http.server
import socketserver
from os.path import exists

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        syspath = self.path[1:]
        if self.path == '/':
            self.path = 'index.html'
        if self.path == '/en/':
            self.path = 'en/index.html'
        elif (not '.' in self.path):
            if self.path[-1] =="/":
                if exists(syspath+"index.html"):
                    self.path +="index.html"#= self.path[0:-1]+'.html'
                if exists(syspath[0:-1]+'.html'):
                    self.path= self.path[0:-1]+'.html'
            else:
                if exists(syspath+".html"):
                    self.path+='.html'
                if exists(syspath+"/index.html"):
                    self.path +="/index.html"
        print(self.path)
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

def test_website(path):
    import os
    os.chdir(path)

    # Create an object of the above class
    handler_object = MyHttpRequestHandler

    PORT = 3333
    my_server = socketserver.TCPServer(("", PORT), handler_object)

    # Star the server
    import webbrowser
    webbrowser.open("http://localhost:"+str(PORT))
    my_server.serve_forever()

if __name__ == '__main__':
    test_website("clean_utmccf.wordpress.com")