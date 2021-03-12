// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Luci",
  middleName: "",
  lastName: "Temple",
  message: " Passionate about using tech to increase social impact. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/lucitemple",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/luciennetemple",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lucitemple/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/lucitemple/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "https://avatars.githubusercontent.com/u/5368666?s=460&u=5ea0542f620045e90f5ca7e38e8e313aae8b516f&v=4",
  imageSize: 375,
  message:
    "I'm a Wollongong-based front-end web developer with a passion for tech-driven social enterprise. I’ve taken the scenic route to web development after a couple decades doing other stuff - activism, marketing, communications, screenwriting, filmmaking, advertising, bookselling, telemarketing, entrepreneurialism, volunteering, parenting… I strive to do good work, with good people, for a good purpose.",
  resume: "https://drive.google.com/file/d/1NGFVaidCoKYimZCmAmbB-fEwb_rjxo_f/view?usp=sharing"
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "lucitemple", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 75 },
    { name: "React", value: 50 },
    { name: "HTML", value: 75 },
    { name: "CSS", value: 65 },
    { name: "Git", value: 65 },
    { name: "Node.js", value: 30 },
    { name: "Ruby", value: 35 },
    { name: "Mocha", value: 10 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "Communication", value: 95 },
    { name: "Collaboration", value: 70 },
    { name: "Proactiveness", value: 87 },
    { name: "Adaptability", value: 75 },
    { name: "Persistence", value: 85 },
    { name: "Personal Responsibility", value: 90 },
    { name: "Creativity", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you're interested in working together, or learning together, please touch base",
  email: "lucitemple@yahoo.com.au",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
