import json
import urllib.request
import urllib.error

def handler(event, context):
    # API Gateway trigger event format
    http_method = event.get('httpMethod', 'GET')
    path = event.get('path', '/')
    headers = event.get('headers', {}) or {}
    body = event.get('body', '') or {}
    query_params = event.get('queryStringParameters', {}) or {}

    # Health check
    if path == '/health' or path.endswith('/health'):
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'ok': True, 'msg': 'proxy alive'})
        }

    # Extract GitHub API path: /api/xxx -> /xxx
    if path.startswith('/api/'):
        gh_path = path[4:]  # remove /api
    elif path.startswith('/api'):
        gh_path = path[3:]
    else:
        return {
            'statusCode': 404,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Use /api/<github-path>'})
        }

    # Build query string
    if query_params:
        qs = '&'.join(f'{k}={v}' for k, v in query_params.items())
        gh_url = f'https://api.github.com{gh_path}?{qs}'
    else:
        gh_url = f'https://api.github.com{gh_path}'

    # Forward headers
    gh_headers = {
        'Accept': headers.get('Accept', 'application/vnd.github+json'),
        'User-Agent': 'permaculture-cms-proxy'
    }
    auth = headers.get('Authorization') or headers.get('authorization')
    if auth:
        gh_headers['Authorization'] = auth
    ct = headers.get('Content-Type') or headers.get('content-type')
    if ct:
        gh_headers['Content-Type'] = ct

    # Make request to GitHub
    try:
        data = None
        if body and http_method in ('POST', 'PUT', 'PATCH', 'DELETE'):
            if isinstance(body, dict):
                data = json.dumps(body).encode('utf-8')
            elif isinstance(body, str):
                data = body.encode('utf-8')

        req = urllib.request.Request(gh_url, data=data, method=http_method, headers=gh_headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            resp_body = resp.read().decode('utf-8')
            resp_headers = dict(resp.headers)
            return {
                'statusCode': resp.status,
                'headers': {k: v for k, v in resp_headers.items()},
                'body': resp_body
            }
    except urllib.error.HTTPError as e:
        err_body = e.read().decode('utf-8')
        return {
            'statusCode': e.code,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': err_body
        }
    except Exception as e:
        return {
            'statusCode': 502,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }
