import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 md:px-0">
      
      {/* Contact Header */}
      <div className="text-center my-8 md:my-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Contact Me</h1>
        <p className="text-md md:text-lg text-gray-500 mt-2 md:mt-4">
          Get in touch with us to get the ball rolling
        </p>
      </div>

      {/* Contact Options */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center mt-6 md:mt-12">
        
        {/* Email */}
        <a href="mailto:pnmugizhan@gmail.com" className="text-gray-600 text-xs md:text-sm">  
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-4 md:p-6 mb-2 md:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-8 h-8 md:w-12 md:h-12">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
            EMAIL
            <p className="text-gray-500 text-xs md:text-sm">pnmugizhan@gmail.com</p>
          </div>
        </a>

        {/* Phone */}
        <a href="tel:+919384932109" className="text-gray-600 text-xs md:text-sm">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-4 md:p-6 mb-2 md:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-8 h-8 md:w-12 md:h-12">
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
              </svg>
            </div>
            PHONE
            <p className="text-gray-500 text-xs md:text-sm">+91 93849 32109</p>
          </div>
        </a>

        {/* Project Planner */}
        <a href="#planner" className="text-gray-600 text-xs md:text-sm">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-4 md:p-6 mb-2 md:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="20" height="20" viewBox="0 0 30 30" className="w-8 h-8 md:w-12 md:h-12">
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg> </div>
            Linkedin
            <p className="text-gray-500 text-xs md:text-sm">mugizhan</p>
          </div>
        </a>

        <a href="https://github.com/Mugizhan" className="text-gray-600 text-xs md:text-sm">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-4 md:p-6 mb-2 md:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="grey" width="20" height="20" viewBox="0 0 64 64"  className="w-8 h-8 md:w-12 md:h-12">
                  <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                </svg> </div>
            Github
            <p className="text-gray-500 text-xs md:text-sm">Mugizhan</p>
          </div>
        </a>


        <a href="" className="text-gray-600 text-xs md:text-sm">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-4 md:p-6 mb-2 md:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="20" height="20" viewBox="0 0 50 50" className="w-8 h-8 md:w-12 md:h-12">
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
 </div>
            Instagram
            <p className="text-gray-500 text-xs md:text-sm">mugizhan_9484</p>
          </div>
        </a>
      </div>

    </div>
  );
};

export default Contact;
