const data = [
    {
        imgSrc: "https://i.pinimg.com/1200x/b4/9b/06/b49b064a6419629b825cf499553a67a4.jpg",
        tag: "Community Services",
        title: "Aashitah: Food Distribution Drive",
        description: "Aashitah was a food distribution drive that embodied compassion and service, aiming to support underprivileged communities while reinforcing the club’s dedication to social welfare and humanity."
    },
    {
        imgSrc: "https://i.pinimg.com/736x/bc/44/74/bc44740d7726b9c02abb61edcac9fe7d.jpg",
        tag: "Community Service",
        title: "Tarupan: Tree Plantation Drive",
        description: "Tarupan was a plantation drive promoting sustainability and environmental awareness, where members came together to plant saplings and inspire collective action toward a greener, healthier future."
    },
    {
        imgSrc: "https://i.pinimg.com/1200x/a1/75/97/a17597629eecb49ab356e82a2c6db897.jpg",
        tag: "Women Empowerment",
        title: "Matritva: Sanitary Distribution Drive",
        description: "Matritav was a sanitary pad distribution and menstrual hygiene awareness drive — part of the club’s continued effort to promote health equity and improve the quality of life for women in need."
    },
    {
        imgSrc: "https://i.pinimg.com/736x/43/3f/e9/433fe94360e029d89bd55f535809a47a.jpg",
        tag: "Community Service",
        title: "Kambal Rahat Ka: Blanket Distribution Drive",
        description: "Kambal Rahat was a blanket donation drive aimed at providing warmth and comfort to the underprivileged during harsh winters — a heartfelt effort to bring relief to those braving the cold nights."
    },
    {
        imgSrc: "https://i.pinimg.com/1200x/b4/9b/06/b49b064a6419629b825cf499553a67a4.jpg",
        tag: "Vocational Service",
        title: "Twarit",
        description : ""
    },
    {
        imgSrc: "https://i.pinimg.com/1200x/b4/9b/06/b49b064a6419629b825cf499553a67a4.jpg",
        tag: "Vocation Service",
        title: "NextStep: Path from Campus to Career",
        description: "Next Step is a flagship initiative guiding students from campus to career through mentorship, skill development, and professional growth — empowering them to confidently step into their future."
    }
]


data.forEach((elem) => {
  document.querySelector('#project-section').innerHTML += `
    <div class="project-details-container">
      <div class="project-card">
        <div class="image">
          <img
            src="${elem.imgSrc}"
            class="project-image"
            alt="${elem.title}"
          />
        </div>
        <div class="project-details">
          <p class="project-tag">${elem.tag}</p>
          <h2 class="project-title">${elem.title}</h2>
          <p class="project-description">${elem.description}</p>
          <button>Know more</button>
        </div>
      </div>
    </div>
  `;
});