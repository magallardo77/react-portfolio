import React from 'react'
import mg from '../images/mg.png'

const About = () => {
    return (
        <div className='aboutContainer text-white'>
            <div className='flex flex-col justify-center items-center '>
                <div className=''>
                    <p className='text-[35px] font-extrabold text-blue-300 p-5 flex justify-center'>
                        About Me
                    </p>
                    <div></div>
                </div>
                <div>
                    <img className=" rounded-full h-40 w-40 mx-auto" src={mg} />
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-center text-[25px]'>
                        <p>Hello, my name is Miguel Gallardo. I am a 22 year old aspiring full-stack web developer profiecient/certified in the MERN stack. Not to mention, I recieved my Bachelors of Science in Psychology from Arizona State University.</p>
                    </div>
                    <div className='text-center text-[25px]'>
                        <p> Skilled in working on several projects simultaneously, respectful and coachable team member. Detail oriented with a knack for solving problems. Open minded to new ideas and willing to put ego aside to complete assigned tasks.
                        </p>
                    </div>
                </div>
            </div>
            <div className='skillsContainer'>

            </div>
        </div>

    );
};

export default About