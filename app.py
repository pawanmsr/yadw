from flask import Flask, request, render_template, jsonify
from utility import pos_tagging


app = Flask(__name__, template_folder = 'templates')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/process', methods = ['POST'])
def process():
    s = request.form['phrase']
    tags = pos_tagging(s)
    return jsonify({'output' : tags})

if __name__ == "__main__":
    app.run(debug=True)