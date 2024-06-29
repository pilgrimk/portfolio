import React from 'react'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from 'react-icons/bs'
import { data } from '../../constants'
import shortid from 'shortid'

const Footer = () => {
  const getLinkedIcon = (title) => {
    switch (title) {
      case 'Instagram':
        return <BsInstagram />;
      case 'Twitter':
        return <BsTwitter />;
      case 'LinkedIn':
        return <BsLinkedin />;
      case 'YouTube':
        return <BsYoutube />;
      default:
        return <BsFacebook />;
    }
  };

  const followLink = (link) => {
    // console.log(link);
    window.location.href = link;
  };

  return (
    <div className='flex flex-col justify-center items-center 
    bg-gradient-to-b from-accent-dark-700 to-black to-90%'>
      <p className='w-full p-8 text-white text-2xl text-center italic'>
        {data.contactMe.title}
      </p>
      <span className="h-1 w-3/4 bg-earthy-sand-100 lg:w-1/2"></span>
      <div className='flex flex-col justify-evenly p-4 md:flex-row'>
        <div className='text-white text-lg p-8 text-center md:text-left'>
          <p>{data.contactMe.full_name}</p>
          <p>{data.contactMe.street}</p>
          <p>{data.contactMe.city}, {data.contactMe.state_short}, {data.contactMe.postal_code}</p>
        </div>
        <div className='text-white text-lg p-8 text-center md:text-left'>
          <p>Phone: {data.contactMe.mobile}</p>
          <p>Email: {data.contactMe.email}</p>
          {(data.contactMe.social_media) &&
            <div>
              {data.contactMe.social_media.map((media) => (
                <button
                  className='pt-2 pr-4'
                  key={shortid.generate()}
                  aria-label={media.title}
                  onClick={() => followLink(`${media.link}`)}>
                  {getLinkedIcon(media.title)}
                </button>
              ))}
            </div>
          }
        </div>
      </div>
      <div className='w-full bg-black text-center text-white p-4'>
        <p>2024 {data.contactMe.name_long}. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer