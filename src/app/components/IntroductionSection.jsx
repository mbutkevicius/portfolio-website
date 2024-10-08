"use client"
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'

const IntroductionSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className='col-span-8 place-self-center sm:text-left justify-self-start'
            >
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700'>
                    Hello I&apos;m,{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            " Michael!",
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            " A Game Developer",
                            2000,
                            " A Web Designer",
                            2000,
                            " A Leader",
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    I&apos;m a recent computer science graduate looking for a developer opportunity!
                </p>
                <div className='sm:mb-5 pb-6'>
                    <a 
                        href='/resume/ButkeviciusResume.pdf'
                        download='ButkeviciusResume.pdf'
                        className='button bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-400 hover:via-green-600 hover:to-green-700'
                        //className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-200 via-green-500 to-green-800 hover:from-green-400 hover:via-green-700 hover:to-green-800 hover:bg-red-500 text-white font-bold'
                    >
                    Download CV
                    </a>
                    {/* <a
                        href='/resume/ButkeviciusResume.pdf'
                        download='ButkeviciusResume.pdf' 
                        className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-green-200 via-green-500 to-green-800 hover:bg-slate-800 text-white mt-3'
                        style={{
                            display: 'inline-block',
                            textAlign: 'center',
                            textDecoration: 'none',
                            border: 'none',
                        }}
                    >
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                        Download CV
                        </span>
                    </a> */}
                </div>
            </motion.div>
            <motion.div
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5, delay: 0.12}} 
                className='col-span-4 place-self-center mt-4 lg:mt-0'
            >
                {/* <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src="/images/cover.png"
                        alt="cover"
                        className='absolute rounded-full w-[225px] h-[225px] lg:w-[350px] lg:h-[350px] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div> */}
            </motion.div>
        </div>
    </section>
  )
}

export default IntroductionSection
