import cherrypy

class hello_world(object):
    @cherrypy.expose
    def index(self):
        return "Hello World!"

cherrypy.config.update({'server.socket_host': '127.0.0.1' ,'server.socket_port': 8182 })
cherrypy.quickstart(hello_world())