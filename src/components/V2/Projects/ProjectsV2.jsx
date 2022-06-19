import ParticlesBackground from '../../particles/ParticleBackground'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects from "./projects.json"
import PDetail from './PDetail.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
import TypewriterComponent from 'typewriter-effect'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


export default function ProjectsV2() {
    SwiperCore.use([Navigation, Autoplay, Pagination]);
    //modal 
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    widht: "100vw",
                    height: "100vh",
                    clipPath: "polygon(0 0, 90% 0, 100% 76%, 100% 100%, 10% 100%, 0 19%)",
                    background: "white",
                    top: "0",
                    left: "0",
                    position: "absolute",
                    zIndex: "1",
                }}>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                <h1
                    className='text-center text-4xl hidden sm:contents'
                    style={{
                        fontFamily:"Iceberg",
                    }}ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                ><TypewriterComponent
                        options={{
                            strings: ["These are my projects:"],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 9999999999999,
                        }}
                    /></h1>
                    </motion.div>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}

                style={{
                    zIndex: "3",
                    position: "absolute",
                    top: "3vh",
                    left: "4vw",
                    width: "91.5vw",
                    height: "89vh",

                }}>

                <div className="items-center justify-center hidden sm:flex sm:flex-col" style={{
                    width: '100%',
                    height: '100%',

                }}>
                    <div>

                    </div>
                    <motion.div
                        className='grid grid-cols-4 gap-4 ml-6'>

                        {projects.map((project, index) => (

                            <motion.div
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
                                className={`flex flex-col items-center mt-16 justify-center px-4`}
                                style={{
                                    border: "5px solid black",
                                    width: "20vw",
                                    backdropFilter: "blur(5px)",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    zIndex: "8"

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
                                        src={project.Project_Image} alt={project.Project_name} className="object-cover"
                                        style={{
                                            width: "18vw",
                                            height: "18vw",
                                            border: "5px solid black",
                                            borderRadius: "6px",
                                            opacity: "1",
                                        }} />
                                    <div className="flex items-center justify-center py-4">
                                        <a href={project.Project_Link} target="_blank">
                                            <motion.img src='https://i.ibb.co/g3DPSLH/vinculado.png' alt='' className="bg-black font-bold rounded-full"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.1, ease: "easeInOut" }}
                                                whileHover={{ scale: 1.1 }}
                                                style={{
                                                    width: "3vw",
                                                    border: "3px solid black"

                                                }} />
                                        </a>
                                        <a href={project.Project_Code} target="_blank">
                                            <motion.img src='https://i.ibb.co/yfyNxkW/github-1.png' alt='' className="bg-black font-bold ml-5 rounded-full"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.1, ease: "easeInOut" }}
                                                whileHover={{ scale: 1.1 }}
                                                style={{
                                                    width: "3vw",
                                                    border: "3px solid black"

                                                }} />

                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                        ))}

                    </motion.div>
                </div>
                <div className="items-center justify-center flex sm:hidden" style={{
                            width: '100%',
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
                                                    opacity: "1",
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
                                                <div className='' style={{position:"absolute", left:"38vw"}}>
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


            </motion.div>
            <div style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                zIndex: "4",
                width: "15vw",
                transform: "scaleX(-1)",
            }}>
                <img src="https://i.ibb.co/bspgmhf/Open-Peeps-Avatar-and-Backdrop.png" alt="" />
            </div>
            <div className="md:hidden sm:hidden lg:hidden xl:grid 2xl:grid hidden">
                <Link to="/home">
                    <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "0.3", borderRadius: "100%", boxShadow: " 5px 5px 5px black", position: "fixed", bottom: "6%", left: "2%" }} alt="" />
                </Link>
            </div>
            <ParticlesBackground />
        </div>

    )
}
