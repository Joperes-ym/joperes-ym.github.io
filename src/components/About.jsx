import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-800'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi. I‘m a Junior Full Stack Software Developer based in Portugal. Graduated from IO Academy (UK). </p>
                </div>
                <div>
                    <p>Prior to my final training I spent a decade working on Retail Management where I  acquired team management and good problem solving skills. After so many years putting my dream to the side, with IO Academy I am back on track. I have developed my skills in front-end and back-end technologies whilst working in a development team. When not coding you can find me illustrating, hand embroidering or playing MTG. You can find a selection of projects I’ve worked on below.</p>
                
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default About