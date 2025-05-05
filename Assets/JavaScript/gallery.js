const galleryData = [
    {
      src: "../Assets/Image/Gallery/Blood-Donation.jpg",
      alt: "Blood Donation Drive",
      category: "Community Service",
      title: "Mahadan 10.0",
      description: "The Mahadan 10.0 event aimed to promote the spirit of voluntary blood donation, raising awareness about its life-saving impact and encouraging active participation from students and the community.",
      date: "12<sup>th</sup> Mar'25"
    },
    {
      src: "../Assets/Image/Gallery/New-Year.jpg",
      alt: "New Year Celebration",
      category: "Community Service",
      title: "New Year Celebration",
      description: "The New year celebration with over 30+ children at the Harshini Social Welfare Foundation. We kicked off the celebration by cutting a delicious cake. The room lit up with smiles as we distributed sweets and treats to the  childrens.",
      date: "01<sup>th</sup> Feb'25"
    },
    {
      src: "../Assets/Image/Gallery/Tech-Event.jpg",
      alt: "Tech Event",
      category: "Tech",
      title: "Innovathon 2025",
      description: "A 36-hour hackathon fostering innovation and creativity among students.",
      date: "5<sup>th</sup> Jan'25"
    }
  ];

  const galleryContainer = document.getElementById("gallery");

  galleryData.forEach(item => {
    const imageBox = document.createElement("div");
    imageBox.classList.add("image-container");

    imageBox.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" data-src="${item.src}" class="gallery-image">
      <div class="image-overlay">
        <p class="somethinf-it-is">${item.category}</p>
        <p class="image-title-text">${item.title}</p>
        <p class="iamge-description-text">${item.description}</p>
        <p class="event-date">${item.date}</p>
      </div>
    `;
    galleryContainer.appendChild(imageBox);
  });

  // Lightbox logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-image")) {
      const src = e.target.getAttribute("data-src");
      lightboxImg.src = src;
      lightbox.style.display = "flex";
    }

    // Click outside image or on close button
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.style.display = "none";
    }
  });