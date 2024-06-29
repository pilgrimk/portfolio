import React from 'react'
import shortid from 'shortid'

const WorkHistory = ({ work_info }) => {
  return (
    <div className='w-full rounded-xl overflow-hidden bg-gradient-to-r from-accent-light-50 to-accent-light-100 p-10'>
      <h1 className='text-1xl sm:text-2xl italic'>
        {work_info.title}
      </h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className='px-4 py-2 text-accent-dark-600 text-xs sm:text-base'>Dates</th>
            <th className='px-4 py-2 text-accent-dark-600 text-xs sm:text-base'>Title</th>
            <th className='px-4 py-2 text-accent-dark-600 text-xs sm:text-base'>Company</th>
            <th className='px-4 py-2 text-accent-dark-600 text-xs sm:text-base'>City, State</th>
          </tr>
        </thead>
        <tbody>
          {work_info.work_history.map((item) => (
            <tr key={shortid.generate()} className='border border-accent_light-200'>
              <td className='px-4 py-2 text-accent-dark-900 text-xs sm:text-base'>{item.hire_dates}</td>
              <td className='px-4 py-2 text-accent-dark-900 text-xs sm:text-base'>{item.title}</td>
              <td className='px-4 py-2 text-accent-dark-900 text-xs sm:text-base'>{item.company}</td>
              <td className='px-4 py-2 text-accent-dark-900 text-xs sm:text-base'>{item.city}, {item.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WorkHistory