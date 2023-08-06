import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  github_dark,
  supabase,
  nextjs,
  meta,
  starbucks,
  tesla,
  shopify,
  serengeti_webm,
  crispycanvas_webm,
  globetracer_webm,
  serengeti_mp4,
  crispycanvas_mp4,
  globetracer_mp4,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend",
    icon: web,
    content: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TailwindCSS",
      "Shadcn",
      "MUI",
    ],
  },
  {
    title: "Backend",
    icon: mobile,
    content: ["Node.js", "Express", "Next.js", "Python"],
  },
  {
    title: "Database",
    icon: backend,
    content: ["MongoDB", "Supabase"],
  },
  {
    title: "Dev Tools",
    icon: creator,
    content: ["Git", "Bash", "VS Code"],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github_dark,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Serengeti Sky Lodges",
    description:
      "A Next.js-powered website offering luxurious escapes amidst untamed wilderness, secure authentication with Supabase, and seamless CRUD functionality for a truly enchanting user experience. Adventure awaits! 🏞️🛂",
    tags: [
      {
        name: "react",
      },
      {
        name: "nextjs",
      },
      {
        name: "supabase",
      },
      {
        name: "tailwind",
      },
    ],
    mp4: serengeti_mp4,
    webm: serengeti_webm,
    source_code_link: "https://github.com/PresidentIsmail/Serengeti-Sky-Lodges",
    live_site_link: "https://serengeti-sky-lodges.vercel.app/",
  },
  {
    name: "Crispy Canvas",
    description:
      "A React ordering application that lets you order your favourite pizzas while effortlessly managing orders and accessing order history. With my expertise, I crafted a seamless user experience that tantalizes taste buds and showcases my skills in front-end development. 🍕🎨",
    tags: [
      {
        name: "react",
      },
      {
        name: "restapi",
      },
      {
        name: "css",
      },
    ],
    mp4: crispycanvas_mp4,
    webm: crispycanvas_webm,
    source_code_link: "https://github.com/PresidentIsmail/Crispy-Canvas",
    live_site_link: "https://crispy-canvas.netlify.app/",
  },
  {
    name: "Globe Tracer",
    description:
      "Globe Tracer is a web application that allows users to track all the places they have traveled to around the world. With an interactive map and a user-friendly interface, users can easily record their travel experiences and view them at any time.",
    tags: [
      {
        name: "React",
      },
      {
        name: "Jsonserver",
      },
      {
        name: "css",
      },
      {
        name: "Mapbox",
      },
    ],
    mp4: globetracer_mp4,
    webm: globetracer_webm,
    source_code_link: "https://github.com/PresidentIsmail/Globe-Tracer",
  },
];

export { services, technologies, experiences, testimonials, projects };
