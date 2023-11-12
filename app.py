from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
# cors = CORS(app, resources={r"/signup": {"origins": "*"}})
CORS(app)

@app.route('/')
def getFormData():
    print("Yes")

@app.route('/signup', methods=['POST'])
def signUp():
    data = request.get_json()
    print(data)
    response = jsonify({"message": "Success!"})
    # Set CORS headers
    response.headers.add("Access-Control-Allow-Origin", "http://localhost:5500")
    response.headers.add("Access-Control-Allow-Methods", "POST")
    return response

if __name__ == '__main__':
    app.run()
