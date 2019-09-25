import cherrypy
from jinja2 import Environment, FileSystemLoader
env = Environment(loader=FileSystemLoader('templates'))

class hello_world(object):
    @cherrypy.expose
    def index(self):
        tmpl = env.get_template('index.html')
        return tmpl.render()

# You can remove the line below. This simply changes the default port 8080 to a specified port
cherrypy.config.update({'server.socket_host': '127.0.0.1' ,'server.socket_port': 8182 })
cherrypy.quickstart(hello_world())