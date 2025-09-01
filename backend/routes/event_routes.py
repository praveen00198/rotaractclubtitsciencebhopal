from flask import Blueprint, request, jsonify
from models.event_model import save_event, get_events, delete_event, get_event_count

event_bp = Blueprint("event_bp", __name__, url_prefix="/api/events")

@event_bp.route("", methods=["POST"])
def add_event():
    try:
        event_id = save_event(request.form, request.files.getlist("image"))
        return jsonify({"message": "Event saved successfully", "id": event_id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@event_bp.route("", methods=["GET"])
def fetch_events():
    try:
        return jsonify({"events": get_events()}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@event_bp.route("/<event_id>", methods=["DELETE"])
def remove_event(event_id):
    try:
        success = delete_event(event_id)
        if success:
            return jsonify({"message": "Event deleted successfully"}), 200
        return jsonify({"error": "Event not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@event_bp.route("/count", methods=["GET"])
def event_count():
    try:
        return jsonify({"count": get_event_count()}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
