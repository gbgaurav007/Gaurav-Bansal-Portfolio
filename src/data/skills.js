import { FaTools, FaAws, FaSwift, FaUikit } from 'react-icons/fa';
import { DiJavascript1, DiReact, DiNodejs, DiJava, DiPython } from 'react-icons/di';
import { SiCplusplus, SiHtml5, SiCss3, SiMongodb, SiMysql, SiSpringboot, SiTailwindcss, SiPostman, SiGithub, SiExpress } from 'react-icons/si';

const skillsData = [
    {
      category: 'Programming',
      skills: [
        { name: 'C/C++', icon: <SiCplusplus className="text-blue-600" /> },
        { name: 'Java', icon: <DiJava className="text-orange-500" /> },
        { name: 'Python', icon: <DiPython className="text-yellow-500" /> },
      ],
    },
    {
      category: 'Front-end Development',
      skills: [
        { name: 'HTML', icon: <SiHtml5 className="text-orange-600" /> },
        { name: 'CSS', icon: <SiCss3 className="text-blue-600" /> },
        { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-400" /> },
        { name: 'React.js', icon: <DiReact className="text-blue-400" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
    {
      category: 'Back-end Development',
      skills: [
        { name: 'Node.js', icon: <DiNodejs className="text-green-600" /> },
        { name: 'Express.js', icon: <SiExpress className="text-white font-bold" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
      ],
    },
    {
      category: 'iOS Development',
      skills: [
        { name: 'Swift/SwiftUI', icon: <FaSwift className="text-orange-600" /> },
        { name: 'UIKit', icon: <FaUikit className="text-blue-400" /> },
      ],
    },
    {
      category: 'Databases & Cloud',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
        { name: 'AWS', icon: <FaAws className="text-yellow-400" /> },
      ],
    },
    {
      category: 'Tools and Technologies',
      skills: [
        { name: 'Git/GitHub', icon: <SiGithub className="text-gray-400" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        { name: 'REST APIs', icon: <FaTools className="text-gray-500" /> },
      ],
    },
  ];

  export default skillsData;