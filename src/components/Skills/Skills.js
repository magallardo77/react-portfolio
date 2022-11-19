import React from 'react';
import ReactPNG from '../images/react.png';
import JS from '../images/JS.png';
import Mongo from '../images/mongodb.png';
import CSS from '../images/css.png';
import Node from '../images/node.png';
import Express from '../images/express.png';



const Skills = () => {
    return (
        <div className='skillsContainer flex justify-center align-items mx-auto'>
            <div>
                <div className='text-[35px]  text-blue-300 p-5 flex justify-center'>
                    <h1>Skills</h1>
                </div>
                <div className='imgContainer grid grid-cols-3'>
                    <div>
                        <img className='rIMG mx-auto p-10 h-50 w-50 flex justify-center align-items' src={ReactPNG} alt='' />
                        <p className='text-white text-[20px] text-center font-mono'>React</p>
                    </div>
                    <div>
                        <img className='rIMG mx-auto p-10 h-50 w-50 flex justify-center align-items' src={JS} alt='' />
                        <p className='text-white text-[20px] text-center font-mono'>JavaScript</p>
                    </div>
                    <div>
                        <img className='rIMG mx-auto p-10 h-50 w-50 flex justify-center align-items' src={Mongo} alt='' />
                        <p className='text-white text-[20px] text-center font-mono'>Mongo/Mongoose DB & MySQl/Sequelize</p>
                    </div>
                    <div>
                        <img className='rIMG mx-auto p-10 h-50 w-50 flex justify-center align-items' src={Node} alt='' />
                        <p className='text-white text-[20px] text-center font-mono'>Node</p>
                    </div>
                    <div>
                        <img className='rIMG mx-auto p-10 h-50 w-50 flex justify-center align-items' src={Express} alt='' />
                        <p className='text-white text-[20px] text-center font-mono'>Express</p>
                    </div>
                    <div>
                        <img className='rIMG mx-auto p-10 h-50 w-50 flex justify-center align-items' src={CSS} alt='' />
                        <p className='text-white text-[20px] text-center font-mono'>CSS & CSS Frameworks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills