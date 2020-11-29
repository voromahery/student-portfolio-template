const worksData = [
  {
    title: "Sports App",
    description:
      "This is a website used for watching sports event especially for those who enjoy watching sports event.",
    screenshot: "./images/sports-app.png",
    figma:
      "https://www.figma.com/file/t3fxY5HiMQuogI6cmbPg7c/Sports-App-homepage-Responsive-Revised-Copy",
    link: "https://voromahery.github.io/front-end-assessment/",
    date: "dd",
    skill: "CSS",
  },
  {
    title: "Photograf",
    description:
      "This website is suitable for a photographer who want to wants to display his or her works online",
    screenshot: "./images/photograf.png",
    figma:
      "https://www.figma.com/file/QDZhke3UJVjXjNwFKqsWDR/Laaqiq-1-Portfolio-detail-Responsive-Copy",
    link: "https://voromahery.github.io/front-end-finals/",
    date: "dd",
    skill: "CSS",
  },
  {
    title: "My team page",
    description:
      "This website is suitable for a photographer who want to wants to display his or her works online",
    screenshot: "./images/creative-crew.png",
    figma:
      "https://www.figma.com/file/F8d1qJsorEdY47N74HLxQ4/team-page-challenge",
    link: "https://my-team-page-daniel.netlify.app/",
    date: "dd",
    skill: "CSS",
  },
  {
    title: "Movie app",
    description: "This app is built in order to get or to check recent movies",
    screenshot: "./images/movie-app.png",
    link: "https://movie-app-daniel.netlify.app/",
    date: "dd",
    skill: "react",
  },
  {
    title: "Quote generator",
    description: "An app thet record all some of the famous people's quote.",
    screenshot: "./images/quote-generator.png",
    figma: "https://www.figma.com/file/FFxqnf1cEDiHhvFpN6u4hV/quote",
    link: "https://quote-generator-daniel.netlify.app/",
    date: "dd",
    skill: "react",
  },
  {
    title: "Country quiz",
    description:
      "The first game I have built which is used to learn the capital of a city and their flags.",
    screenshot: "./images/country-quiz.png",
    figma: "https://www.figma.com/file/Gw0ZNBbYN8asqFlZWy3jG1",
    link: "https://country-quiz-daniel.netlify.app/",
    date: "12/11/2020",
    skill: "react",
  },
  {
    title: "Edie home page",
    description: "",
    screenshot: "./images/edie.png",
    figma:
      "https://www.figma.com/file/ahnGupP4JjTdVJDTRfMRF2/edie-homepage?node-id=0%3A1",
    link: "https://edie-homepage-daniel.netlify.app/",
    date: "19/11/2020",
    skill: "CSS",
  },
  {
    title: "Hit parade",
    description: "React project for recording musics",
    screenshot: "./images/hit-parade.png",
    figma:
      "https://www.figma.com/file/Nab1pgPVU2dciFofy4AOEe/Hit-Parade?node-id=0%3A1",
    link: "https://hit-parade-daniel.netlify.app/",
    date: "22/11/2020",
    skill: "react",
  },
];

const worksContainer = document.querySelector(".works");
const number = document.querySelector(".number");

number.textContent = worksData.length;

function displayWorks() {
  const html = worksData
    .map(
      (work) => `
  <article class="card">
  <figure>
    <img src=${work.screenshot} class="project__image" alt="${work.title}" />
    <ul class="project__skills">
      <li class="project__list--item">#HTML</li>
      <li class="project__list--item">#CSS</li>
      <li class="project__list--item">#responsive</li>
    </ul>
  </figure>
  <div class="about__the--project">
    <h3 class="project__title">${work.title}</h3>
    <p class="project__description">${work.description}
    </p>
  </div>
  <div class="project__link">
    <form action="${work.link}">
    <button class="demo">Demo</button>
    </form>
    <form action="">
    <button class="code">Code</button>
    </form>
  </div>
</article>
  `
    )
    .join("");
  worksContainer.innerHTML = html;
}

function responsiveSite(e) {
  const responsiveButton = "CSS";
  const reactButton = "react";
  const javascriptButton = "javascript";

  let works = [];

  if (e.target.matches(".responsive")) {
    works = worksData.filter((work) => work.skill === responsiveButton);
  }
  if (e.target.matches(".react")) {
    works = worksData.filter((work) => work.skill === reactButton);
  }
  if (e.target.matches(".javascript")) {
    works = worksData.filter((work) => work.skill === javascriptButton);
  }

  number.textContent = works.length;
  const html = works
    .map(
      (work) => `
  <article class="card">
  <figure>
    <img src=${work.screenshot} class="project__image" alt="${work.title}" />
    <ul class="project__skills">
      <li class="project__list--item">#HTML</li>
      <li class="project__list--item">#CSS</li>
      <li class="project__list--item">#responsive</li>
    </ul>
  </figure>
  <div class="about__the--project">
    <h3 class="project__title">${work.title}</h3>
    <p class="project__description">${work.description}
    </p>
  </div>
  <div class="project__link">
    <form action="${work.link}">
    <button class="demo">Demo</button>
    </form>
    <form action="">
    <button class="code">Code</button>
    </form>
  </div>
</article>
  `
    )
    .join("");
  worksContainer.innerHTML = html;
}

displayWorks();

window.addEventListener("click", responsiveSite);
