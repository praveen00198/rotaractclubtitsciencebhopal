const container = document.querySelector(".container");

const profiles = [
  {
    name: "Rtr. Wasif Daniyal",
    image: "../Assets/Image/11107581_4630062.jpg",
    position: "Past President",
    tenure: "RY18-19",
    email: "john.doe@example.com",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Rtr. Alok Patel",
    image: "../Assets/Image/Rotaractors/Alok-Patel.png",
    position: "President",
    tenure: "RY25-26",
    email: "jane.smith@example.com",
    social: {
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Rtr. Tarun Thakur",
    image: "../Assets/Image/Rotaractors/Tarun-thakur.jpg",
    position: "Vice President",
    tenure: "RY25-26",
    email: "tarunthakur7049@gmail.com",
    social: {
      linkedin: "https://www.linkedin.com/in/tarun-thakur-689600273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/rtr.tarunthakur/?hl=en",
    },
  },
  {
    name: "Rtr. Prabaht Kesharwani",
    image: "../Assets/Image/Rotaractors/Prabhat-Kesharwani.jpg",
    position: "Treasurer",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
  {
    name: "Rtr. Siddharth Kumar",
    image: "../Assets/Image/Rotaractors/Siddharth.jpg",
    position: "Hon. Secretary",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
    {
    name: "Rtr. Ujjwal Singh Baghel",
    image: "../Assets/Image/Rotaractors/Ujjwal-Singh.jpg",
    position: "Hon. Secretary",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
  {
    name: "Rtr. Kamal Kushwaha",
    image: "../Assets/Image/Rotaractors/",
    position: "Social Media Head",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
  {
    name: "Rtr. Gaurav Raj",
    image: "../Assets/Image/Rotaractors/",
    position: "Comunity Service Director",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
  {
    name: "Rtr. Supreet Sinha",
    image: "../Assets/Image/Rotaractors/",
    position: "International Service Director",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
  {
    name: "Rtr. Shivam Mishra",
    image: "../Assets/Image/Rotaractors/",
    position: "Youth Service Director",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
  {
    name: "Rtr. Pratibha Shah",
    image: "../Assets/Image/Rotaractors/",
    position: "Women Empowerment",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
  {
    name: "Rtr. Nainshi",
    image: "../Assets/Image/Rotaractors/",
    position: "Club Literacy Chair",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
  {
    name: "Rtr. Priya ",
    image: "../Assets/Image/Rotaractors/",
    position: "Joint ISD",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  },
  {
    name: "Aaradhya",
    image: "../Assets/Image/Rotaractors/",
    position: "Graphic Designer",
    tenure: "RY25-26",
    email: "emily.clark@example.com",
    social: {
      linkedin: "https://linkedin.com/in/emilyclark",
      instagram: "https://instagram.com/emilyclark",
    },
  }
];

function createCard(profile) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = profile.image;
  image.alt = profile.name;
  image.classList.add("card-image");

  const content = document.createElement("div");
  content.classList.add("card-content");

  const tenure = document.createElement("p");
  tenure.textContent = profile.tenure;
  tenure.classList.add("card-tenure");

  const name = document.createElement("h2");
  name.textContent = profile.name;
  name.classList.add("card-name");

  const position = document.createElement("p");
  position.textContent = profile.position;
  position.classList.add("card-position");

  const social = document.createElement("div");
  social.classList.add("card-social");

  // Add Email Icon (using mailto link)
  if (profile.email) {
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${profile.email}`;
    emailLink.target = "_blank";
    emailLink.innerHTML = '<i class="bx bxl-gmail bx-sm"></i>'; 
    social.appendChild(emailLink);
  }

  // Add LinkedIn Icon
  if (profile.social && profile.social.linkedin) {
    const linkedinLink = document.createElement("a");
    linkedinLink.href = profile.social.linkedin;
    linkedinLink.target = "_blank";
    linkedinLink.innerHTML = '<i class="bx bxl-linkedin bx-sm"></i>';
    social.appendChild(linkedinLink);
  }

  // Add Instagram Icon
  if (profile.social && profile.social.instagram) {
    const instagramLink = document.createElement("a");
    instagramLink.href = profile.social.instagram;
    instagramLink.target = "_blank";
    instagramLink.innerHTML = '<i class="bx bxl-instagram bx-sm"></i>';
    social.appendChild(instagramLink);
  }

  // Now assemble the card
  content.appendChild(tenure);
  content.appendChild(name);
  content.appendChild(position);
  content.appendChild(social);

  card.appendChild(image);
  card.appendChild(content);

  return card;
}

profiles.forEach((profile) => {
  const card = createCard(profile);
  container.appendChild(card);
});
