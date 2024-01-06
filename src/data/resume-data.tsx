import {
  UnityLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kiall Thompson-Lane",
  initials: "KT-L",
  location: "Brighton, United Kingdom, GMT",
  locationLink: "https://www.google.com/maps/place/Brighton",
  about:
    "Highly-driven software engineer with experience in both front and back-end development",
  summary:
    "In my time as a software engineer,  I have been motivated to develop both my technical skills and interpersonal skills to increase my value as a team member. I have challenged myself to explore unfamiliar areas, allowing me to gain experience with concepts including CI/CD, API development and web-hosting. I am looking for a role where I can further challenge myself and deliver solutions to interesting problems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/57400783?v=4",
  personalWebsiteUrl: "https://temporary.url",
  contact: {
    email: "kialltlane1908@gmail.com",
    tel: "+447821327235",
    github: "https://github.com/KThompson-Lane",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/KThompson-Lane",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kiall-thompson-lane/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of East Anglia",
      degree: "BSc Degree in Computing Sciences",
      start: "2019",
      end: "2023",
      grade: "First class (82% weighted grade average)",
      relevantModules: ["3D Graphics", "Advanced Programming", "Networks", "Games Development"],
      awards: ["BCS Prize for best individual performance by a BSc computing student", "Prize for distinguished performance in the final year assessment in all first degree and MComp programs"]
    },
  ],
  work: [
    {
      company: "Unity Technologies",
      link: "https://unity.com/",
      badges: ["Hybrid Working"],
      title: "Software Engineer",
      logo: UnityLogo,
      start: "2023",
      end: "Present",
      description:
        "Worked to create tools, used throughout the company, to improve and maintain product quality. Using experience gained in front and back-end development including CI/CD best practices. Contributed to open source projects such as Discourse, adding features necessary for internal development.",
    },
    {
      company: "Unity Technologies",
      link: "https://unity.com/",
      badges: ["Remote"],
      title: "Software Engineering Intern",
      logo: UnityLogo,
      start: "2021",
      end: "2022",
      description:
        "Independently led a project to create a Blazor-based web application which integrated with an existing API, gaining CI/CD knowledge with Docker and GitHub Actions as well as interpersonal skills through liaising with colleagues outside my immediate team to deliver a project which met their requirements.",
    },
  ],
  skills: [
    "C#",
    "ASP.NET",
    "Blazor",
    "RESTful API",
    "Nginx",
    "GitHub Actions",
    "Kubernetes",
  ],
  projects: [
    {
      title: "C_Flat",
      techStack: [
        "C#",
        "WPF",
        "NUnit",
      ],
      description: "A simple C-style GPL with a C# trans-compiler and WPF GUI",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/UEA-advanced-programmers/C_Flat/tree/main",
      },
    },
    {
      title: "Resumable Uploader",
      techStack: [
        "C#",
        "Avalonia",
        "ASP.Net",
      ],
      description: "A web api which allows a client to upload files incrementally, created as proof of concept work",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/KThompson-Lane/ResumableUploader/tree/main",
      },
    },
    {
      title: "IK Procedural Animation",
      techStack: [
        "C#",
        "Unity",
        "Dissertation project"
      ],
      description: "A Unity project demonstrating the use of IK to procedurally animate a 3D creature",
      link: {
        label: "GitHub Repository",
        href: "https://github.com/KThompson-Lane/IK-Procedural-Animation/tree/main",
      },
  },
  ],
} as const;
