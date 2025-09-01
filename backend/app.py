from flask import Flask
from flask_cors import CORS
from routes.joinus_routes import joinus_bp
from routes.donation_routes import donation_bp
from routes.event_routes import event_bp
from models.donation_model import UPLOAD_DIR 
from flask import send_from_directory

app = Flask(__name__)
CORS(app)

app.register_blueprint(joinus_bp)
app.register_blueprint(donation_bp)
app.register_blueprint(event_bp)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_DIR, filename)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
