import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects from "./projects.json"
import PDetail from './PDetail.jsx'
import ParticlesHome from '../../particles/ParticlesHome.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


export default function ProjectsV2() {
    SwiperCore.use([Navigation, Autoplay, Pagination]);
    //modal 
    const [modalOpen, setModalOpen] = useState(false);

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
            <ParticlesHome></ParticlesHome>
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

                        {/* WINDOW VIEWPORT */}
                        <div className="items-center justify-center hidden sm:flex sm:flex-col" style={{
                            width: '100%',
                            height: '100%',
                            
                        }}>
                            <motion.h1
                                initial={{ opacity: 0, y: -200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}

                                style={{
                                    color: '#fff',
                                    fontSize: '2.5vw',
                                    fontWeight: 'bold',
                                    fontFamily: "Iceberg",
                                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                                    marginBottom: "3vh",
                                    
                                }}>My Projects:</motion.h1>
                            <motion.div
                                initial={{ opacity: 0, x: -400 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}

                                className='grid grid-cols-4 text-white gap-10'>

                                {projects.map((project, index) => (

                                    <motion.a
                                        onClick={() => {
                                            setModalOpen({
                                                [index]: true,
                                            });
                                        }}

                                        initial={{ opacity: 0, }}
                                        animate={{ opacity: 1, }}
                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                        whileHover={{ scale: 1.05 }}
                                        key={index}
                                        className={`flex flex-col items-center justify-center px-4`}
                                        style={{
                                            border: "5px double gray",
                                            width: "20vw",
                                            backdropFilter: "blur(5px)",
                                            borderRadius: "6px",
                                            cursor:"pointer",
                                            zIndex: "2"

                                        }}>
                                        {modalOpen[index] && <PDetail
                                            onClick={() => {
                                                setModalOpen({
                                                    [index]: false,
                                                });
                                            }}
                                            project={project}
                                            setOpenModal={setModalOpen}
                                        />}
                                        <div className={`${modalOpen[index] ? 'hidden' : ''} text-center`}>
                                            <h1 style={{
                                                fontSize: "2vw",
                                                fontWeight: "bold",
                                                paddingBottom: "0.5vw",
                                                fontFamily: "Iceberg",
                                            }}>{project.Project_name}</h1>
                                            <motion.img 
                                            whileHover={{scale: 0.95}} src={project.Project_Image} alt={project.Project_name} className="object-cover"
                                                style={{
                                                    width: "18vw",
                                                    height: "18vw",
                                                    borderRadius: "6px",
                                                    opacity: "0.8",
                                                }} />
                                            <div className="flex items-center justify-center py-4">
                                                <a href={project.Project_Link} target="_blank">
                                                    <motion.img src='https://i.ibb.co/g3DPSLH/vinculado.png' alt='' className="bg-black text-white font-bold rounded-full"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                                        whileHover={{ scale: 1.1 }}
                                                        style={{
                                                            width: "3vw",

                                                        }} />
                                                </a>
                                                <a href={project.Project_Code} target="_blank">
                                                    <motion.img src='https://i.ibb.co/yfyNxkW/github-1.png' alt='' className="bg-black text-white font-bold ml-5 rounded-full"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                                        whileHover={{ scale: 1.1 }}
                                                        style={{
                                                            width: "3vw",

                                                        }} />

                                                </a>
                                            </div>
                                        </div>
                                    </motion.a>

                                ))}

                            </motion.div>
                        </div>

                        {/* PHONE VIEWPORT */}
                        <div className="items-center justify-center flex sm:hidden" style={{
                            width: '100%',
                            color: '#fff',
                            height: '100%',
                        }}>
                            <Swiper
                                id='swiper'
                                style={{ height: "88vh", width: "100vw" }}
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                                pagination={{ clickable: true }}
                            >
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex flex-col items-center justify-center px-4" style={{
                                            width: "100%",
                                            height: "100%",
                                        }}>
                                            <h1 style={{
                                                fontSize: "8vw",
                                                fontWeight: "bold",

                                                paddingBottom: "0.5vw",
                                                fontFamily: "Iceberg",
                                            }}>{project.Project_name}</h1>
                                            <img src={project.Project_Image} alt={project.Project_name} className="object-cover"
                                                style={{
                                                    width: "60vw",
                                                    height: "60vw",
                                                    borderRadius: "6px",
                                                    opacity: "0.8",
                                                }} />
                                            <p style={
                                                {
                                                    fontSize: "5vw",
                                                    paddingBottom: "1.5vw",
                                                    paddingTop: "1.5vw",
                                                    textAlign: "center",
                                                    fontFamily: "Iceberg",
                                                }
                                            }>{project.Project_description}</p>
                                            <div className='grid grid-cols-2'>
                                                <div>

                                                    <p style={{
                                                        color: '#fff',
                                                        fontSize: '5vw',
                                                        textAlign: 'center',
                                                        fontWeight: 'bold',
                                                        fontFamily: "Iceberg",
                                                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                                                    }}>Date: <p style={{
                                                        color: '#fff',
                                                        fontSize: '6vw',
                                                        textAlign: "center",
                                                        fontFamily: "Iceberg",
                                                    }}>{project.Project_end_date}</p></p>
                                                </div>

                                                <div>
                                                    <h1 style={{
                                                        fontSize: "5vw",
                                                        fontWeight: "bold",
                                                        textAlign: "center",
                                                        fontFamily: "Iceberg",
                                                    }}>Users:</h1>
                                                    <p style={{
                                                        fontSize: "6vw",
                                                        fontFamily: "Iceberg",
                                                        textAlign: "center",
                                                        fontWeight: "bold",
                                                    }}>{project.Project_Users}</p>
                                                </div>

                                            </div>
                                            <h1 style={{
                                                fontSize: "5vw",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                                fontFamily: "Iceberg",
                                            }}>Tools:</h1>
                                            <p style={
                                                {
                                                    fontSize: "4vw",
                                                    fontFamily: "Iceberg",
                                                    textAlign: "center",
                                                }
                                            }>{project.Project_Languages.map(p => (<motion.button className='m-1'>{p + " "}</motion.button>))}</p>
                                            <div className="flex items-center justify-center py-4">
                                                <a href={project.Project_Link} target="_blank">
                                                    <motion.img src='https://i.ibb.co/g3DPSLH/vinculado.png' alt='' className="bg-black text-white font-bold rounded-full"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                                        whileHover={{ scale: 1.1 }}
                                                        style={{
                                                            width: "10vw",

                                                        }} />
                                                </a>
                                                <a href={project.Project_Code} target="_blank">
                                                    <motion.img src='https://i.ibb.co/yfyNxkW/github-1.png' alt='' className="bg-black text-white font-bold ml-5 rounded-full"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                                        whileHover={{ scale: 1.1 }}
                                                        style={{
                                                            width: "10vw",

                                                        }} />

                                                </a>
                                            </div>
                                            <p className="text-center" style={{
                                                fontSize: "3vw",
                                                color: "gray",
                                                opacity: "0.5",
                                                fontWeight: "bold",
                                                fontFamily: "Iceberg",
                                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                                            }}> {"<<< Slide >>>"}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>





                        <div className="md:hidden sm:hidden lg:hidden xl:grid 2xl:grid hidden">
                            <Link to="/home">
                                <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "0.3", borderRadius: "100%", boxShadow: " 5px 5px 5px black", position: "fixed", bottom: "6%" }} alt="" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </motion.div>
    )
}
