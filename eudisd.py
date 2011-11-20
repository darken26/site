from google.appengine.ext import webapp
from google.appengine.ext.webapp.util run_wsgi_app

class MainPage(webapp.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.out.write('Hello World!')

application = webapp.WSGIApplication([('/', MainPage), debug=True)


main():
    run_wsgi_app(application)
    return

if __name__ == "__main__":
    main()
