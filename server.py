from flask import Flask, render_template, request, redirect
from flask_mail import Mail

from werkzeug.contrib.fixers import ProxyFix

from helpers import send_email

import os

app = Flask(__name__, static_url_path='/static')

# configuring email
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.environ['HAWWILLI_MAIL_USERNAME']
app.config['MAIL_PASSWORD'] = os.environ['HAWWILLI_MAIL_PASSWORD']
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)


@app.route("/", methods=['GET'])
def index():
	return render_template("index.html")

@app.route("/notify", methods=['POST'])
def notify():
	tilte = "New Signup"
	message = "{} signed up for ~ {} ~, you can contact him/her through {}".format(request.form['input_name'], request.form['selected_plan'], request.form['input_email'])
	sender = os.environ['HAWWILLI_MAIL_USERNAME']
	recipients = ['yusuf.musleh@gmail.com', 'ysr.sayed@gmail.com']
	send_email(mail, tilte, message, sender, recipients)
	return "Success"

app.wsgi_app = ProxyFix(app.wsgi_app)

if __name__ == "__main__":
    app.run()
