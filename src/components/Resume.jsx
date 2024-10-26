import React, { useState } from 'react';

const Resume = () => {
  const [value, setValue] = useState(0);

  const handleButtonClick = (value) => {
    setValue(value);
  };

  const skills = [
    {
      title: "My Intern",
      text: "",

      intern: {
        company :"@NaviPromotions",
        duration: '30/05/2024 - 25/06/2024',
        title: 'Puddy-The Online food ordering App',
        technology: 'MongoDB, Express.js, React.js, Node.js,TailwindCSS',
        skills: 'Developed "Puddy," an online food menu application,enabling users to order food through the app and allowing admins to add and display food products. Implemented user authentication using JWT tokens and cookies to enhance security. Utilized TailwindCSS to ensure the application is responsive and provides a seamless user experience across various devices.'
      }
    },
    {
      title: "My Education",
      text: "",
      details: [
        {
          type: 'Master of Computer Application',
          college: 'Mepco Schlenk Engineering College, Sivakasi',
          year: 'Aug 2023 - Present',
          CGPA: '7.34'
        },
        {
          type: 'B.Sc. Computer Science',
          college: 'Vivekananda College, Madurai',
          year: 'Aug 2020 - June 2023',
          CGPA: '7.24'
        }
      ]
    },
    {
      title: "Skills",
      text: "",
      details: {
        'Front-End': 'JavaScript, React.js, CSS, TailwindCSS',
        'Back-End': 'Node.js, Express.js, PhP',
        'Database': 'MongoDB, MySQL',
        'Tools': 'Git, GitHub'
      }
    }
  ];

  return (
    <div className='bg-slate-900 backdrop-blur-sm h-screen flex justify-center '>
      <div className='w-screen  fixed'>
        <div className='flex flex-col gap-2 md:flex-row md:m-20 mt-20 '>
          <div className='w-screen md:w-screen h-4/5 shadow rounded-xl flex flex-col justify-center'>
            <div className='p-4'>
              <h1 className='text-2xl text-white font-semibold p-2'>Why hire me?</h1>
             <p className='text-white text-justify'>I bring solid education and hands-on internship experience. I'm excited to utilize my skills and make a positive impact on your team!</p>
            </div>
            <div className='flex flex-col p-4 gap-5'>
              <button className='bg-gray-400 p-2 text-white rounded-lg hover:bg-red-500' onClick={() => handleButtonClick(0)}>Internship</button>
              <button className='bg-gray-400 p-2 text-white rounded-lg hover:bg-red-500' onClick={() => handleButtonClick(1)}>Education</button>
              <button className='bg-gray-400 p-2 text-white rounded-lg hover:bg-red-500' onClick={() => handleButtonClick(2)}>Skills</button>
            </div>
          </div>
          <div className='w-screen md:w-screen h-4/5 shadow rounded-xl '>
            <div className='p-4 text-white w-full '>
            {
              value === 0 && (
                <div className='p-2'>
                  <h2 className='text-2xl text-white font-semibold'>{skills[0].title}</h2>
                  <h2>{skills[0].text}</h2><br/>
                  <div className='bg-slate-800 p-2 rounded-xl flex flex-col gap-3 hover:backdrop-blur-md'>
                    <p className='text-red-500'>{skills[0].intern.duration}</p>
                    <p>Title: {skills[0].intern.title}</p>
                    <p className='text-sm'>{skills[0].intern.skills}</p>
                    <p className='text-sm flex gap-3'><span className='text-red-500 rounded-xl'> ● </span>{skills[0].intern.company}</p>
                  </div>
                </div>
              )
            }
            {
              value === 1 && (
                <div className='p-2'>
                  <h2 className='text-2xl text-white font-semibold'>{skills[1].title}</h2>
                  <h2>{skills[1].text}</h2><br/>
                  <div className='bg-slate-800 p-2 rounded-xl flex flex-col gap-3 hover:backdrop-blur-md shadow-xl'>
                  {
                    skills[1].details.map((detail, index) => (
                      <div key={index} className='pl-2 rounded-t-md flex flex-col gap-3 hover:backdrop-blur-md border-l'>
                        <p className='text-red-500 font-bold'>{detail.type}</p>
                        <div className='ml-3 flex flex-col gap-3'>
                        <p>{detail.college}</p>
                        <p>{detail.year}</p>
                        <p>CGPA : {detail.CGPA}</p></div>
                      </div>
                    ))
                  }
                  </div>
                </div>
              )
            }
            {
              value === 2 && (
                <div className='p-2'>
                  <h2 className='text-2xl text-white font-semibold'>{skills[2].title}</h2>
                  <h2>{skills[2].text}</h2><br/>
                  <div className='bg-slate-800 p-2 rounded-xl flex flex-col gap-3 hover:backdrop-blur-md'>
                  {
                    Object.entries(skills[2].details).map(([category, items]) => (
                      
                      <div key={category} >
                        <p className='text-sm'><strong>{category}:</strong> <span>{items}</span></p>
                      </div>
                    ))
                  }</div>
                </div>
              )
            }
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
