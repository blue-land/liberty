# from time import time
# ## If you want write async tornado code import it
# # from from wsrpc import WebSocketRoute, WebSocket, wsrpc_static
# ## else you should use thread-base handler
# from wsrpc import WebSocketRoute, WebSocketThreaded as WebSocket, wsrpc_static

# tornado.web.Application((
#     # js static files will available as "/js/wsrpc.min.js".
#     wsrpc_static(r'/js/(.*)'),
#     # WebSocket handler. Client will connect here.
#     (r"/ws/", WebSocket),
#     # Serve other static files
#     (r'/(.*)', tornado.web.StaticFileHandler, {
#          'path': os.path.join(project_root, 'static'),
#          'default_filename': 'index.html'
#     }),
# ))

# # This class should be call by client.
# # Connection object will be have the instance of this class when will call route-alias.
# class TestRoute(WebSocketRoute):
#     # This method will be executed when client will call route-alias first time.
#     def init(self, **kwargs):
#         # the python __init__ must be return "self". This method might return anything.
#         return kwargs

#     def getEpoch(self):
#         # this method named by camelCase because the client can call it.
#         return time()

# # stateful request
# # this is the route alias TestRoute as "test1"
# WebSocket.ROUTES['test1'] = TestRoute

# # stateless request
# WebSocket.ROUTES['test2'] = lambda *a, **kw: True

# # initialize ThreadPool. Needed when using WebSocketThreaded.
# WebSocket.init_pool()