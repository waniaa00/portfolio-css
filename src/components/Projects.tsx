import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import "@/app/styles/projects.css"


const data = [
  {
    id: 0,
    title: "countdown Timer",
    desc: "A Next.js-powered countdown timer to keep you on track, on schedule, and eagerly anticipating your next big moment.",
    img: "/project1.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },

  {
    id: 1,
    title: "Todo List",
    desc: "A simple, intuitive, and responsive task management application built with ReactJS, enabling users to create, edit, and delete tasks with ease.",
    img: "/project5.png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },

  {
    id: 2,
    title: "Editable Resume Form",
    desc: "A dynamic, editable resume form builder powered by Next.js, helping you create a stunning professional profile",
    img: "/project2.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },

  {
    id: 3,
    title: "GIAIC-Card",
    desc: "Leveraging Next.js for Efficient GIAIC Card Creation",
    img: "/project3.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },

  {
    id: 4,
    title: "Weather Widget",
    desc: "Next.js Weather Widget: Accurate Forecasts at Your Fingertips",
    img: "/project6.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },

  {
    id: 5,
    title: "Static Resume",
    desc: "Server-Rendered Resume with Next.js",
    img: "/project4.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
  <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (<Card 
        key = {el.id}
        title  = {el.title}
        desc = {el.desc}
        img = {el.img}
        tags = {el.tags}
        
        />))}
      </div>
    </div>
  );
};

export default Projects;
