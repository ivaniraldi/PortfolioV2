import { motion } from 'framer-motion'
import ParticlesBackground from '../../particles/ParticleBackground'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'



export default function AboutV2() {


    return (
        <div>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    widht: "100vw",
                    height: "100vh",
                    clipPath: "polygon(14% 0, 100% 0, 100% 33%, 87% 100%, 0 100%, 0 45%)",
                    background: "white",
                    top: "0",
                    left: "0",
                    position: "absolute",
                    zIndex: "1",
                }}>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
            </motion.div>
            <div className='hidden sm:contents'>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute"
                style={{
                    zIndex: "3",
                    top: "3vh",
                    left: "6vw",
                    width: "90vw",
                    height: "90vh",
                    fontFamily: "Iceberg",
                }}>
                <h1 style={{
                    fontSize: "3vw",
                    marginLeft: "12vw",
                }}
                >Some things about me:</h1>
                <text className="sm:text-2xl lg:text-2xl xl:text-2xl md:text-base"
                    style={{
                        fontFamily: "Iceberg",
                        cursor: "default",
                        marginLeft: "8vw",

                    }}
                >
                    Hi! Im
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span style={{ color: "#3C98DB" }}> Ivan</span>
                    </motion.span>
                    , a Full Stack Developer
                    <br />
                    <span style={{ marginLeft: "6vw", }}>oriented more to</span>
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span style={{ color: "#BA65BC" }}> Front-end </span>
                    </motion.span>
                    development.
                    <br />
                    <span style={{ marginLeft: "4vw", }}>

                        Im 23 years old and im from Buenos Aires, Argentina.
                    </span>
                    <br />
                    <span style={{ marginLeft: "2vw", }}>
                        I currently work at
                    </span>
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href="http://coderhouse.com" target="_blank" rel="noopener noreferrer"><span style={{ color: "#938A3C" }}> CoderHouse </span></a>
                    </motion.span>
                    as a
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span style={{ color: "#8FA6F6" }}> Back-End </span>
                    </motion.span>
                    Programming Tutor, and I am also developing <br /> applications as a
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span style={{ color: "#FF6B6B" }}> f</span>
                        <span style={{ color: "#FF6B6B" }}>r</span>
                        <span style={{ color: "#DA9E43" }}>e</span>
                        <span style={{ color: "#DA9E43" }}>e</span>
                        <span style={{ color: "#D9CE72" }}>l</span>
                        <span style={{ color: "#AEE39B" }}>a</span>
                        <span style={{ color: "#89E1D7" }}>n</span>
                        <span style={{ color: "#A0B2F3" }}>c</span>
                        <span style={{ color: "#CE9EE4" }}>e</span>
                        <span style={{ color: "#D77FA9" }}>r</span>
                    </motion.span>
                    .
                    <br />
                    <span style={{ color: "black", fontSize: "3vw", marginLeft: "30vw" }}>¡Thanks for reading!</span>
                    <br />
                    <br />
                    <br />
                    <span style={{ marginLeft: "10vw" }}>
                        I wish that we get to know each other better, in any case your visit was a pleasure,<br />
                    </span>
                    <span style={{ marginLeft: "20vw" }}>
                        I leave you
                    </span>
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: "anticipate" }}
                    ><span style={{ color: "#023a00" }}> my networks </span>
                    </motion.span>
                    for any questions you may have.
                </text>
                <div style={{
                    width: "40vw",
                    height: "9vw",
                    marginTop: "10vh",
                    marginLeft: "22vw",
                    display: "flex"
                }}>
                    <motion.a href="https://www.linkedin.com/in/ivan-iraldi-8413a3213/"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}>
                        <img
                            className='w-20 mr-16' src="https://i.ibb.co/YZ7jhVt/174857.png" alt="174857" border="0" />
                    </motion.a>
                    <motion.a href="https://api.whatsapp.com/send/?phone=5491137574004&text=Hi%20Ivan!%20i%20recently%20viewed%20your%20portfolio...&app_absent=0" initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}>
                        <img className='w-20 mr-16' src="https://i.ibb.co/f4qZPxC/3536445.png" alt="3536445" border="0" />
                    </motion.a>
                    <motion.a href="https://www.facebook.com/profile.php?id=100071325024533" initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}>
                        <img className='w-20 mr-16' src="https://i.ibb.co/Kr74csX/174848.png" alt="174848" border="0" />
                    </motion.a>
                    <motion.a href="https://www.github.com/ivaniraldi"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}>
                        <img className='w-20 mr-16' src="https://i.ibb.co/1JMzwfM/signo-de-github.png" alt="signo-de-github" border="0" />
                    </motion.a>
                </div>
            </motion.div>
            </div>
            <motion.img
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className='w-1/4' style={{ position: "absolute", bottom:"0", left: "-7.5vw", zIndex: "3" }} src="https://i.ibb.co/nn5PBSg/Open-Peeps-Bust.png" alt="" />
            <div className='hidden sm:contents'>
            <motion.img
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0, scaleX: -1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className='w-1/4' style={{ position: "absolute", bottom: "42vh", right: "0", transform: "scaleX(-1)", zIndex: "3" }} src="https://i.ibb.co/6mvDtTK/Open-Peeps-Bust-1.png" alt="" />
            </div>
            <ParticlesBackground />




















            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className='absolute sm:hidden'
                style={{
                    zIndex: "3",
                    top: "3vh",
                    left: "6vw",
                    width: "90vw",
                    height: "90vh",
                    fontFamily: "Iceberg",
                }}>
                <h1 style={{
                    fontSize: "8vw",
                    marginLeft: "12vw",
                }}
                >Some things about me:</h1>
                <text className=""
                    style={{
                        fontFamily: "Iceberg",
                        cursor: "default",
                        marginLeft: "8vw",
                        fontSize: "5vw",

                    }}
                >
                    Hi! Im
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span style={{ color: "#3C98DB" }}> Ivan</span>
                    </motion.span>
                    , a Full Stack Developer
                    <br />
                    <span style={{ marginLeft: "6vw", }}>oriented more to</span>
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span style={{ color: "#BA65BC" }}> Front-end </span>
                    </motion.span>
                    <span className='ml-4'>

                    development.
                    </span>
                    <br />
                    <span style={{ marginLeft: "4vw", }}>

                        Im 23 years old and im from Buenos Aires, <br />
                        <span style={{ marginLeft: "3vw", }}>
                            Argentina.
                            </span>
                    </span>
                    <br />
                    <span style={{ marginLeft: "2vw", }}>
                        I currently work at
                    </span>
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href="http://coderhouse.com" target="_blank" rel="noopener noreferrer"><span style={{ color: "#938A3C" }}> CoderHouse </span></a>
                    </motion.span>
                    as a <br />
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span style={{ color: "#8FA6F6" }}> Back-End </span>
                    </motion.span>
                    Programming Tutor, and I am also developing  applications as a
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span style={{ color: "#FF6B6B" }}> f</span>
                        <span style={{ color: "#FF6B6B" }}>r</span>
                        <span style={{ color: "#DA9E43" }}>e</span>
                        <span style={{ color: "#DA9E43" }}>e</span>
                        <span style={{ color: "#D9CE72" }}>l</span>
                        <span style={{ color: "#AEE39B" }}>a</span>
                        <span style={{ color: "#89E1D7" }}>n</span>
                        <span style={{ color: "#A0B2F3" }}>c</span>
                        <span style={{ color: "#CE9EE4" }}>e</span>
                        <span style={{ color: "#D77FA9" }}>r</span>
                    </motion.span>
                    .
                    <br />
                    <span style={{ color: "black", fontSize: "6vw", marginLeft: "19vw" }}>¡Thanks for reading!</span>
                    <br />
                    <br />
                    <div>
                    <span >
                        I wish that we get to know each other better,<br /> in any case your visit was a pleasure,<br />
                    </span>
                    <span style={{ marginLeft: "vw" }}>
                        I leave you
                    </span>
                    <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: "anticipate" }}
                    ><span style={{ color: "#023a00" }}> my networks </span>
                    </motion.span>
                    for any <br /> questions you may have.
                    </div>
                </text>
                <div style={{
                    width: "40vw",
                    height: "9vw",
                    position: "absolute",
                    bottom: "4vh",
                    left: "18vw",
                    display: "flex"
                }}>
                    <motion.a href="https://www.linkedin.com/in/ivan-iraldi-8413a3213/"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}>
                        <img
                            className='w-10 mr-12' src="https://i.ibb.co/YZ7jhVt/174857.png" alt="174857" border="0" />
                    </motion.a>
                    <motion.a href="https://api.whatsapp.com/send/?phone=5491137574004&text=Hi%20Ivan!%20i%20recently%20viewed%20your%20portfolio...&app_absent=0" initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}>
                        <img className='w-10 mr-12' src="https://i.ibb.co/f4qZPxC/3536445.png" alt="3536445" border="0" />
                    </motion.a>
                    <motion.a href="https://www.facebook.com/profile.php?id=100071325024533" initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}>
                        <img className='w-10 mr-12' src="https://i.ibb.co/Kr74csX/174848.png" alt="174848" border="0" />
                    </motion.a>
                    <motion.a href="https://www.github.com/ivaniraldi"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}>
                        <img className='w-10 mr-12' src="https://i.ibb.co/1JMzwfM/signo-de-github.png" alt="signo-de-github" border="0" />
                    </motion.a>
                </div>
            </motion.div>
            <div className='hidden sm:contents'>
                <Link to="/home">
                    <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "0.3", borderRadius: "100%", boxShadow: " 5px 5px 5px black", marginTop:"1vw", marginLeft:"1vw" }} alt="" />
                </Link>
            </div>
        </div>

    )
}
