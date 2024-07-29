"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Personal website to show projects made",
        image: "/images/projects/portfolio.png",
        tag: ["All", "Web"],
        linkUrl: "https://portfolio-website-zeta-bice.vercel.app",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Trip's Voyage Gem Rush",
        description: "2D Arcade Platformer",
        image: "/images/projects/trip.png",
        tag: ["All", "Unity"],
        linkUrl: "https://eupholace.itch.io/trips-voyage-gem-rush",
        previewUrl: "/"
    },
    {
      id: 3,
      title: "BrainWave",
      description: "Quizlet Clone",
      image: "/images/projects/BrainWave.png",
      tag: ["All", "Web"],
      linkUrl: "https://github.com/Fairie0723/BrainWave",
      previewUrl: "/"
  },
  {
    id: 4,
    title: "CEM Heatmap",
    description: "Heatmap of events for CEM",
    image: "/images/projects/cem.png",
    tag: ["All", "Web"],
    linkUrl: "https://github.com/JulianCayceMTSU/CEMHeatmap",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "DataDoctors",
    description: "Hospital Check-In Website",
    image: "/images/projects/DataDoctors.png",
    tag: ["All", "Web"],
    linkUrl: "https://github.com/elijahxz/DataDoctors",
    previewUrl: "/"
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const  isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0 , opacity: 1},
  };
  
  const tiltOptions = {
    scale: 1.05,
    speed: 200,
    max: 15,
    glare: true,
    'max-glare': 0.2,
  };

  return (
    <section>
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
          name="Unity" 
          isSelected={tag === "Unity"}>
        </ProjectTag>
        <ProjectTag
          onClick={handleTagChange}
          name="Web" 
          isSelected={tag === "Web"}>
        </ProjectTag>
      </div>
      <ul
        ref={ref} 
        className='grid md:grid-cols-3 gap-8 md:gap-12'
      >
        {filterProjects.map((project, index) => (
            <motion.li
              key={index} 
              variants={cardVariants}
              initial='initial'
              animate={ isInView ? 'animate' : 'initial' }
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <ProjectCard
                  key={project.id}
                  title={project.title} 
                  description={project.description} 
                  imgUrl={project.image}
                  tags={project}
                  linkUrl={project.linkUrl}
                  previewUrl={project.previewUrl}
                  options={tiltOptions}

              />
            </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection
