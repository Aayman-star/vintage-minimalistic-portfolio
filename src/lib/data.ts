import timeImage from "/public/time.png";
import taskImage from "/public/task.png";
import modernImage from "/public/modernportfolio.png";
export const projects = [
  {
    id: 1,
    name: "TheTimeTracker",
    description: "An app that helps you track your tasks and time with ease.",
    link: "https://thetimetracker.vercel.app/",
    img: timeImage,
    stack: [
      "Typescript",
      "React",
      "Tailwindcss",
      "Clerk",
      "Postgres",
      "Nextjs",
    ],
  },
  {
    id: 2,
    name: "TaskWise",
    description: "A Todo app with a flair!",
    link: "https://task-wise-alpha.vercel.app/",
    img: taskImage,
    stack: [
      "Typescript",
      "React",
      "Tailwindcss",
      "Clerk",
      "Postgres",
      "Nextjs",
    ],
  },
  {
    id: 3,
    name: "Modern Portfolio",
    description: "minimalisitc portfolio for the modern developer",
    link: "https://modern-portfolio-gilt.vercel.app/",
    img: modernImage,
    stack: ["Typescript", "React", "Tailwindcss", "Nextjs"],
  },
];
