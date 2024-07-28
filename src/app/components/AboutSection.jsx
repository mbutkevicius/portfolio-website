"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>C#</li>
                <li>Python</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Unity</li>
                <li>SQL</li>
                <li>Git</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li className='font-bold'>Middle Tennessee State University</li>
                <li>B.S. Professional Computer Science</li>
                <li>Graduated Magna Cum Laude</li>
                <li>GPA: 3.89</li>
                <li>ACM Club Member</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>None</li>
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
            <Image 
                src="/images/test.JPG"
                alt='test' 
                width={500} 
                height={500} 
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4 mt-2'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I&apos;m a computer science graduate interested in web and game development.
                    Recently, I finished a gaming project titled Trip&apos;s voyage.
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
                        selectTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}>
                        {" "}
                        Certifications{" "}
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
