import csv
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
from models.donation_model import save_donation, CSV_FILE, UPLOAD_DIR

donation_bp = Blueprint("donation_bp", __name__, url_prefix="/api/donations")

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "heic"}

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

@donation_bp.route("", methods=["POST"])
def donate():
    try:
        if "screenshot" not in request.files:
            return jsonify({"error": "No screenshot uploaded"}), 400

        screenshot = request.files["screenshot"]
        name = request.form.get("name")
        email = request.form.get("email")
        phone = request.form.get("phone")
        amount = request.form.get("amount")

        if not all([name, email, phone, amount]):
            return jsonify({"error": "All fields are required"}), 400

        if screenshot.filename == "" or not allowed_file(screenshot.filename):
            return jsonify({"error": "Invalid screenshot file"}), 400

        filename = secure_filename(f"{name}_{int(float(amount))}_{screenshot.filename}")
        file_path = os.path.join(UPLOAD_DIR, filename)
        screenshot.save(file_path)

        save_donation(name, email, phone, amount, filename)

        return jsonify({"message": "Donation submitted successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@donation_bp.route("", methods=["GET"])
def get_all_donations():
    try:
        donations = []
        with open(CSV_FILE, mode="r", newline="", encoding="utf-8") as file:
            reader = csv.DictReader(file)
            for row in reader:
                donations.append(row)
        return jsonify({"donations": donations}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@donation_bp.route("/<timestamp>", methods=["DELETE"])
def delete_donation(timestamp):
    try:
        donations = []
        found = False

        if os.path.exists(CSV_FILE):
            with open(CSV_FILE, mode="r", newline="", encoding="utf-8") as file:
                reader = csv.DictReader(file)
                for row in reader:
                    if row["Timestamp"] != timestamp:
                        donations.append(row)
                    else:
                        found = True
                        if row.get("Screenshot"):
                            file_path = os.path.join(UPLOAD_DIR, row["Screenshot"])
                            if os.path.exists(file_path):
                                os.remove(file_path)

        if not found:
            return jsonify({"error": "Donation not found"}), 404

        with open(CSV_FILE, mode="w", newline="", encoding="utf-8") as file:
            fieldnames = ["Name", "Email", "Phone", "Amount", "Screenshot", "Timestamp"]
            writer = csv.DictWriter(file, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(donations)

        return jsonify({"message": "Donation deleted successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@donation_bp.route("/clear", methods=["DELETE"])
def clear_all_donations():
    import os
    from models.donation_model import CSV_FILE, UPLOAD_DIR
    with open(CSV_FILE, "w", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["Name", "Email", "Phone", "Amount", "Screenshot", "Timestamp"])
    for f in os.listdir(UPLOAD_DIR):
        os.remove(os.path.join(UPLOAD_DIR, f))
    return jsonify({"message": "All donations cleared"}), 200
