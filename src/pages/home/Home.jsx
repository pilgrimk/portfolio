import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../../constants'

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  }

  return (
    <>
      <div className="bg-screen-bg lg:bg-screen-lg bg-fixed bg-cover min-h-[80vh]">
        <div
          id='title-box'
          className='absolute top-[55%] transform -translate-y-1/2 bg-accent-light-800 w-4/5 max-w-[1000px] rounded-md p-4'
          // className='absolute top-[55%] right-0 transform -translate-y-1/2 translate-x-[0%] bg-accent-light-800 w-4/5 max-w-[1200px] rounded-md p-4'
          >
          <div className='w-full flex flex-col items-center justify-center'>
            <div>
              <h1 className='text-4xl text-white p-4 italic underline font-serif'>
                {data.heroSection.title}
              </h1>
              <h2 className='text-xl text-white p-4'>
                {data.heroSection.subtitle}
              </h2>
            </div>
          </div>
          <div className='w-full flex flex-row items-center justify-center pb-8 gap-6'>
            <button 
                onClick={() => handleNavigate('/contact')}
                className='bg-accent-dark-500 hover:bg-accent-dark-300
                text-white font-bold mt-4 py-2 px-4 
                border accent-dark-900 rounded'>
              Hire Me
            </button>
            <button 
                onClick={() => handleNavigate('/projects')}
                className='bg-accent-dark-500 hover:bg-accent-dark-300
                text-white font-bold mt-4 py-2 px-4 
                border accent-dark-900 rounded'>
              Projects
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home