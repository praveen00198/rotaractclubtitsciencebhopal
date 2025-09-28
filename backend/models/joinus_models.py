import csv
import os
from datetime import datetime

BASE_DIR = os.path.dirname(__file__)
CSV_FILE = os.path.join(BASE_DIR, "../data/joinus.csv")

# --- Save a new join request ---
def save_joinus(data):
    fieldnames = ["Timestamp", "Name", "Email", "Phone", "Status"]
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    data_to_save = {
        "Timestamp": timestamp,
        "Name": data.get("name"),
        "Email": data.get("email"),
        "Phone": data.get("phone"),
        "Status": "Pending"
    }

    file_exists = os.path.isfile(CSV_FILE)
    with open(CSV_FILE, mode="a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        if not file_exists:
            writer.writeheader()
        writer.writerow(data_to_save)

# --- Load all members ---
def load_joinus():
    if not os.path.isfile(CSV_FILE):
        return []
    with open(CSV_FILE, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return [row for row in reader]

# --- Update member status ---
def update_joinus_status(timestamp, status):
    members = load_joinus()
    updated = False
    for m in members:
        if m["Timestamp"] == timestamp:
            m["Status"] = status
            updated = True
            break
    if updated:
        _save_all(members)

# --- Delete a member ---
def delete_joinus(timestamp):
    members = load_joinus()
    members = [m for m in members if m["Timestamp"] != timestamp]
    _save_all(members)

# --- Clear all members ---
def clear_joinus():
    _save_all([])

# --- Helper: overwrite CSV ---
def _save_all(members):
    fieldnames = ["Timestamp", "Name", "Email", "Phone", "Status"]
    with open(CSV_FILE, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(members)

 