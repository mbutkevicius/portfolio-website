"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Personal website to show projects made",
        image: "/images/About.JPG",
        tag: ["All", "Web"],
        linkUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Trip's Voyage Gem Rush",
        description: "2D Arcade Platformer",
        image: "/images/projects/trip.png",
        tag: ["All", "Game"],
        linkUrl: "https://eupholace.itch.io/trips-voyage-gem-rush",
        previewUrl: "/"
    },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name="All" 
          isSelected={tag === "All"}>
        </ProjectTag>
        <ProjectTag
          onClick={handleTagChange}
          name="Game" 
          isSelected={tag === "Game"}>
        </ProjectTag>
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filterProjects.map((project) => (
            <ProjectCard
                key={project.id}
                title={project.title} 
                description={project.description} 
                imgUrl={project.image}
                tags={project}
                linkUrl={project.linkUrl}
                previewUrl={project.previewUrl}

            />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection
