from flask import Flask

app = Flask(__name__)

#  Members API Route
@app.route('/members')
def members():
    return {"members": ["First member", "Second member", "Third member"]}

    
if __name__ == "__main__":
    app.run(debug=True)