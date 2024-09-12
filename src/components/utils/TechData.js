
import reactIcon from "../../assets/icones/atom.png";
import javaScriptIcon from "../../assets/icones/js.png";
import typeScriptIcon from "../../assets/icones/typescript.png";
import tailwindcssIcon from "../../assets/icones/tailwindcss.png";
import nextjsIcon from "../../assets/icones/nextjs.png";

import nodeIcon from "../../assets/icones/nodejs1.png";
import expressIcon from "../../assets/icones/express.png";
import mysqlIcon from "../../assets/icones/mysql.png";
import adonisjsIcon from "../../assets/icones/adonisjs.png";

import gitIcon from "../../assets/icones/git.png";
import vscodeIcon from "../../assets/icones/visual.png";
import reactNativeIcon from "../../assets/icones/native.png"


const technologies = [
    {
        name: "Frontend",
        items: [
            { name: "React", logo: reactIcon },
            { name: "Next", logo: nextjsIcon },
            { name: "Tailwind CSS", logo: tailwindcssIcon },
            { name: "JavaScript", logo: javaScriptIcon },
            { name: "TypeScript", logo: typeScriptIcon },
        ],
    },
    {
        name: "Backend",
        items: [
            { name: "Node.js", logo: nodeIcon },
            { name: "Express", logo: expressIcon },
            { name: "MySQL", logo: mysqlIcon },
            { name: "AdonisJS", logo: adonisjsIcon },
        ],
    },
    {
        name: "Outils",
        items: [
            { name: "Git", logo: gitIcon },
            { name: "React Native", logo: reactNativeIcon },
            { name: "VSCode", logo: vscodeIcon },
        ],
    },
];

export default technologies