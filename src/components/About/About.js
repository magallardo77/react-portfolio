import React from 'react'

const About = () => {
    return (
        <div className='aboutContainer text-white'>
            <div className='flex flex-col justify-center items-center '>
                <div className=''>
                    <p className='text-[35px]  text-blue-300 p-5'>
                        About
                    </p>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-center text-[25px]'>
                        <p>Hello, my name is Miguel Gallardo. Navigate to the specified locations to get to know me more.</p>
                    </div>
                    <div className='text-center text-[25px]'>
                        <p>I am a 22 year old aspiring full-stack web developer profiecient/certified in the MERN stack. I recieved my B.S. in </p>
                    </div>
                </div>
            </div>
            <div className='skillsContainer'>

            </div>
        </div>
    
    );
};

export default About