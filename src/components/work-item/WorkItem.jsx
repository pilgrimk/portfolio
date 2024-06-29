import React from 'react'
import shortid from 'shortid'

const WorkItem = ({ item }) => {
  return (
    <>
      <div className='max-w-5xl grid grid-col-1 bg-slate-50 rounded-2xl mt-4 mx-4 p-4'>
        <div className='grid grid-cols-3 gap-4 justify-items-center border-b-4 py-4'>
          <div className=''>
            <p className='italic text-xl md:text-2xl text-slate-600'>
              {item.title}
            </p>
            <p className='text-lg md:text-1xl text-slate-400'>
              {item.sub_title}
            </p>
          </div>
          <div className=''>
            <p>{item.hire_dates}</p>
          </div>
          <div className=''>
            <p className='md:text-lg font-semibold'>{item.company}</p>
            <p>{item.address1}</p>
            <p>{item.city}, {item.state} {item.postal}</p>
          </div>
        </div>
        <div className='pt-4'>
          {item.experience.map((exp) => (
            <p className='mt-2'
              key={shortid.generate()}
            >
              - {exp}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkItem
