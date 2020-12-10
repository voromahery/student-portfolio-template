const worksData = [
  {
    title: "Sports App",
    description:
      "This is a website used for watching sports event especially for those who enjoy watching sports event.",
    screenshot: "./images/sports-app.webp",
    figma:
      "https://www.figma.com/file/t3fxY5HiMQuogI6cmbPg7c/Sports-App-homepage-Responsive-Revised-Copy",
    link: "https://voromahery.github.io/front-end-assessment/",
    code: "https://github.com/voromahery/front-end-assessment",
    date: "dd",
    skill: "CSS",
  },
  {
    title: "Photograf",
    description:
      "This website is suitable for a photographer who want to wants to display his or her works online",
    screenshot: "./images/photograf.webp",
    figma:
      "https://www.figma.com/file/QDZhke3UJVjXjNwFKqsWDR/Laaqiq-1-Portfolio-detail-Responsive-Copy",
    link: "https://voromahery.github.io/front-end-finals/",
    code: "https://github.com/voromahery/front-end-finals",
    date: "dd",
    skill: "CSS",
  },
  {
    title: "My team page",
    description:
      "This website is suitable for a photographer who wants to display his or her works online",
    screenshot: "./images/creative-crew.webp",
    figma:
      "https://www.figma.com/file/F8d1qJsorEdY47N74HLxQ4/team-page-challenge",
    link: "https://my-team-page-daniel.netlify.app/",
    code: "https://github.com/voromahery/my-team-page",
    date: "dd",
    skill: "CSS",
  },
  {
    title: "Movie app",
    description: "This app is built in order to get or to check recent movies",
    screenshot: "./images/movie-app.webp",
    link: "https://movie-app-daniel.netlify.app/",
    code: "https://github.com/voromahery/movie-app",
    date: "dd",
    skill: "react",
  },
  {
    title: "Quote generator",
    description: "An app thet record all some of the famous people's quote.",
    screenshot: "./images/quote-generator.webp",
    figma: "https://www.figma.com/file/FFxqnf1cEDiHhvFpN6u4hV/quote",
    link: "https://quote-generator-daniel.netlify.app/",
    code: "https://github.com/voromahery/react-random-quote-generator",
    date: "dd",
    skill: "react",
  },
  {
    title: "Country quiz",
    description:
      "The first game I have built which is used to learn the capital of a city and their flags, built with react.",
    screenshot: "./images/country-quiz.webp",
    figma: "https://www.figma.com/file/Gw0ZNBbYN8asqFlZWy3jG1",
    link: "https://country-quiz-daniel.netlify.app/",
    code: "https://github.com/voromahery/country-quiz",
    date: "12/11/2020",
    skill: "react",
  },
  {
    title: "Edie home page",
    description: "A responsive project using Sass",
    screenshot: "./images/edie.webp",
    figma:
      "https://www.figma.com/file/ahnGupP4JjTdVJDTRfMRF2/edie-homepage?node-id=0%3A1",
    link: "https://edie-homepage-daniel.netlify.app/",
    code: "https://github.com/voromahery/edie-homepage",
    date: "19/11/2020",
    skill: "CSS",
  },
  {
    title: "Hit parade",
    description: "React project for recording musics, in this project I learn how to use React Router",
    screenshot: "./images/hit-parade.webp",
    figma:
      "https://www.figma.com/file/Nab1pgPVU2dciFofy4AOEe/Hit-Parade?node-id=0%3A1",
    link: "https://hit-parade-daniel.netlify.app/",
    code: "https://github.com/voromahery/hit-parade-react",
    date: "22/11/2020",
    skill: "react",
  },
  {
    title: "OnjaBook",
    description: "Simple clone of facebook in order to learn about reducer in react.",
    screenshot: "./images/onjabook.webp",
    figma:"",
    link: "https://onjabook-daniel.netlify.app/",
    date: "05/12/2020",
    skill: "react"
  }
];

const worksContainer = document.querySelector(".works");
const react = document.querySelector(".react");
const css = document.querySelector(".responsive");
const javascript = document.querySelector(".javascript");
const all = document.querySelector(".all");
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
    <form action="${work.code}">
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
  const responsiveButton = e.target.matches(".responsive");
  const reactButton = e.target.matches(".react");
  const javascriptButton = e.target.matches(".javascript");
  const allButton = e.target.matches(".all");

  let works = [];

  if (responsiveButton) {
    works = worksData.filter((work) => work.skill === "CSS");
    all.classList.remove("active");
    javascript.classList.remove("active");
    react.classList.remove("active");
    css.classList.add("active");
  } else if (reactButton) {
    works = worksData.filter((work) => work.skill === "react");
    all.classList.remove("active");
    javascript.classList.remove("active");
    css.classList.remove("active");
    react.classList.add("active");
  } else if (javascriptButton) {
    works = worksData.filter((work) => work.skill === "javascript");
    all.classList.remove("active");
    css.classList.remove("active");
    react.classList.remove("active");
    javascript.classList.add("active");
  } else if (allButton) {
    css.classList.remove("active");
    react.classList.remove("active");
    javascript.classList.remove("active");
    all.classList.add("active");
    works = worksData;
  } else {
    return;
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
    <form action="${work.code}">
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
