import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="flex flex-col h-full w-auto mx-40 justify-center  tracking-wider">
                <span className="font-bold text-5xl">About Me</span>
                <hr className= "mt-8 mb-2"></hr>
                <p className="text-xl leading-9">
                    <span className="text-gray-200 italic">Welcome!</span><br />
                    My name is <span className="text-gray-200 font-bold">Nirmal Gautam</span>.<br />
                    I am a <span className="text-gray-200 font-bold">Computer Science Junior</span>.<br />
                    I like <span className="text-gray-200 font-bold">Software Development</span>.<br />
                    Feel free to check out <span className="text-gray-200 font-bold italic underline">
                                                    <Link to = "/projects">
                                                        my projects
                                                    </Link>
                                            </span>.<br />         
                </p>
                <hr className= "mt-3 mb-4"></hr>
                <p className="text-right font-serif italic text-gray-200">Turn coffee into code</p>
                <hr className= "mt-4"></hr>

        </div>
    );
}

export default About;