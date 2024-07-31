"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';
import { motion } from 'framer-motion'
import '../../../styles.css'


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            
            // <ul className='list-disc pl-2 grid grid-cols-2 p-4'>
                // made custom list-disc-color in styles.css
            <ul className="grid grid-cols-2 list-disc list-disc-color md:list-inside pl-2 md:w-96">
                <li>C#</li>
                <li>React</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>Javascript</li>
                <li>Unity</li>
                <li>MySQL</li>
                <li>Tailwind CSS</li>
                <li>Git</li>
                <li>Visual Studio</li>
                <li>Jira</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc list-disc-color pl-2'>
                <li className='font-semibold'>Middle Tennessee State University</li>
                <li>B.S. Professional Computer Science</li>
                <li>Graduated Magna Cum Laude</li>
                <li>GPA: 3.89</li>
                <li>ACM Club Member</li>
            </ul>
        ),
    },
    {
        title: "Soft Skills",
        id: "softskills",
        content: (
            <ul className='list-disc list-disc-color pl-2'>
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Work Ethic</li>
                <li>Leadership</li>
                <li>Time Management</li>
            </ul>
        ),
    },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(()  =>{
        setTab(id);
    });
  };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py:16 xl:px-16'>
            <motion.div
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5, delay: 0.12}}
            >            
                <Image 
                    src="/images/test.JPG"
                    alt='test' 
                    width={500} 
                    height={500} 
                />
            </motion.div>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4 mt-2'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Hi! I&apos;m a computer science graduate with a strong interest in web and game development.
                    I&apos;m always looking to learn and improve my skills. Recently, I finished a gaming project titled
                    Trip&apos;s Voyage Gem Rush, which you can find on itch.io.
                    I&apos;ve always had a passion for games ever since I was little and
                    want to spread the happiness felt when being immersed in
                    a new game.
                    Outside of programming, I love exercising, music and art.
                </p>
                <div className='flex flex-row mt-8 text-lg'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("softskills")}
                        active={tab === "softskills"}>
                        {" "}
                        Soft Skills{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>
                {TAB_DATA.find((t) => t.id === tab).content}

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
