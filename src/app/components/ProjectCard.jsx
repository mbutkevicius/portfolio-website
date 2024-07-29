import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ( {imgUrl, title, description, linkUrl, previewUrl, children, options} ) => {
  const tiltRef = useRef(null);

  useEffect(() => {
      VanillaTilt.init(tiltRef.current, options);

      return () => {
        if (tiltRef.current && tiltRef.current.vanillaTilt) {
          tiltRef.current.vanillaTilt.destroy();
        }
      };
  }, [options]);

  return (
    <div ref={tiltRef} data-tilt>
      {children}
      <Link href={linkUrl} title={linkUrl} target='_blank'>
        <div 
          className='h-52 md:h-72 rounded-t-xl relative group'
          style={{background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center center",}}> 
          <div className='"overlay items-center justify-center absolute top=0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex transition-all duration-500'> {/*group-hover:bg-opacity-60*/}
          </div>
        </div>
      {/* </Link> */}
      <div className='text-white rounded-b-xl bg-[#181818]py-6 px-4'>
        <h5 className='text-2xl font-semibold text-white mt-4'>{title}</h5>
        <p className='text-[#ADB7BE] mt-1'>{description}</p>
      </div>
      </Link>
      
    </div>
  )
}

export default ProjectCard
