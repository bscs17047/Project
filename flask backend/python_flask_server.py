##### pip install Flask #####

from datetime import datetime
from flask import Flask, request

req = {}

app = Flask(__name__)


@app.route('/data')
def send_data():
    return {"data": "OCEAN results"}


@app.route('/send', methods=['GET', 'POST'])
def get_data():
    global req
    if request.method == 'POST':
        req = request.get_json()
        print(req)
        return req
    else:
        return "Data received in server"


app.run(host="0.0.0.0", port=80)
