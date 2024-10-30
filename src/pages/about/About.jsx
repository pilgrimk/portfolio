import React from 'react'
import { Header, Carousel, WorkHistory } from '../../components'
import { data, images } from '../../constants'
import shortid from 'shortid'

const About = () => {
  return (
    <>
      <Header title={data.aboutSection.title} />
      <div className='w-full flex items-center justify-center overflow-hidden'>
        <div className='max-w-5xl flex flex-col'>
          <div className='w-full flex flex-col md:flex-row items-center
        md:space-x-8 rounded-md p-4'>
            <div className='w-96 h-96'>
              <Carousel images={images.gallery_pics} />
            </div>
            <div className='w-full flex flex-col mt-4 p-2 md:p-0'>
              <h1 className='text-lg md:text-2xl italic m-2'>
                {data.aboutSection.subtitle}
              </h1>
              {data.aboutSection.desc.map((info) => (
                <p className='mt-2 p-2'
                  key={shortid.generate()}
                >
                  {info}
                </p>
              ))}
            </div>
          </div>
          <div className='w-full flex justify-center items-center bg-accent-light-50 rounded-md overflow-hidden'>
            <div>
              <WorkHistory work_info={data.workHistorySection} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About