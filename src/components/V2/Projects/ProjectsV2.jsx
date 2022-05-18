import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects from "./projects.json"


export default function ProjectsV2() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex items-center justify-center py-10 bg-none sm:py-16 md:py-24 lg:py-32"
            style={{
                width: '100%',
                height: '100vh',
            }}
        >
            <div
                className="flex items-center justify-center"
                style={{
                    width: '98%',
                    height: '96vh',
                    background: 'linear-gradient(0deg, rgba(26, 2, 35, 0.41), rgba(26, 2, 35, 0.41)), linear-gradient(0deg, rgba(1, 0, 2, 0.06), rgba(1, 0, 2, 0.06)), #663E86',
                    boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "6px",
                }}

            >
                <div
                    className=""
                    style={{
                        width: '98%',
                        height: '96%',
                        background: "#000",
                        borderRadius: "7px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <div
                        className="p-4"
                        >
                            <div className='grid grid-cols-4 text-white'>
                                {projects.map((project, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center">
                                        <h1>{project.Project_name}</h1>
                                        <img src={project.Project_Image} alt={project.Project_name} className="object-cover h-64 w-64" />
                                        <p>{project.Project_description}</p>
                                        <p>Users: {project.Project_Users}</p>
                                        <p>Languages: {project.Project_Languages}</p>
                                        <p>Date: {project.Project_end_date}</p>
                                        <p>Status: {project.Project_status}</p>
                                        <div className="flex flex-col items-center justify-center">
                                            <Link to={project.Project_Link}>
                                                <button className="bg-black text-white font-bold py-2 px-4 rounded-full">
                                                    View Project
                                                </button>
                                            </Link>
                                            <Link to={project.Project_Code}>
                                                <button className="bg-black text-white font-bold py-2 px-4 rounded-full">
                                                    View Code
                                                </button>
                                            </Link>
                                            </div>
                                    </div>

                                ))}

                            </div>
                            <div className="md:hidden sm:hidden lg:hidden xl:grid 2xl:grid hidden">
                                <Link to="/home">
                                    <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "0.3", borderRadius: "100%", boxShadow: " 5px 5px 5px black", position: "fixed", bottom: "6%" }} alt=""  />
                                </Link>
                            </div>
                    </div>

                </div>
            </div>

        </motion.div>
    )
}
