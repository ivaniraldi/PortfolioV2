import React from 'react'
import { motion } from 'framer-motion'
import s from "../Bg.module.css"
import ParticlesHome from '../../particles/ParticlesHome'
import { Link } from 'react-router-dom'
import TypewriterComponent from 'typewriter-effect';
import ProgressBar from './ProgressBar.jsx'


export default function ThreeAnim() {
    const softSkills = ["Setting up projects", "Communication Skills", "Critical thinking Skills", "Patience", "Taking Feedback", "Flexibility"]
    const hardSkills = ["JavaScript", "React", "SQL", "Redux", "HTML5", "CSS", "TailWindCSS", "Bootstrap"]
    let handleDone = () => {
        console.log("Done!")
    }

    return (
        <div>
            <div style={{ position: "absolute", top: "3vh", left: "3vw" }}>
                <Link to="/home">
                    <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "0.3", borderRadius: "100%", boxShadow: " 5px 5px 5px black", position: "fixed", bottom: "6%" }} alt="" />
                </Link>
            </div>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    widht: "100vw",
                    height: "100vh",
                    clipPath: "polygon(0 0, 79% 0, 100% 40%, 100% 100%, 25% 100%, 0 29%)",
                    background: "white",
                    top: "0",
                    left: "0",
                    position: "absolute",
                    zIndex: "1",
                }}>
                ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
            </motion.div>
            <motion.img
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}

                transition={{ duration: 0.5, ease: "easeInOut" }}
                src="https://i.ibb.co/xqw8v3M/Open-Peeps-Sitting.png" alt="" style={{
                    zIndex: "5",
                    position: "absolute",
                    bottom: "1vh",
                    left: "22vh",
                    width: "20vw",
                }} />
            <motion.div
                initial={{ rotate: 10 }}
                whileHover={{ scale: 1.1 }}
                className=''
                style={{

                    border: "10px solid black",
                    width: "20vw",
                    height: "30vw",
                    position: "absolute",
                    bottom: "8vh",
                    right: "3vw",
                    transform: "rotate(10deg)",
                    zIndex: "3",
                }}
            >
                <div className='m-4' style={{ height: "10vh", fontSize: "1.2vw", }}>

                    <p style={{ fontWeight: "bold", marginBottom: "2vh", fontSize:"1.5vw", textAlign:"center" }}>I'm able to speak and understand:</p>
                    <div style={{border:"1px solid black"}}/>
                    <br />
                    <p style={{marginLeft:"2.5vw", fontWeight: "bold"}}>
                        Spanish (Native) <br />
                        <ProgressBar progress="9.9" completed={true} />
                        <br />
                        English (C2) <br />
                        <ProgressBar progress="8" />
                        <br />
                        Portuguese (A2) <br />
                        <ProgressBar progress="3" /></p>
                        <div className='flex justify-center mt-4'>
                        <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/4287/4287352.png" alt="" />
                        </div>

                </div>
            </motion.div>
            <motion.div
                initial={{ rotate: -2 }}
                whileHover={{ scale: 1.1 }}
                style={{
                    border: "10px solid black",
                    zIndex: "3",
                    position: "absolute",
                    top: "8vh",
                    left: "8vw",
                    height: "24vw",
                    width: "64vw",
                }}>
                <div className='m-4'>
                    <h1 style={{ fontSize: "2.2vw", fontWeight: "bold" }}>Develop Yourself.</h1>
                    <p style={{ fontWeight: "bold", fontSize: "1.2vw" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae laboriosam debitis, no.</p>
                    <div className='grid grid-cols-3 gap-4 mt-2'>
                        <p style={{ fontSize: "1.2vw" }}>Lorem ipsum

                            dolor sit amet consectetur adipisicing elit. Aperiam nesciunt cum saepe in natus fugit necessitatibus dolorum illum facere reprehenderit magni, aliquam, repudiandae as.</p>
                        <p style={{ fontSize: "1.2vw", marginLeft: "3vw", fontWeight: "" }} >                           JavaScript<br />
                            <ProgressBar progress="9.89" completed={true} />
                            TypeScript <br />
                            <ProgressBar progress="8" />
                            PHP <br />
                            <ProgressBar progress="6" />
                            C# <br />
                            <ProgressBar progress="7" />
                        </p>
                        <p style={{ fontSize: "1.2vw", fontWeight: "" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, ab consectetur ratione illo fuga porro in? Minus, ratione voluptates. Ipsum voluptates rem nobis sapiente asperiores tempora aut fuga eos adipisci!
                        </p>
                    </div>
                    <motion.span style={{ position: "absolute", bottom: "-11vw", left: "41vw", zIndex: "3" }}>
                        <span style={{ color: 'black', fontWeight: 'bold', fontFamily: "monospace", fontSize: "3.5vw" }}>
                            <TypewriterComponent
                                options={{
                                    strings: hardSkills,
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></span></motion.span>
                </div>
            </motion.div>
            <ParticlesHome></ParticlesHome>
        </div>

    )
}
