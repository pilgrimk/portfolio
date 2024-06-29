import React from 'react'

const ProjectCard = ({ project: { title, desc, imgUrl, img_alt, url, tech } }) => {
  const followLink = (link) => {
    console.log(link);
    window.location.href = link;
  };

  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-[275px]"
        src={imgUrl}
        alt={img_alt} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">
          {desc}
        </p>
        <br />
        <span className="text-gray-600 font-semibold">Tech Used: </span>
        <span>{tech}</span>
      </div>
      <div className="flex flex-col w-full mt-auto">
        <div className="w-80 h-[2px] bg-accent-dark-100 self-center" />
        <div className="px-6 py-4">
          <button
            className="bg-accent-dark-500 hover:bg-accent-dark-300
          text-white font-bold py-2 px-4 
          border accent-dark-900 rounded"
            aria-label={title}
            onClick={() => followLink(`${url}`)}
          >
            View Site
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
