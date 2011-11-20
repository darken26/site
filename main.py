#! /usr/bin/env python

import os
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template

class MainPage(webapp.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        path = os.path.join(os.path.dirname(__file__), 'index.html')

        self.response.out.write(template.render("index.html", {}))


def main():
    application = webapp.WSGIApplication([('/', MainPage)], debug=False)
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
