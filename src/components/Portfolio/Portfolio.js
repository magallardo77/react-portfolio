import React from 'react'
import api from '../images/api.png'
import booksearchengine from '../images/booksearchengine.png'
import ecommerce from '../images/ecommerce.png'
import forecast from '../images/forecast.png'
import notetaker from '../images/notetaker.png'
import PasswordGenerator from '../images/PasswordGenerator.png'
import rankedify from '../images/rankedify.png'
import Readmegenerator from '../images/Readmegenerator.png'
import teamdisplaygenerator from '../images/teamdisplaygenerator.png'
import wingman from '../images/wingman.png'
import Workday from '../images/Workday.png'
import only from '../images/only.png'

const Portfolio = () => {
    return (
        <div className='skillsContainer flex justify-center align-items mx-auto'>
            <div className='imgContainer grid grid-cols-3'>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href=''>
                        <img className="rounded-t-lg" src={only} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Group Project 3: OnlyDevs</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">This webpage is a donation/funding site geared toward funding developers applications.</p>
                        <a href="https://the-only-devs.herokuapp.com/#/" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={rankedify} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Group Project 2: Rankedify</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">Blog site where users can share their Top 5 favorite Video Games.</p>
                        <a href="https://bmaggiano-rankedify.herokuapp.com/" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={wingman} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Group Project 1: WingMan</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">This webpage is to be able to have a random movie, food/drink selected to create the perfect date and eliminate any choice anxiety.</p>
                        <a href="https://dustinm5oly.github.io/WingMan/" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={booksearchengine} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Book Search Engine</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">A book search engine that allows users to search for any book in GoogleBooks DB and save/delete books as they see fit.</p>
                        <a href="https://miguel-book-search-engine.herokuapp.com/" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={api} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Social Network API</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">
                        This application is a social network API created using express.js and mongoose. Users can view other users, create a user, update a user, delete a user, add a friend, remove a friend, create a thought(post), view a single/all thoughts, update a thought, delete a thought, add a reaction and delete a reaction using insomnia.</p>
                        <a href="https://github.com/magallardo77/Social-Network-API"  target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={ecommerce} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">E-Commerce Back-End</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">A back-end e-commerce application is created using Sequelize, MySQL, and Express.js. This back-end application allows users to interact and manage an e-commerce businesses database.</p>
                        <a href="https://github.com/magallardo77/e-commerce-back-end" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={notetaker} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Notetaker</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">This challenge was created using Express.js and deployed to Heroku and Github. The web application allows user to create notes and save them where they are updated into a db.json file.</p>
                        <a href="https://mg-notetaker.herokuapp.com/" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={teamdisplaygenerator} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Team Display Generator</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">A backend team display generator that allows users to view team members.</p>
                        <a href="https://github.com/magallardo77/team-display-generator" target='_blank'className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={Readmegenerator} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">ReadMe Generator</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="https://github.com/magallardo77/Readme-generator" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={forecast} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Weather Generator</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">A Weather Generator that allows users to get a 5 day forecast of any city by searching for that city in the search bar.</p>
                        <a href="https://magallardo77.github.io/Weather-Generator/" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={Workday} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Daily Schedule</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">The daily scheduler was created to for users who are interested in scheduling their daily 9-5 work schedules and the site is able to save their browsing data.</p>
                        <a href="https://magallardo77.github.io/Daily-Scheduler/" target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
                <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
                    <a href="#">
                        <img className="rounded-t-lg" src={PasswordGenerator} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Password Generator</h5>
                        </a>
                        <p className="mb-3 font-normal text-black ">This password generator was created to test students new skills using JavaScript and Web APIs. Through the completion of this assignment students learned how to effectively use real world functions, for loops, etc.</p>
                        <a href="https://magallardo77.github.io/Password-Generator/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            Read more

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio