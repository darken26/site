#! /usr/bin/env python

import os
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template


class NoPageFound(webapp.RequestHandler):
    def get(self):
        self.error(404)
        path = os.path.join(os.path.dirname(__file__), '404.html')
        self.response.out.write(template.render(path, {}))

class MainPage(webapp.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        path = os.path.join(os.path.dirname(__file__), 'index.html')

        self.response.out.write(template.render(path, {}))

class ResumePage(webapp.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        path = os.path.join(os.path.dirname(__file__), 'resume.html')

        self.response.out.write(template.render(path, {}))
		
class Page1Page(webapp.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        path = os.path.join(os.path.dirname(__file__), 'templates/page1.html')

        self.response.out.write(template.render(path, {}))

class Page2Page(webapp.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        path = os.path.join(os.path.dirname(__file__), 'templates/page2.html')

        self.response.out.write(template.render(path, {}))

		
def main():
    application = webapp.WSGIApplication([('/', MainPage),
        ('/resume', ResumePage),
		('/page1', Page1Page),
		('/page2', Page2Page),
        ('/.*', NoPageFound)
        ], 
        debug=False) 
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
