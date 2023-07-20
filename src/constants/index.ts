import { instagram, twitter, linkedin, juce, cpp, react, typescript, tailwind, nodejs, mongodb, python, ableton, cubase, logicpro, kicad } from "../assets";

export const navLinks = [
    {
        id: "",
        title: "homepage",
    },
    {
        id: "resume",
        title: "resume",
    },
    {
        id: "portfolio",
        title: "portfolio",
    },
    {
        id: "blog",
        title: "blog",
    },
];

export const playlists = [
  {
    id: "01",
    title: "The Playlist",
    description: "Ultimate jazz/funk/rnb",
    url: "https://open.spotify.com/playlist/638Fo7W9my9FQLQvWRHi9K?si=088152b17361443f",
  },
  {
    id: "02", 
    title: "deep cuts",
    description: "vintage jazz/funk/rnb",
    url: "https://open.spotify.com/playlist/0HVnojTJbcI2KT8wnwo1qv?si=8700af86b8ea4857",
  },
  {
    id: "03", 
    title: "new cuts",
    description: "modern jazz/funk/rnb",
    url: "https://open.spotify.com/playlist/1tL3U8YJn4gRZx0u0OVNL7?si=49f63fb3d5c74cfb",
  },
  {
    id: "04",
    title: "high voltage funk",
    description: "funk",
    url: "https://open.spotify.com/playlist/6pJXnT1Far51GXO0FSMyUa?si=d4be30b0b3c84184",
  },
  {
    id: "05",
    title: "boogie nights",
    description: "disco",
    url: "https://open.spotify.com/playlist/3eErHcg9RewUHajhFJVWEM?si=222efc023ec749c3",
  },
  {
    id: "06",
    title: "ambient",
    description: "ambient/drift/soundscape",
    url: "https://open.spotify.com/playlist/7J3AR5tWMIZavtML5Idp41?si=a8111ab38daa40cf",
  },
  {
    id: "07",
    title: "jazz guitar",
    description: "jazz",
    url: "https://open.spotify.com/playlist/4mh6cC12Eq5dVIeI5SJhtO?si=1bd1f184e5184d29",
  },
  {
    id: "08",
    title: "ssbm",
    description: "instrumental electronic",
    url: "https://open.spotify.com/playlist/5G7QUYhnAHMnohLvCtxuT4?si=dfd97b0bc0744a46",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-3",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const explorations = [
  {
    id: "juce",
    icon: juce,
    link: "https://juce.com/",
    group: "plugins",
  }, 
  {
    id: "cpp",
    icon: cpp,
    link: "https://cplusplus.com/",
    group: "plugins",
  },
  {
    id: "react",
    icon: react,
    link: "https://reactjs.org/",
    group: "frontend",
  }, 
  {
    id: "typescript",
    icon: typescript,
    link: "https://www.typescriptlang.org/",
    group: "frontend",
  }, 
  {
    id: "tailwindcss",
    icon: tailwind,
    link: "https://tailwindcss.com/",
    group: "frontend",
  },
  {
    id: "nodejs",
    icon: nodejs,
    link: "https://nodejs.org/en/",
    group: "backend",
  },
  {
    id: "mongodb",
    icon: mongodb,
    link: "https://www.mongodb.com/",
    group: "data",
  }, 
  {
    id: "python",
    icon: python,
    link: "https://www.python.org/",
    group: "automation",
  },
  {
    id: "ableton",
    icon: ableton,
    link: "https://www.ableton.com/en/",
    group: "mixing",
  }, 
  {
    id: "cubase",
    icon: cubase,
    link: "https://www.steinberg.net/cubase/",
    group: "mixing",
  }, 
  {
    id: "logicpro",
    icon: logicpro,
    link: "https://www.apple.com/logic-pro/",
    group: "mixing",
  },
  {
    id: "kicad",
    icon: kicad,
    link: "https://www.kicad.org/",
    group: "ee",
  },  
  
];

interface animatedSquareProperties {
  rgb: string;
  opacity: number;
  size: number;
  rotationConstant: number;
  translationXConstant: number;
  translationYConstant: number;
  top: number;
  left: number;
}

function getRandomMinusOneOrOne() {
  return Math.random() < 0.5 ? -1 : 1;
}

export const squares: animatedSquareProperties[] = [];
for (let i = 0; i < 50; i++) {
  let randomlyNegative = getRandomMinusOneOrOne();
  
  let properties: animatedSquareProperties = {
    rgb: `rgb(224 231 255)`,
    opacity: 0.02 + (Math.random() * 0.3),
    size: 0.5*Math.random(),
    rotationConstant: Math.random()*randomlyNegative*0,
    translationXConstant: 0.025,
    translationYConstant: -1*(0.5+Math.random()*0.3),
    top: Math.random()*350,
    left: Math.random()*85,
  }
  squares.push(properties);
}