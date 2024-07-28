import React from 'react'

const Footer = () => {
  return (
    <footer className='footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <span>
        <div                        
          className='px-6 py-3 w-fit rounded-full w-22 h-22 mr-4 bg-gradient-to-br from-green-300 via-green-500 to-green-900 text-slate-200 cursor-default'
        >
          <p className='text-2xl md:text-3xl font-bold'>
              MB
          </p>
          </div>
        </span>
        <p className='text-slate-600'>
            2024 All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
