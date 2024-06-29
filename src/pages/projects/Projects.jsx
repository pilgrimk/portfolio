import React from 'react'
import { Header, ProjectCard } from '../../components'
import data from '../../constants/data'
import shortid from 'shortid'

const Projects = () => {
  return (
    <>
      <Header title='Projects' />
      <div className='m-4 py-4'>
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-4 mx-8'>
            {data.projectsSection.projects.map((item) => (
              <ProjectCard project={item} key={shortid.generate()} />
            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default Projects
