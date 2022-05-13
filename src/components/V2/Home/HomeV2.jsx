import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import s from './HomeV2.module.css'

export default function Home() {
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
                className="flex"
                style={{
                    width: '98%',
                    height: '96vh',
                    background: 'linear-gradient(0deg, rgba(26, 2, 35, 0.41), rgba(26, 2, 35, 0.41)), linear-gradient(0deg, rgba(1, 0, 2, 0.06), rgba(1, 0, 2, 0.06)), #663E86',
                    boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "6px",
                }}

            >
                {/* SIDE BAR */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-2/5 w-full flex justify-center items-center"
                    style={{

                        height: '96%',
                        background: "#141414",
                        borderRadius: "7px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        marginTop: "1%",
                        marginRight: "1%",
                        marginLeft: "1%",

                    }}

                >
                    <img src="https://i.ibb.co/sPfDfYg/hexagonos.png" alt="" className={`absolute ${s.imgFullScreen}`} style={{ width: "6vw", top: "6vh", left: "3vw", transform: "rotate(15deg)" }} />
                    <img src="https://i.ibb.co/sPfDfYg/hexagonos.png" alt="" className={`absolute ${s.imgFullScreen}`} style={{ width: "6vw", bottom: "6vh", left: "22vw", transform: "rotate(-155deg)" }} />
                    <img src="https://i.ibb.co/CnFkZY1/react.png" alt="" className={`absolute ${s.imgFullScreen}`} style={{ width: "6vw", top: "6vh", left: "14vw", opacity: "0.6" }} />
                    <img src="https://i.ibb.co/4MZyp5t/nodejs.png" alt="" className={`absolute ${s.imgFullScreen}`} style={{ width: "5vw", bottom: "6.8vh", left: "3vw", opacity: "0.4" }} />
                    <img src="https://i.ibb.co/dfp09PG/secuencia-de-comandos-de-java.png" alt="" className={`absolute ${s.imgFullScreen}`} style={{ width: "5vw", top: "6.5vh", left: "22vw", opacity: "0.6" }} />
                    <img src="https://i.ibb.co/cNNqZgB/postgre.png" alt="" className={`absolute ${s.imgFullScreen}`} style={{ width: "5vw", bottom: "6.8vh", left: "10vw", opacity: "0.4" }} />
                    {/* Phone media images */}
                    <img src="https://i.ibb.co/sPfDfYg/hexagonos.png" alt="" className={`absolute ${s.imgPhoneScreen}`} style={{ width: "20vw", top: "6vh", left: "9vw", transform: "rotate(15deg)" }} />
                    <img src="https://i.ibb.co/sPfDfYg/hexagonos.png" alt="" className={`absolute ${s.imgPhoneScreen}`} style={{ width: "20vw", bottom: "3vh", left: "70vw", transform: "rotate(-155deg)" }} />
                    <img src="https://i.ibb.co/CnFkZY1/react.png" alt="" className={`absolute ${s.imgPhoneScreen}`} style={{ width: "20vw", top: "6vh", left: "40vw", opacity: "0.6" }} />
                    <img src="https://i.ibb.co/4MZyp5t/nodejs.png" alt="" className={`absolute ${s.imgPhoneScreen}`} style={{ width: "19vw", bottom: "3.8vh", left: "40vw", opacity: "0.4" }} />
                    <img src="https://i.ibb.co/dfp09PG/secuencia-de-comandos-de-java.png" alt="" className={`absolute ${s.imgPhoneScreen}`} style={{ width: "19vw", top: "6.5vh", left: "70vw", opacity: "0.6" }} />
                    <img src="https://i.ibb.co/cNNqZgB/postgre.png" alt="" className={`absolute ${s.imgPhoneScreen}`} style={{ width: "19vw", bottom: "3.8vh", left: "10vw", opacity: "0.4" }} />


                    <div
                        className="flex justify-center items-center"
                        style={{
                            height: '60%',
                            width: '74%',
                            background: "#552c77",
                            borderRadius: "7px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            marginTop: "1%",
                            marginLeft: "1%",
                        }}
                    >
                        <div>
                            <Link to="/projects">
                                <motion.p
                                    initial={{ opacity: 0, x: -150 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className='sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-4xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                                >PROJECTS</motion.p>
                            </Link>
                            <Link to="/about">
                                <motion.p
                                    initial={{ opacity: 0, x: -150 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className='sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-4xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                                >ABOUT</motion.p>
                            </Link>
                            <a href="https://fv9-1.failiem.lv/down.php?cf&i=8nypjn46t&n=Curriculum+Vitae.pdf" target="_self">
                            <motion.p
                                initial={{ opacity: 0, x: -150 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className='sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-4xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                            >RESUME</motion.p>
                            </a>
                            <Link to="/contact">
                                <motion.p
                                    initial={{ opacity: 0, x: -150 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className='sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-4xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                                >CONTACT</motion.p>
                            </Link>
                            <Link to="/skills">
                                <motion.p
                                    initial={{ opacity: 0, x: -150 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, ease: "easeInOut" }}
                                    className='sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-4xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                                >SKILLS</motion.p>
                            </Link>

                        </div>
                    </div>
                </motion.div>
                <div className=' hidden sm:flex w-full text-right'>
                    <div className=' w-full m-10'>
                        <motion.p
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className='text-white text-2xl absolute' style={{ zIndex: "1", top: "16vh", right: "37vw", fontFamily: "Iceberg", fontSize: "", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
                        >hi! im </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className='text-white absolute' style={{ right: "10vw", top: "50px", zIndex: "1", fontFamily: "Iceberg", fontSize: "6vw", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
                        >Ivan.Iraldi</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className='text-white text-2xl absolute' style={{ top: "21vh", right: "22vw", zIndex: "1", fontFamily: "Iceberg", fontSize: "2vw", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
                        >a Full Stack Web Developer.</motion.p>


                        {/* <p className='text-white text-2xl'>I'm a self-taught developer with a passion for learning new technologies and building things that make a difference.</p>
                                 */}

                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                scale: [1, 0.5, 0.5, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                            }}
                            className={`absolute  ${s.imgFullScreen}`} style={{ top: "9vh", right: "9vw", zIndex: "0" }} src='https://i.ibb.co/sPfDfYg/hexagonos.png' alt=""  />


                        <motion.img
                            initial={{ opacity: 0,  y:1300, x:-500 }}
                            animate={{ opacity: 0.3, y: 0, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className={`absolute  ${s.imgFullScreen}`} style={{ bottom: "1vh", left: "26vw", opacity: "0.3", zIndex: "0", width: "300px" }} src='https://i.ibb.co/P59vSMz/afaf2ef7-c841-4985-8ab7-8c704f7517bb.png' alt="" />


                        <div className='h-24 w-1/4 fixed' style={{ bottom: "12vh", right: "10vw" }}>
                            {/* ON WORKING PROCCESS TO TRANSLATE */}
                            {/* <button className='w-full h-20 border-2 text-white' style={{borderRadius:"35px", fontSize:"4vh",fontFamily:"Iceberg"}}>English / Spanish</button> */}

                        </div>

                    </div>

                </div>
            </div>

        </motion.div>
    )
}