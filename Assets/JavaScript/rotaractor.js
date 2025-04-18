const container = document.querySelector(".container");

const profiles = [
  {
    name: "John Doe",
    image: "../Assets/Image/11107581_4630062.jpg",
    position: "President",
    tenure: "RY24-25",
    description:
      "A passionate leader with a vision for innovation and growth. Dedicated to fostering a collaborative environment.",
    social: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Jane Smith",
    image: "../Assets/Image/11107581_4630062.jpg",
    position: "Secretary",
    tenure: "RY24-25",
    description:
      "An organized and detail-oriented professional, committed to efficient communication and administration.",
    social: {
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    name: "Robert Williams",
    image: "../Assets/Image/11107581_4630062.jpg",
    position: "Treasurer",
    tenure: "RY24-25",
    description:
      "A strategic thinker with a strong financial background, focused on ensuring fiscal responsibility and sustainability.",
    social: {
      twitter: "https://twitter.com/robertwilliams",
      linkedin: "https://linkedin.com/in/robertwilliams",
    },
  },
  {
    name: "Emily Clark",
    image: "../Assets/Image/11107581_4630062.jpg",
    position: "Vice President",
    tenure: "RY24-25",
    description:
      "A creative and innovative leader, dedicated to driving positive change and fostering community engagement.",
    social: {
      twitter: "https://twitter.com/emilyclark",
      linkedin: "https://linkedin.com/in/emilyclark",
    },
  },
  {
    name: "Emily Clark",
    image: "../Assets/Image/11107581_4630062.jpg",
    position: "Vice President",
    tenure: "RY24-25",
    description:
      "A creative and innovative leader, dedicated to driving positive change and fostering community engagement.",
    social: {
      twitter: "https://twitter.com/emilyclark",
      linkedin: "https://linkedin.com/in/emilyclark",
    },
  },
  {
    name: "Emily Clark",
    image: "../Assets/Image/11107581_4630062.jpg",
    position: "Vice President",
    tenure: "RY24-25",
    description:
      "A creative and innovative leader, dedicated to driving positive change and fostering community engagement.",
    social: {
      twitter: "https://twitter.com/emilyclark",
      linkedin: "https://linkedin.com/in/emilyclark",
    },
  },
  {
    name: "Emily Clark",
    image: "../Assets/Image/11107581_4630062.jpg",
    position: "Vice President",
    tenure: "RY24-25",
    description:
      "A creative and innovative leader, dedicated to driving positive change and fostering community engagement.",
    social: {
      twitter: "https://twitter.com/emilyclark",
      linkedin: "https://linkedin.com/in/emilyclark",
    },
  },
  {
    name: "Emily Clark",
    image: "../Assets/Image/11107581_4630062.jpg",
    position: "Vice President",
    tenure: "RY24-25",
    description:
      "A creative and innovative leader, dedicated to driving positive change and fostering community engagement.",
    social: {
      twitter: "https://twitter.com/emilyclark",
      linkedin: "https://linkedin.com/in/emilyclark",
    },
  },
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

  const name = document.createElement("h2");
  name.textContent = profile.name;
  name.classList.add("card-name");

  const position = document.createElement("p");
  position.textContent = profile.position;
  position.classList.add("card-position");

  const tenure = document.createElement("p");
  tenure.textContent = profile.tenure;
  tenure.classList.add("card-tenure");

  const description = document.createElement("p");
  description.textContent = profile.description;
  description.classList.add("card-description");

  const social = document.createElement("div");
  social.classList.add("card-social");

  if (profile.social) {
    if (profile.social.twitter) {
      const twitterLink = document.createElement("a");
      twitterLink.href = profile.social.twitter;
      twitterLink.innerHTML = '<i class="bx bxs-twitter bx-md"></i>'; // You'll need Font Awesome for icons
      social.appendChild(twitterLink);
    }
    if (profile.social.linkedin) {
      const linkedinLink = document.createElement("a");
      linkedinLink.href = profile.social.linkedin;
      linkedinLink.innerHTML = '<i class="bx bxs-linkedin bx-md"></i>'; // You'll need Font Awesome for icons
      social.appendChild(linkedinLink);
    }
  }

  content.appendChild(name);
  content.appendChild(position);
  content.appendChild(tenure);
  content.appendChild(description);
  content.appendChild(social);

  card.appendChild(image);
  card.appendChild(content);

  return card;
}

profiles.forEach((profile) => {
  const card = createCard(profile);
  container.appendChild(card);
});
