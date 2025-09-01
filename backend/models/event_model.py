import csv
import os
from werkzeug.utils import secure_filename

# File paths
BASE_DIR = os.path.dirname(__file__)
EVENT_CSV = os.path.join(BASE_DIR, "../data/events.csv")
UPLOAD_FOLDER = os.path.join(BASE_DIR, "../uploads/events")

# Ensure folders/files exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
if not os.path.exists(EVENT_CSV):
    with open(EVENT_CSV, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["id", "name", "description", "status", "date", "location", "images"])

# --- Helpers ---
def generate_id():
    """Generate a new unique event ID."""
    if not os.path.exists(EVENT_CSV):
        return "1"
    with open(EVENT_CSV, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        ids = [int(row["id"]) for row in reader if row.get("id", "").isdigit()]
        return str(max(ids) + 1) if ids else "1"

def save_event(form, files):
    """Save event data and uploaded images."""
    image_names = []
    for file in files:
        if file and file.filename:
            filename = secure_filename(file.filename)
            file.save(os.path.join(UPLOAD_FOLDER, filename))
            image_names.append(filename)

    event_id = generate_id()
    row = [
        event_id,
        form.get("name", ""),
        form.get("description", ""),
        form.get("status", ""),
        form.get("date", ""),
        form.get("location", ""),
        ";".join(image_names)
    ]

    with open(EVENT_CSV, mode="a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(row)

    return event_id

def get_events():
    """Return a list of all events from CSV."""
    events = []
    if os.path.exists(EVENT_CSV):
        with open(EVENT_CSV, mode="r", newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                images = row.get("images", "")
                events.append({
                    "id": row.get("id", ""),
                    "name": row.get("name", ""),
                    "description": row.get("description", ""),
                    "status": row.get("status", ""),
                    "date": row.get("date", ""),
                    "location": row.get("location", ""),
                    "images": images.split(";") if images else []
                })
    return events

def delete_event(event_id):
    """Delete event by ID."""
    events = get_events()
    events = [e for e in events if e["id"] != event_id]

    with open(EVENT_CSV, mode="w", newline="", encoding="utf-8") as f:
        fieldnames = ["id", "name", "description", "status", "date", "location", "images"]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for e in events:
            writer.writerow({
                "id": e["id"],
                "name": e["name"],
                "description": e["description"],
                "status": e["status"],
                "date": e["date"],
                "location": e["location"],
                "images": ";".join(e["images"])
            })
    return True

def get_event_count():
    """Return total number of events."""
    return len(get_events())
