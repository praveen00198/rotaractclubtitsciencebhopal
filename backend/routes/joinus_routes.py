from flask import Blueprint, request, jsonify
from models.joinus_models import (
    save_joinus, load_joinus, update_joinus_status, delete_joinus, clear_joinus
)

joinus_bp = Blueprint("joinus_bp", __name__, url_prefix="/api/joinus")

@joinus_bp.route("", methods=["POST"])
def join_us():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid JSON data"}), 400
        save_joinus(data)
        return jsonify({"message": "Thank you for joining us!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@joinus_bp.route("", methods=["GET"])
def get_members():
    try:
        members = load_joinus()
        return jsonify({"members": members})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@joinus_bp.route("/<timestamp>/approve", methods=["PUT"])
def approve_member(timestamp):
    try:
        update_joinus_status(timestamp, "Approved")
        return jsonify({"message": "Member approved"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@joinus_bp.route("/<timestamp>/reject", methods=["PUT"])
def reject_member(timestamp):
    try:
        update_joinus_status(timestamp, "Rejected")
        return jsonify({"message": "Member rejected"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@joinus_bp.route("/<timestamp>", methods=["DELETE"])
def delete_member(timestamp):
    try:
        delete_joinus(timestamp)
        return jsonify({"message": "Member deleted"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@joinus_bp.route("/clear", methods=["DELETE"])
def clear_members():
    try:
        clear_joinus()
        return jsonify({"message": "All members cleared"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
