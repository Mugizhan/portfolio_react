import React from 'react';
import pic from './images/about.png'

const About = () => {
  return (
    <div className='backdrop-blur-sm h-screen flex flex-col justify-center items-center'>
      <div className=' text-center w-full md:w-3/5'>
        <h1 className='text-4xl text-slate-900 font-semibold mb-6'>About Me</h1>
       
      </div>

      <div className='w-full flex justify-center items-center'>
        <div className='bg-slate-900 drop-shadow-xl flex flex-col md:flex-row rounded-xl w-4/5 items-center h-auto md:h-[450px]'>
          {/* Left content section */}
          <div className='w-full md:w-full shadow rounded-xl flex flex-col justify-center h-full'>
           <img src={pic} className='drop-shadow-6xl w-full h-full rounded-t-xl md:rounded-l-xl '/>
            
          </div>

          {/* Right content section */}
          <div className='w-full p-2 text-white'>
            <div className='p-2'>
              <div className='bg-slate-800 p-2 rounded-xl'>
                <h2 className='text-3xl font-semibold mb-4'>I Am a <span className='text-red-400 animate-pulse'>Fullstack Developer</span></h2>
                <p className='text-sm text-justify'> Dynamic and passionate  Full Stack Developer with a specialization in the MERN stack (MongoDB,
 Express.js, React.js, Node.js). Skilled in developing robust and scalable web applications with a strong
 emphasis on user experience and interface design. Adept at problem-solving and a collaborative team
 player committed to continuous learning and professional growth in the field of web development</p><br/>
                <table className='list-none text-sm '>
                  <tr><td>Name</td><td> : </td> <td> Mugizhan P.N.</td></tr>
                  <tr><td>DOB</td><td> : </td><td> 03/10/2002</td></tr>
                  <tr><td>Location</td><td> : </td> <td> 1/184,Illanthaikottam, Chittarkottai, Ramnathapuram, Tamil Nadu</td></tr>
                  <tr><td>Phone</td><td> : </td><td> +91 9384932109</td></tr>
                  <tr><td>Email</td><td> : </td><td> pnmugizhan@gmail.com</td></tr> </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
