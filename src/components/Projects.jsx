import React from 'react'
import AcademyPortalImg from '../assets/projects/academyPortal.png'
import ApiImg from '../assets/projects/api.png'
import CountyGameImg from '../assets/projects/countygame.png'
import FoodAppImg from '../assets/projects/foodApp.png'

const Projects = () => {
  return (
    <div id='projects' name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-800'>Projects</p> 
            <p className='py-6'>Check out some of my recent work </p> 
          </div>  

{/* Container */}
          <div 
          className='grid sm:grid-cols-2 md:grid-col-3 gap-4 rounded-md'>

            {/* Grid item */}
            <div style={{ backgroundImage: `url(${AcademyPortalImg})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center  items-center mx-auto content-div text-justify pl-2 pr-2 pt-2'>
            
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-1xl font-bold tex-white  tracking-wider'>
                    Full-stack legacy application built on the Slim Framework, where our tasks involved editing the Academy Portal, fixing existing bugs, and implementing new features. 
                    </span>
                    <div className='pt-4 text-center'>
                        <a href='https://portal.dev.io-academy.uk' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/iO-Academy/AcademyPortal' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${ApiImg})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center  items-center mx-auto content-div text-justify pl-2 pr-2 pt-2'>
            
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-1xl font-bold tex-white  tracking-wider'>
                    Project Management API. Created a back-end API that supports GET requests using PHP Object-Oriented Programming and SQL. The requests cover retrieving all project data and also handles specific project by id. Changing the id will retrieve the related project API.
                    </span>
                    <div className='pt-4 text-center'>
                        <a href='https://2023-jan-groundhogs-project-management-api.dev.io-academy.uk/projects.php' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/Joperes-ym/jp-collection' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${FoodAppImg})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center  items-center mx-auto content-div text-justify pl-2 pr-2 pt-2'>
            
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-1xl font-bold tex-white  tracking-wider'>
                    A React front-end app for a food delivery application utilising an existing RESTful API. Sass and Bootstrap were implemented to help create the UI we were aiming for from the provided designs. 
                    </span>
                    <div className='pt-4 text-center'>
                        <a href='https://2023-jan-groundhogs-food-delivery.dev.io-academy.uk' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/iO-Academy/23-jan-foodDeliveryFE' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${CountyGameImg})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center  items-center mx-auto content-div text-justify pl-2 pr-2 pt-2'>
            
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-1xl font-bold tex-white  tracking-wider'>
                    A timed English county guessing game built in vanilla javascript. Providing functionality of an instructions modal, button to start the game and timer, display the score to the user and optionally add the users name to a viewable leaderboard.
                    </span>
                    <div className='pt-4 text-center'>
                        <a href='https://23jan-county-guess.dev.io-academy.uk' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/iO-Academy/23-jan-countyGuess' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            
          </div>

        </div>
    </div>
  )
}

export default Projects