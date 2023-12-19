import clothing from "../../assets/images/clothing-line.png";
import movie from "../../assets/images/movie-explore.png";
import storymashup from "../../assets/images/storymashup.png";
import metacare from "../../assets/images/metacare.png";
import moviebookmark from "../../assets/images/view.png";
import chilink from "../../assets/images/chilink.png";

export const PROJECT_DATA = [
  {
    name: "Chilink Web",
    description: "Implementation of the chilink meeting page design.",
    stack: "React js, TailwindCSS, Framer Motion, Typescript",
    github: "",
    live: "https://chilink-web.vercel.app/live-meeting",
    image: chilink,
  },

  {
    name: "Movie Explore",
    description:
      "Get Latest and Trending Movies, also customize your movie profile and mark movies watched, add movies to watch list.",
    stack: "Next js(13), Typescript, Firebase, React, Redux, Cypress ",
    github: "https://github.com/Tk-brainCodes/Movie-Explore",
    live: "https://movie-explore-seven.vercel.app/",
    image: movie,
  },
  {
    name: "StoryMashup",
    description:
      "Discover a world of AI-generated tales tailored just for you, in an app that caters to readers of all ages and interests.",
    stack: "Nextjs,Typescript,Next UI, Tailwind CSS, REST API",
    live: "https://www.storymashup.co/",
    image: storymashup,
    github: "private",
  },
  {
    name: "Metacare Dashboard",
    description:
      "A User Interface implementation of the MetaCare dashboard design.",
    stack: "React js,Typescript,SCSS, apexchart.js",
    live: "https://metacare-dashboard.vercel.app/",
    image: metacare,
    github: "https://github.com/Tk-brainCodes/Dashboard",
  },
  {
    name: "Movie Bookmark",
    description:
      "Code for my article: Creating Your Own Movie Bookmark App with Next 13.4, Redux,Toolkit, Firebase, and Typescript!",
    stack: "Next 13.4,Typescript,Tailwind, Firebase, Redux/Redux Toolkit",
    live: "https://movie-bookmark.vercel.app/",
    image: moviebookmark,
    github: "https://github.com/Tk-brainCodes/Movie-Bookmark",
  },
  {
    name: "Apparel",
    description:
      " A full-stack react clothing line. Shop easily online, and make payment directly with stripe from your account. ",
    stack:
      " Graphql, Firebase , Typescript, React/Redux, Node.js, Express.js,scss/css, Javascript,Jest, Enzyme",
    github: "https://github.com/Tk-brainCodes/Crown-Clothing",
    live: "https://crown-clothing-shop.vercel.app/",
    image: clothing,
  },
];
