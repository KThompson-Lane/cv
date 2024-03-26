import {
  UnityLogo,
  VirtusalesLogo
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
      company: "Virtusales Publishing Solutions",
      link: "https://www.virtusales.com/",
      badges: ["Hybrid Working"],
      title: "Software Engineer",
      logo: VirtusalesLogo,
      start: "February 2024",
      end: "Present",
      description:
        "Working on a large codebase with a mixture of frameworks including VB.NET, .NET Core, Angular and EF core to deliver features with customer driven requirements and deadlines.",
    },
    {
      company: "Unity Technologies",
      link: "https://unity.com/",
      badges: ["Hybrid Working"],
      title: "Software Engineer",
      logo: UnityLogo,
      start: "July 2023",
      end: "February 2024",
      description:
        "Worked on projects including desktop/web applications and API development which were used throughout the company, to improve and maintain product quality. Using experience gained in front and back-end development including CI/CD best practices. Contributed to open source projects such as Discourse, adding features necessary for internal development.",
      highlights: [
        "Self-driven research and accompanying documentation on future work",
        "Presenting prior investigative tasks to peers and driving for alignment on the best way forward",
        "Proactively tackling tech debt including adding better health-checks and service monitoring",
        "Contributed to open source projects such as Discourse, adding internally desired features",
        "Adapted quickly, gaining whatever knowledge needed for the task e.g. Redis, Ruby, GoLang",
        "Successfully delivered applications to internal stakeholders, meeting deadlines and user stories",
        "Maintaining and improving customer-facing products, using frameworks like ASP.NET, Blazor and Ruby",
        "Leading proof-of-concept work for a major upcoming project, including the use of Avalonia UI",
        "Expanded upon CI/CD knowledge gained in internship role to improve internal processes"
      ],
    },
    {
      company: "Unity Technologies",
      link: "https://unity.com/",
      badges: ["Remote"],
      title: "Software Engineering Intern",
      logo: UnityLogo,
      start: "July 2021",
      end: "June 2022",
      description:
        "Led a project to create a Blazor-based web application which integrated with an existing API, gaining CI/CD knowledge with Docker and GitHub Actions as well as interpersonal skills through liaising with colleagues outside my immediate team to deliver a project which met their requirements.",
      highlights: [
        "Led a project which required liaising with colleagues outside of my team to meet requirements",
        "Gained knowledge with concepts including CI/CD, Docker, GitHub Actions etc",
        "Improved interpersonal skills and self-confidence by working as part of a supportive team",
        "Learnt how to follow and uphold rigorous code standards",
        "Undertook additional training including leadership workshops to strengthen collaborative skills",
        "Working flexibly, regularly context switching onto different projects with different tech stacks",
      ],
    },
  ],
  skills: [
    "C#",
    "C++",
    "ASP.NET",
    "Blazor",
    "RESTful API",
    "Nginx",
    "GitHub Actions",
    "Kubernetes",
    "JavaScript",
    "TypeScript",
    "Docker",
    "CI/CD",
    "SQL",
    "Avalonia UI",
    "Pub/Sub queues"
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
  {
    title: "Project HTM",
    techStack: [
      "C#",
      "Unity",
      "2D roguelike game"
    ],
    description: "A 2D topdown roguelike with procedurally generated levels built in Unity",
    link: {
      label: "GitHub Repository",
      href: "https://github.com/KThompson-Lane/project-htm",
      },
    },
  ],
} as const;
