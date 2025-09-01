import csv
import os
from datetime import datetime

DATA_DIR = os.path.join(os.path.dirname(__file__), "../data")
os.makedirs(DATA_DIR, exist_ok=True)

UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "../uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

CSV_FILE = os.path.join(DATA_DIR, "donations.csv")

if not os.path.exists(CSV_FILE):
    with open(CSV_FILE, mode="w", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["Name", "Email", "Phone", "Amount", "Screenshot", "Timestamp"])

def save_donation(name, email, phone, amount, screenshot_filename):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(CSV_FILE, mode="a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([name, email, phone, amount, screenshot_filename, timestamp])
