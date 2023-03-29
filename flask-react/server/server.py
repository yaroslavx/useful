from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/members/*": {"origins": "http://localhost:5173"}})

#  Members API Route
@app.route('/members')
def members():
    return {"members": ["First member", "Second member", "Third member"]}

    
if __name__ == "__main__":
    app.run(debug=True)