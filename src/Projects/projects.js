import movie from "../images/movie.png";
import blog from "../images/myblog.png";
import covid from "../images/covid19.png";

const ProjectList = [
  {
    id: 1,
    projectName: "Movie",
    imageURL: movie,
    projectDescription:
    "This is a movie searching website created using REACT and is powered by the TMBd API.",
    github: "https://github.com/abhi15sep/movie-catalog",
    site: "https://movie.devops-monk.com/",
  },

  {
    id: 2,
    projectName: "Blog",
    imageURL: blog,
    projectDescription:
      "This is a personal blog created to share my knowledge using Jekyll and hosted on github pages.",
    github: "https://github.com/abhi15sep/devops-blog",
    site: "https://blog.devops-monk.com/",
  },

  {
    id: 3,
    projectName: "Covid19 status checker",
    imageURL: covid,
    projectDescription:
      "This project is created to track covid status in my country. This project is created using react.",
    github: "https://github.com/abhi15sep/covid-19",
    site: "https://covid19.devops-monk.com/",
  },
];

export default ProjectList;
