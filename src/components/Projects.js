import React from 'react';

const Projects = () => {
    return (
        <div className="flex flex-col h-full w-auto mx-4 justify-center tracking-wider">
            <span className="font-bold text-5xl">Projects</span>
            <hr className="mt-8 mb-2" />
            <ul className="p-4 max-w grid lg:grid-cols-2 grid-cols-1 gap-12">
                
                <a target = "_blank" rel = "noreferrer" href="https://github.com/itsnirmal">
                    <li className="p-4 text-center transition ease-in-out delay-100 border-2 rounded-xl hover:text-black hover:border-black hover:bg-orange-300 hover:scale-105 cursor-pointer">      
                        01
                        <p>Description of Project 1</p>
                    </li>
                </a>
                
                <a target = "_blank" rel = "noreferrer" href="https://github.com/itsnirmal">
                    <li className="p-4 text-center transition ease-in-out delay-100 border-2 rounded-xl hover:text-black hover:border-black hover:bg-orange-300 hover:scale-105 cursor-pointer">      
                        01
                        <p>Description of Project 1</p>
                    </li>
                </a>

                <a target = "_blank" rel = "noreferrer" href="https://github.com/itsnirmal">
                    <li className="p-4 text-center transition ease-in-out delay-100 border-2 rounded-xl hover:text-black hover:border-black hover:bg-orange-300 hover:scale-105 cursor-pointer">      
                        01
                        <p>Description of Project 1</p>
                    </li>
                </a>

                <a target = "_blank" rel = "noreferrer" href="https://github.com/itsnirmal">
                    <li className="p-4 text-center transition ease-in-out delay-100 border-2 rounded-xl hover:text-black hover:border-black hover:bg-orange-300 hover:scale-105 cursor-pointer">      
                        01
                        <p>Description of Project 1</p>
                    </li>
                </a>

            </ul>
            <p className="p-4 text-center font-serif italic text-gray-200">More projects on my github!</p>
            <hr className="mt-8" />
            <p className="pt-4 text-right font-serif italic text-gray-200">Turn coffee into code</p>
            <hr className="mt-4" />
        </div>
    );
}

export default Projects;
