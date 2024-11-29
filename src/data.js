import * as icons from "simple-icons";

const profileData = {
  name: "Ali Almasi",
  bio: "Front-end developer, based in Tehran, Iran. Currently studying JS, TS, and some other technologies. Looking for an internship as a junior front-end developer. Love photography and music.",
  avatar: "/me.webp",
  tags: [
    { name: "html", color: `#${icons.siHtml5.hex}`, level: "advanced" },
    { name: "css", color: `#${icons.siCss3.hex}`, level: "advanced" },
    {
      name: "javascript",
      color: `#${icons.siJavascript.hex}`,
      level: "advanced",
    },
    { name: "git", color: `#${icons.siGit.hex}`, level: "intermediate" },
    { name: "react", color: `#${icons.siReact.hex}`, level: "beginner" },
    {
      name: "tailwind",
      color: `#${icons.siTailwindcss.hex}`,
      level: "beginner",
    },
    { name: "sass", color: `#${icons.siSass.hex}`, level: "beginner" },
    { name: "linux", color: `#${icons.siLinux.hex}`, level: "advanced" },
  ],
};
export default profileData;
