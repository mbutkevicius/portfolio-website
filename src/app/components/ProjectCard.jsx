import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ( {imgUrl, title, description, linkUrl, previewUrl} ) => {
  return (
    <div>
      <Link href={linkUrl} title={linkUrl}>
        <div 
          className='h-52 md:h-72 rounded-t-xl relative group'
          style={{background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center center",}}> 
          <div className='"overlay items-center justify-center absolute top=0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500'>
          </div>
        </div>
      </Link>
      <div className='text-white rounded-b-xl bg-[#181818]py-6 px-4'>
        <h5 className='text-2xl font-semibold text-white mt-4'>{title}</h5>
        <p className='text-[#ADB7BE] mt-1'>{description}</p>
      </div>
      
    </div>
  )
}

export default ProjectCard
