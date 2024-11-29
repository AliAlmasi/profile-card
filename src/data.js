import * as icons from "simple-icons";

function MasteryLevel(level) {
  if (level && level > 0 && level < 4) {
    if (level === 1) return "👶";
    if (level === 2) return "👍";
    if (level === 3) return "💪";
  } else {
    return "⚠️";
  }
}

const profileData = {
  name: "Ali Almasi",
  bio: "Front-end developer, based in Tehran, Iran. Currently studying JS, TS, and some other technologies. Looking for an internship as a junior front-end developer. Love photography and music.",
  avatar: "/me.webp",
  tags: [
    { name: "html", color: `#${icons.siHtml5.hex}`, level: MasteryLevel(3) },
    { name: "css", color: `#${icons.siCss3.hex}`, level: MasteryLevel(3) },
    {
      name: "javascript",
      color: `#${icons.siJavascript.hex}`,
      level: MasteryLevel(3),
    },
    { name: "git", color: `#${icons.siGit.hex}`, level: MasteryLevel(2) },
    { name: "react", color: `#${icons.siReact.hex}`, level: MasteryLevel(1) },
    {
      name: "tailwind",
      color: `#${icons.siTailwindcss.hex}`,
      level: MasteryLevel(1),
    },
    { name: "sass", color: `#${icons.siSass.hex}`, level: MasteryLevel(1) },
    { name: "linux", color: `#${icons.siLinux.hex}`, level: MasteryLevel(3) },
  ],
};
export default profileData;
