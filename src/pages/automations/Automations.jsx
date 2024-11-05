import React from 'react'
import { Header } from '../../components'
import data from '../../constants/data'
import shortid from 'shortid'

const Automations = () => {
    return (
        <>
            <Header title={data.automationsSection.title} />
            <div className='w-full flex items-center justify-center overflow-hidden'>
                <div className='max-w-5xl'>
                    <div>
                        <h1 className='text-lg md:text-2xl italic m-2'>
                            {data.automationsSection.subtitle}
                        </h1>
                        <p className='m-4'>
                            {data.automationsSection.video_desc}
                        </p>
                        <div className="w-full flex flex-row justify-center items-center p-8">
                            <div className="w-[325px] lg:w-[1000px] md:w-[650px] sm:w-[550px]">
                                <div className='w-full aspect-video'>
                                    <iframe
                                        className='w-full h-full rounded-lg'
                                        src={data.automationsSection.video_src}
                                        width="100%"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg md:text-2xl italic m-2'>
                            {data.automationsSection.key_benefits.title}
                        </h1>
                        <p className='m-4'>
                            {data.automationsSection.key_benefits.desc}
                        </p>
                        <ul className='list-disc mx-12'>
                            {data.automationsSection.key_benefits.benefits.map((benefit) => (
                                <li key={shortid.generate()}>
                                    <span className='font-bold text-accent-dark-500'>{benefit.name}</span>
                                    <p className='italic mb-2'>{benefit.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg md:text-2xl italic m-2'>
                            {data.automationsSection.how_it_works.title}
                        </h1>
                        {data.automationsSection.how_it_works.desc.map((desc) => (
                            <p key={shortid.generate()}
                                className='m-4'>
                                {desc}
                            </p>
                        ))}
                        <ul className='list-disc mx-12'>
                            {data.automationsSection.how_it_works.automations.map((automation) => (
                                <li key={shortid.generate()}>
                                    <span className='font-bold text-accent-dark-500'>{automation.name}</span>
                                    <p className='italic mb-2'>{automation.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full bg-accent-light-50 rounded-md p-4'>
                        <h1 className='text-2xl italic m-2'>
                            {data.automationsSection.call_to_action.title}
                        </h1>
                        <p className='m-4'>
                            {data.automationsSection.call_to_action.desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Automations