import React from 'react'
import GithubLogo from '../../../public/images/github-mark-white.png'
import LinkedInLogo from '../../../public/images/LinkedIn-white-logo.png'

import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='h-80 w-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-800 to-transparent rounded-full blur-lg absolute top-full -left-2 transform -translate-x-1/2 -translate-y-1/2'>

        </div>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>
                Let's Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                I'm looking for an opportunity! 
            </p>
            <div className='socials flex flex-row gap-5'>
                <Link 
                    href="https://github.com/mbutkevicius"
                >
                    <div className='w-12 h-12'>
                        <Image src={GithubLogo} alt='Github Icon'>

                        </Image>
                    </div>

                </Link>
                <Link 
                    href="www.linkedin.com/in/michael-butkevicius-9103ba1b3"
                >
                    <div className='w-13 h-13'>
                        <Image src={LinkedInLogo} alt='LinkedIn Icon'>
                            
                        </Image>
                    </div>
                </Link>

            </div>
        </div>
        <div>
            <form className='flex flex-col'>
                <div className='mb-6 mt-6'>
                    <label htmlFor='email' 
                        className='text-white block mb-2 text-sm font-medium'
                    >
                        Your email
                    </label>
                    <input
                        type='email' 
                        id='email'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] focus:border-green-500 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        required placeholder='johnsmith@gmail.com'>
                    </input>
                </div>

                <div className='mb-6'>
                    <label htmlFor='subject'
                        className='text-white block mb-2 text-sm font-medium'
                    >
                        Subject
                    </label>
                    <input
                        type='text' 
                        id='subject'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] focus:border-green-500 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        required placeholder='Just wanted to say hi!'>
                    </input>
                </div>

                <div className='mb-6'>
                    <label
                        htmlFor='message'
                        className='text-white block text-sm mb-2 font-medium'
                    >
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] focus:border-green-500 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about..."
                    >

                    </textarea>
                </div>
                <button 
                    type='submit'
                    className='bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-2.5 rounded-lg w-full'
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection
