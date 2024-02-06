import bookmark from "../../assets/images/blog-movie-bookmark.avif";
import movie from "../../assets/images/blog-movie.avif";
import api from "../../assets/images/blog-rest-api.avif";
import array from "../../assets/images/blog-shared-array.avif";

export const ARTICLE_LIST = [
  {
    id: 1,
    title: "Movie Bookmark",
    desc: "Creating Your Personal Movie Bookmark Application using Next 13.4.13, Redux Toolkit, Firebase, and TypeScript",
    company: "dev.to",
    link: "https://dev.to/thankgod/crafting-your-personal-movie-bookmark-application-using-next-13413-redux-toolkit-firebase-and-typescript-2dgj",
    image: bookmark,
  },
  {
    id: 2,
    title: "Array Buffers",
    desc: "Understanding shared array buffers",
    company: "Logrocket",
    link: "https://blog.logrocket.com/understanding-sharedarraybuffer-and-cross-origin-isolation/",
    image: array,
  },
  {
    id: 3,
    title: "Movie Application in React",
    desc: "In this article, we are going to build a react movie application for searching and discovering movies using the OMDB API.",
    company: "dev.to",
    link: "https://dev.to/tkbraincodes/building-a-react-movie-application-2f55",
    image: movie,
  },
  {
    id: 4,
    title: "REST APIs in React",
    desc: "An API stands for an Application Programming Interface. It allows communication between softwares and provides ways of sharing data between applications.",
    company: "dev.to",
    link: "https://dev.to/tkbraincodes/using-a-rest-api-in-react-f6n",
    image: api,
  },
];
