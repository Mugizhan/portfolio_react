import { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; 

const Header = () => {
  const [Edit, setEdit] = useState(false);
  const [Current, setCurrent] = useState('Home');
  const navigate = useNavigate();

  const Handle = (e) => {
    e.preventDefault();
    setEdit(!Edit);
  };

  const Navi = (item) => {
    setCurrent(item);
  };

  return (
    <div>
      <div className="fixed backdrop-blur-lg bg-slate-300 rounded-b-xl top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center p-4">
          <div className="flex">
            <h1 className="text-red-500 text-xl font-bold md:text-2xl">
              Mugizhan <span>PN</span>
            </h1>
          </div>
          <div className="flex">
            <div className="flex justify-end md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                onClick={Handle}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="size-7 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className={`bg-red-300 md:bg-transparent md:text-black text-lg md:text-sm md:font-bold rounded-l-xl p-3 fixed inset-y-0 right-0 w-1/2 md:w-fit bg-opacity-90 h-fit md:flex flex-row ${Edit ? 'block' : 'hidden'}`}
          >
            <ul className="md:flex flex flex-col md:flex-row gap-10 p-5 md:gap-4 h-screen md:h-auto w-full md:mt-0">
              <li
                className="fixed inset-y-0 right-0 m-5 md:hidden cursor-pointer"
                onClick={() => setEdit(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>

              {/* Home Link */}
              <li className="px-2 md:px-3 font-bold rounded cursor-pointer transition duration-200 ease-in-out hover:underline underline-offset-8 hover:text-black md:hover:text-red-500">
                <div className={`${Current === 'Home' ? 'text-red-500 underline' : ''}`}>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => Navi('Home')}
                  >
                    Home
                  </Link>
                </div>
              </li>

              {/* About Link */}
              <li className="px-2 md:px-3 font-bold rounded cursor-pointer transition duration-200 ease-in-out hover:underline underline-offset-8 hover:text-black md:hover:text-red-500">
                <div className={`${Current === 'About' ? 'text-red-500 underline' : ''}`}>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => Navi('About')}
                  >
                    About
                  </Link>
                </div>
              </li>

              {/* Resume Link */}
              <li className="px-2 md:px-3 font-bold rounded cursor-pointer transition duration-200 ease-in-out hover:underline underline-offset-8 hover:text-black md:hover:text-red-500">
                <div className={`${Current === 'Resume' ? 'text-red-500 underline' : ''}`}>
                  <Link
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => Navi('Resume')}
                  >
                    Resume
                  </Link>
                </div>
              </li>

              {/* Projects Link */}
              <li className="px-2 md:px-3 font-bold rounded cursor-pointer transition duration-200 ease-in-out hover:underline underline-offset-8 hover:text-black md:hover:text-red-500">
                <div className={`${Current === 'Projects' ? 'text-red-500 underline' : ''}`}>
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => Navi('Projects')}
                  >
                    Projects
                  </Link>
                </div>
              </li>

              {/* Contact Link */}
              <li className="px-2 md:px-3 font-bold rounded cursor-pointer transition duration-200 ease-in-out hover:underline underline-offset-8 hover:text-black md:hover:text-red-500">
                <div className={`${Current === 'Contact' ? 'text-red-500 underline' : ''}`}>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => Navi('Contact')}
                  >
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-20"></div>
    </div>
  );
};

export default Header;
