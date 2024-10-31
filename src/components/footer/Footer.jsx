import React from 'react'
import { Link } from 'react-router-dom'
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
        {data.contactUs.title}
      </p>
      <span className="h-1 w-3/4 bg-earthy-sand-100 lg:w-1/2"></span>
      <div className='flex flex-col justify-evenly p-4 md:flex-row'>
        <div className='text-white text-lg p-8 text-center md:text-left'>
          <p>{data.contactUs.full_name}</p>
          <p>{data.contactUs.street}</p>
          <p>{data.contactUs.city}, {data.contactUs.state_short}, {data.contactUs.postal}</p>
          <p>Click <Link className='italic underline text-blue-500' to="/payments">here</Link> to make a payment!</p>
        </div>
        <div className='text-white text-lg p-8 text-center md:text-left'>
          <p>Phone: {data.contactUs.mobile}</p>
          <p>Email: {data.contactUs.email}</p>
          {(data.contactUs.social_media) &&
            <div>
              {data.contactUs.social_media.map((media) => (
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
        <p>2024 {data.contactUs.name_long}. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer