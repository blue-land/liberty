import sys
from wsgiref.simple_server import make_server
import json
from server.rpc import init
import ast
def not_found(env):
    request_path = env['PATH_INFO']
    status = '404 Not Found'
    headers = [('Content-Type', 'text/plain; charset=utf-8')]
    body = 'Not Found: {}'.format(request_path)
    return status, headers, body


def bad_request(env):
    request_method = env['REQUEST_METHOD']
    request_path = env['PATH_INFO']
    status = '400 Bad Request'
    headers = [('Content-Type', 'text/plain; charset=utf-8')]
    body = 'Bad Request: {} {}'.format(request_method, request_path)
    return status, headers, body


def routing(env):
    if 'REQUEST_METHOD' in env:
      request_method = env['REQUEST_METHOD']
    else: 
      request_method = env['HTTP_ACCESS_CONTROL_REQUEST_METHOD']
    request_path = env['PATH_INFO']
    allowed_request_method = {'GET', 'POST'}
    if request_method not in allowed_request_method:
        return bad_request(env)
    for i in dir(init):
      if i ==request_path[1:]: 
        status = '200 OK'
        headers = [('Content-Type', 'text/plain; charset=utf-8')]
        content_length = env.get('CONTENT_LENGTH', 0)
        content_byte = env.get('wsgi.input').read(int(content_length))
        content_str =content_byte.decode('utf-8')
        args = json.loads(content_str)
        body =eval(f'init.{i}')(args['content'])
        return status, headers, body
    return not_found(env)


def app(env, start_response):
    status, headers, body_raw = routing(env)
    body = [bytes(line, encoding='utf-8') for line in body_raw.splitlines()]
    start_response(status, headers)
    return body


def main(argv):
    httpd = make_server('localhost', 3000, app)
    httpd.serve_forever()
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))