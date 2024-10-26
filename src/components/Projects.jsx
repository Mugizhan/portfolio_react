import React, { useState } from 'react';
import prjimg1 from './images/project1.png';
import prjimg2 from './images/project2.png'; // Puddy Image
import prjimg3 from './images/project3.png'; // Vendo-in Image

const Projects = () => {
  const [value, setValue] = useState(0);

  const projects = [
    {
      title: 'CSLib',
      subtitle: 'The Library Management System',
      duration: 'Dec 2022 - Apr 2023',
      technologies: 'HTML, CSS, JavaScript, PHP, MySQL',
      links: 'github.com/Mugizhan/php_practice',
      image: prjimg1,
      description: 'Engineered and deployed a Library Management System for Vivekananda College, Madurai, which efficiently manages and tracks book records.',
    },
    {
      title: 'Puddy',
      subtitle: 'The Online Food Ordering App',
      duration: 'June 2024',
      technologies: 'MongoDB, Express.js, React.js, Node.js, TailwindCSS',
      links: 'github.com/YourUsername/puddy',
      image: prjimg2,
      description: 'Developed an online food menu application allowing users to order food and admins to manage food products. Implemented JWT for security and ensured responsive UI using TailwindCSS.',
    },
    {
      title: 'Vendo-in',
      subtitle: 'LinkedIn Clone',
      duration: 'Jan 2024 - Apr 2024',
      technologies: 'MongoDB, Express.js, React.js, Node.js',
      links: 'github.com/YourUsername/vendo-in',
      image: prjimg3,
      description: 'Created a social media app for vendors to showcase products and purchase raw materials, connecting B2B and D2C businesses without intermediaries.',
    },
  ];

  const nextProject = () => {
    setValue((prevValue) => (prevValue + 1) % projects.length);
  };

  const previousProject = () => {
    setValue((prevValue) => (prevValue - 1 + projects.length) % projects.length);
  };

  return (
    <div className='backdrop-blur-sm h-screen flex flex-col justify-center items-center'>
      <div className=' text-center w-3/5'>
        <h1 className='text-4xl text-slate-900 font-semibold mb-6'>My Projects</h1>
      
      </div>

      <div className='w-full flex justify-center items-center'>
        <button 
          onClick={previousProject} 
          className='text-white p-2 rounded-lg mb-4 md:mb-0 md:mr-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="slate-800" className="size-8">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
          </svg>
        </button>

        <div className='bg-slate-900 flex flex-col md:flex-row rounded-xl w-4/5 items-center h-auto md:h-[400px]'>
          {/* Left content section */}
          <div className='w-full md:w-3/5 shadow rounded-xl flex flex-col justify-center h-full'>
            <div className='p-4 text-white'>
              <div className='flex flex-col gap-3 bg-slate-800 p-4 rounded-xl'>
                <div className='flex flex-col'>
                  <h2 className='text-4xl font-semibold'>{projects[value].title}</h2>
                  <h4 className='text-lg text-red-500'>{projects[value].subtitle}</h4>
                </div>
                <div className='flex flex-col gap-3'>
                  <p>{projects[value].duration}</p>
                  <p>Technologies: {projects[value].technologies}</p>
                  <p>{projects[value].description}</p>
                  <p className='text-sm flex gap-3'>
                    <a href={`https://${projects[value].links}`} className='text-white underline'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className='w-full p-4 text-white'>
            <div className='p-2'>
              <img src={projects[value].image} alt={projects[value].title} className="rounded-lg h-full object-cover" />
            </div>
          </div>
        </div>

        <button 
          onClick={nextProject} 
          className='text-white p-2 rounded-lg mt-4 md:mt-0 md:ml-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="slate-800" className="size-8">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Projects;