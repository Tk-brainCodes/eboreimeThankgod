import clothing from "../../assets/images/clothing-line.png";
import movie from "../../assets/images/movie-explore.png";
import moviebookmark from "../../assets/images/view.png";
import discord from "../../assets/images/discord-image.svg";
import musciMood from "../../assets/images/demo-pic.png";
import pantryTracker from "../../assets/images/pantry.png";
import Mindflash from "../../assets/images/mindflash.png";

export const PROJECT_DATA = [
  {
    id: 10,
    name: "AI Music Mood",
    description:
      "Generate dynamic playlist based on your current mood using sportify api, langchain, and google generative ai.",
    stack:
      "Next.js, LangChain, Google-GenAI, Spotify Web API, TypeScript, ShadCN UI, Lucide Icons",
    github: "https://github.com/Tk-brainCodes/music-mood",
    live: "https://spotify-music-mood.vercel.app/music",
    image: musciMood,
    color: "#D8D2C2",
    youtube: "https://youtu.be/2GyiwB4ESSI",
  },
  {
    id: 15,
    name: "Mind Flash",
    description:
      "This AI-powered flashcard application leverages cutting-edge natural language processing to automatically generate study materials from any text input. Built with Next.js, TypeScript, and integrated with Groq AI, this app offers a modern, efficient way to create and study flashcards.",
    stack:
      "Next.js 14, TypeScript, Prisma, Supabase, shadcn UI, Google Gemini AI",
    github: "https://github.com/Tk-brainCodes/mind-flash",
    live: "https://mind-flash.vercel.app/",
    image: Mindflash,
    color: "#E7CCCC",
    youtube: "https://youtu.be/RTscxsvkQZQ",
  },

  {
    id: 11,
    name: "AI Pantry Tracker",
    description:
      "Pantry Tracker is a web application that helps you manage your pantry items efficiently. Keep track of your food inventory, monitor expiry dates, and upload images of your items for easy identification usin AI.",
    stack:
      "Next js, TypeScript, Firebase (Firestore and Storage), Material-UI (MUI), React Camera Pro, Google Generative AI via Langchain.",
    github: "https://github.com/Tk-brainCodes/AI-Pantry-Tracker",
    live: "https://ai-inventory-manager.vercel.app/",
    youtube: "https://youtu.be/oy_uNTiHhik",
    image: pantryTracker,
    color: "#DEE5D4",
  },
  {
    id: 1,
    name: "Discord Clone",
    description:
      "Implementation of the discord clone using Nextjs 14 and the Prisma for database querying (update, deleting, and storing) of user data on the server",
    stack:
      "Nextjs, TailwindCss, Framer Motion, Typescript, Prisma, PlanetScale db (MYSQL), Context API",
    github: "https://github.com/Tk-brainCodes/Discord-Clone",
    live: "https://eboreime-thankgod-discord-clone.vercel.app/",
    youtube: "https://youtu.be/ZhQr8tWJYhk",
    image: discord,
    color: "#5865F2",
  },
  {
    id: 3,
    name: "Movie Explore",
    description:
      "Get Latest and Trending Movies, also customize your movie profile and mark movies watched, add movies to watch list.",
    stack: "Next js(13), Typescript, Firebase, React, Redux, Cypress ",
    github: "https://github.com/Tk-brainCodes/Movie-Explore",
    live: "https://movie-explore-seven.vercel.app/",
    image: movie,
    color: "#88a28d",
    youtube: "https://youtu.be/i1c2oULkqxE",
  },
  {
    id: 7,
    name: "Apparel",
    description:
      " A full-stack react `APPAREL` clothing line. Shop easily online, and make payment directly with stripe from your account. ",
    stack:
      " Graphql, Firebase , Typescript, React/Redux, Node.js, Express.js,scss/css, Javascript,Jest, Enzyme",
    github: "https://github.com/Tk-brainCodes/Crown-Clothing",
    live: "https://crown-clothing-shop.vercel.app/",
    image: clothing,
    color: "#B17457",
  },
  {
    id: 6,
    name: "Movie Bookmark",
    description:
      "Project for my article: Creating Your Own Movie Bookmark App with Next 13.4, Redux,Toolkit, Firebase, and Typescript!",
    stack: "Next 13.4,Typescript,Tailwind, Firebase, Redux/Redux Toolkit",
    live: "https://movie-bookmark.vercel.app/",
    image: moviebookmark,
    github: "https://github.com/Tk-brainCodes/Movie-Bookmark",
    color: "#FFD7C4",
  },
];
