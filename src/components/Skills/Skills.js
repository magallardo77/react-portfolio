import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiSequelize, SiHandlebarsdotjs, SiMongodb, SiHeroku, SiReact, SiGraphql, SiGithub} from 'react-icons/si';
import Resume from '../images/Resume.pdf'


const Skills = () => {
    return (
        <div className='skillsContainer flex justify-center align-items mx-auto'>
            <div>
                <div className='text-[35px] font-extrabold text-blue-300 p-5 flex justify-center'>
                    <h1>Skills</h1>
                </div>
                <div>
                    <a type="button" className="text-[30px] font-extrabold outline outline-offset-2  text-blue-300 flex justify-center btn btn-primary " href={Resume} download>Click Button To Download Resume</a>
                </div>
                <div className='imgContainer grid grid-cols-2'>
                    <div className='p-20'>
                        <p className='text-sky-600 font-extrabold text-[28px] text-center font-sans'>Front end:</p>
                        <a className='text-white font-bold text- text-[20px] text-center font-sans'>Javascript<SiJavascript/></a>
                            <a className='text-white font-bold text- text-[20px] text-center font-sans'>React<SiReact/></a>
                            <a className='text-white font-bold text- text-[20px] text-center font-sans'>CSS & CSS Frameworks<SiCss3/></a>
                            <a className='text-white font-bold text- text-[20px] text-center font-sans'>Handlebars<SiHandlebarsdotjs/></a>
                            <a className='text-white font-bold text- text-[20px] text-center font-sans'>HTML<SiHtml5/></a>
                    </div>
                    <div className='p-20'>
                        <p className='text-sky-600 font-extrabold text-[28px] text-center font-sans'>Back end:</p>
                            <a className='text-white font-bold text- text-[20px] text-center font-sans'>Javascript<SiJavascript/></a>
                            <a className='text-white font-bold text- text-[20px] text-center font-sans'>Express<SiExpress/></a>
                            <a className='text-white font-bold  text- text-[20px] text-center font-sans'>Node<SiNodedotjs/></a>
                            <a className='text-white font-bold  text- text-[20px] text-center font-sans'>GraphQL<SiGraphql/></a>
                    </div>
                    <div className='p-20'>
                        <p className='text-sky-600 font-extrabold text-[28px] text-center font-sans'>Storage:</p>
                            <a className='text-white font-bold text-[20px] text-center font-sans'>Mongo DB & Mongoose <SiMongodb/></a>
                            <a className='text-white font-bold  text-[20px] text-center font-sans'>MySQL & Sequelize<SiSequelize/></a>
                    </div>
                    <div className='p-20'>
                        <p className='text-sky-600 font-extrabold text-[28px] text-center font-sans'>Distribution Platforms:</p>
                            <a className='text-white font-bold  text-[20px] text-center font-sans'>Github<SiGithub/></a>
                            <a className='text-white font-bold  text-[20px] text-center font-sans'>Heroku<SiHeroku/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills