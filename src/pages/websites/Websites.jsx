import React from 'react'
import { Header, ProjectCard, PricePlans } from '../../components'
import data from '../../constants/data'
import shortid from 'shortid'

const Websites = () => {
  return (
    <>
      <Header title={data.websitesSection.title} />
      <div className='w-full flex items-center justify-center overflow-hidden'>
        <div className='max-w-5xl'>
          <div className='m-4 py-4'>
            <div>
              <h1 className='text-lg md:text-2xl italic m-2'>
                {data.websitesSection.subtitle}
              </h1>
              <p className='m-4'>
                {data.websitesSection.desc}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-4 mx-8'>
                {data.websitesSection.projects.map((item) => (
                  <ProjectCard project={item} key={shortid.generate()} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full bg-accent-light-50 rounded-md p-4">
            <div>
              <h1 className='text-lg md:text-2xl italic m-2'>
                {data.pricePlanSection.title}
              </h1>
              <p className='m-4'>
                {data.pricePlanSection.desc}
              </p>
            </div>
            <div className='my-4'>
              <PricePlans pricePlans={data.pricePlanSection.price_plans} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Websites
