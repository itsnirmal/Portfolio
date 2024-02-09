import React from 'react';

const Projects = () => {
    return (
        <div className="flex flex-col h-full w-auto mx-4 justify-center tracking-wider">
            <span className="font-bold text-5xl">Projects</span>
            <hr className="mt-8 mb-2" />
            <ul className="p-4 max-w grid lg:grid-cols-2 grid-cols-1 gap-12">
                    <li className="p-4 text-left transition ease-in-out delay-100 border-2 rounded-xl text-gray-300 hover:text-black hover:border-black hover:bg-gray-200 hover:scale-105 cursor-pointer">      
                       <p className = ""> 
                            <span className='font-extrabold'> Student Management System </span>
                            <br/>
                            <br/>
                            <span className='font-extrabold'> Description: </span>
                             A simple student management web application <br/>
                             <span className='font-extrabold'> Features: </span>
                             Listing, adding, updating, and deleting student records <br/>
                            <span className='font-extrabold'>Tools Used: </span>
                             Java, Spring Boot, Spring MVC, Hibernate, MySQL, Thymeleaf
                        </p>

                        <a target = "_blank" rel = "noreferrer" href="https://github.com/itsnirmal/Student-Management-System">
                            Click <span className='font-bold underline italic'>here</span> to go to project on GitHub
                         </a>
                    </li>

                    <li className="p-4 text-left transition ease-in-out delay-100 border-2 rounded-xl text-gray-300 hover:text-black hover:border-black hover:bg-gray-200 hover:scale-105 cursor-pointer">      
                       <p className = ""> 
                            <span className='font-extrabold'> Face Detection and Recognition </span>
                            <br/>
                            <br/>
                            <span className='font-extrabold'> Description: </span>
                             A simple application to detect and recognize human faces<br/>
                             <span className='font-extrabold'> Features: </span>
                             Accurate face detection and recognition <br/>
                            <span className='font-extrabold'>Tools Used: </span>
                             Python, OpenCV
                        </p>

                        <a target = "_blank" rel = "noreferrer" href="https://github.com/itsnirmal/Face-Recognition-with-Python-and-OpenCV">
                            Click <span className='font-bold underline italic'>here</span> to go to project on GitHub
                         </a>
                    </li>
               
                

            </ul>
            <p className="pt-4 text-right font-serif italic text-gray-200">Turn coffee into code</p>
            <hr className="mt-4" />
        </div>
    );
}

export default Projects;
