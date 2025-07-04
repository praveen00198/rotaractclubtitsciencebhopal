document
  .getElementById("myForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const enrollmentNo = document.getElementById("enrollment-no").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;

    try {
      const response = await fetch(
        "https://rotaractclubtitsciencebhopal.onrender.com/api/join",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, enrollmentNo, email, contact }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        showToast(
          result.message ||
            "Thank you for showing interest! Your form has been submitted successfully.",
          "success"
        );
        document.getElementById("myForm").reset();
        document.getElementById("myForm").style.display = "none";
      } else {
        showToast(
          result.error || "Oops! Something went wrong. it's not you, it's us.",
          "error"
        );
      }
    } catch (error) {
      console.error("Fetch error:", error);
      showToast("⚠️ Network error. Please try again later.", "error");
    }
  });

function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 5000);
}
