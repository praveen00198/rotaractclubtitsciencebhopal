// Attach the event listener to the form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("join-us-form");
  form.addEventListener("submit", formSubmission);
});

async function formSubmission(event) {
  event.preventDefault(); // prevent page reload

  const data = {
    name: document.querySelector("#name-input").value,
    email: document.querySelector("#email-input").value,
    contact_no: document.querySelector("#contact-input").value,
    enrollment_no: document.querySelector("#enrollment-input").value,
    skills: document.querySelector("#skill-input").value,
    source: document.querySelector("#source-input").value,
  };

  try {
    const res = await fetch(
      "https://rotaractclubtitsciencebhopal.onrender.com/api/join",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const result = await res.json();

    if (res.ok) {
      const toast = document.querySelector("#toast-notification");
      const toastContent = document.querySelector("#toast-content");

      toastContent.textContent =
        result.message || "Form submitted successfully!";
      toast.style.display = "block";

      document.getElementById("join-us-form").reset();

      setTimeout(() => {
        toast.style.display = "none";
        window.location.href = "/";
      }, 3000);
    } else {
      alert("Error: " + result.error);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
}
