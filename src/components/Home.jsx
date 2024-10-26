import React,{useNavigate} from 'react';
import Mugi from './images/mugi.png';
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className='h-screen w-screen'>
      <div className='flex flex-col h-screen md:h-full md:flex-row zx m-4 md:m-10 gap-5'>
        <div className='flex justify-center md:justify-start'>
          <img src={Mugi} className='w-52 md:w-screen h-fit saturate-100' alt="Mugizhan" />
        </div>
        <div className='text-black flex m-5 flex-col gap-3 justify-center animation-all duration-1000 text-3xl md:text-4xl font-bold'>
          <h1>Hi, I'm <span className='text-red-500 '>Mugizhan</span></h1>
          <h2 className='text-xl'>I'm a <span className='text-red-500'>MERN STACK Developer</span></h2>
          <p className='text-sm font-light text-wrap text-justify'>
            Skilled in developing robust and scalable web applications with a strong emphasis on user experience and interface design. Adept at problem-solving and a collaborative team player committed to continuous learning and professional growth in the field of web development.
          </p>
          <div className='flex gap-8 justify-center mt-5'>
            <div className='border border-red-500 p-1 w-fit rounded-full '>
              <a href='https://www.linkedin.com/in/mugizhan' target='_blank' rel='noopener noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="20" height="20" viewBox="0 0 30 30">
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              </a>
            </div>
            <div className='border border-red-500 p-1 w-fit rounded-full'>
              <a href='https://github.com/Mugizhan' target='_blank' rel='noopener noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="20" height="20" viewBox="0 0 64 64">
                  <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                </svg>
              </a>
            </div>
            <div className='border border-red-500 p-1 w-fit rounded-full'>
              <a href='https://www.instagram.com/mugizhan_9484/' target='_blank' rel='noopener noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="20" height="20" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
              </a>
            </div>
            <div className='border border-red-500 p-1 w-fit rounded-full'>
              <a href='https://wa.me/9384932109' target='_blank' rel='noopener noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="20" height="20" viewBox="0 0 50 50">
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className=' m-20 bg-red-500 rounded-full text-sm text-white p-3 flex justify-center mt-3 hover:text-red-500 hover:bg-transparent hover:border border-red-500'>
          <a href='/Resume/Mugizhan PN.pdf' download='Mugizhan_Resume.pdf'>Download Resume</a>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
