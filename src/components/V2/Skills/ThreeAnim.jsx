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

            <div className='hidden sm:contents'>
            <div className='' style={{ position: "absolute", top: "3vh", left: "3vw" }}>
                <Link to="/home">
                    <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "0.3", borderRadius: "100%", boxShadow: " 5px 5px 5px black", position: "fixed", bottom: "6%" }} alt="" />
                </Link>
            </div>
            </div>
            <div className='hidden sm:contents'>
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
                <motion.span style={{ position: "absolute", bottom: "11vw", left: "41vw", zIndex: "4" }}
                    whileHover={{ scale: 1.1 }}
                >

                    <span style={{ color: 'black', fontWeight: 'bold', fontFamily: "monospace", fontSize: "3.5vw" }}>
                        <TypewriterComponent
                            options={{
                                strings: hardSkills,
                                autoStart: true,
                                loop: true,
                            }}
                        /></span></motion.span>
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
                    height: "55vh",
                    position: "absolute",
                    bottom: "8vh",
                    right: "3vw",
                    transform: "rotate(10deg)",
                    zIndex: "3",
                }}
            >
                <div className='m-4' style={{ height: "10vh", fontSize: "1.2vw", }}>

                    <p style={{ fontWeight: "bold", marginBottom: "2vh", fontSize: "1.5vw", textAlign: "center" }}>I'm able to speak and understand:</p>
                    <div style={{ border: "1px solid black" }} />
                    <br />
                    <p style={{ marginLeft: "2.5vw", fontWeight: "bold" }}>
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            Spanish (Native) <br />
                            <ProgressBar progress="9.9" completed={true} />
                        </motion.div>
                        <br />
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            English (C2) <br />
                            <ProgressBar progress="8" />
                        </motion.div>
                        <br />
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            Portuguese (A2) <br />
                            <ProgressBar progress="3" />
                        </motion.div>
                    </p>
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
                    height: "50vh",
                    width: "64vw",
                }}>
                <div className='m-4'>
                    <h1 style={{ fontSize: "2.2vw", fontWeight: "bold" }}>“So many books, so little time.”
― Frank Zappa.</h1>
                    <p style={{ fontWeight: "bold", fontSize: "1.2vw" }}>“For primitive beings like us, life seems to have only one single purpose: gaining time.”</p>
                    <div className='grid grid-cols-3 gap-4 mt-2'>
                        <p style={{ fontSize: "1.2vw" }}>
                            <ul>
                                <li className='mt-1'><img className='w-6 inline' src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961545.png?token=exp=1655581297~hmac=ab3120affc24746aae6dcf99ffb0f66e" alt="" /> •Strong creative ability.</li>
                                <li className='mt-1'><img className='w-6 inline' src="https://cdn-icons-png.flaticon.com/512/1/1755.png" alt="" /> •Attention to detail.</li>
                                <li className='mt-1'><img className='w-6 inline' src="https://cdn-icons-png.flaticon.com/512/1078/1078011.png" alt="" /> •Strong communication skills.</li>
                                <li className='mt-1'><img className='w-6 inline' src="https://cdn-icons.flaticon.com/png/512/3049/premium/3049117.png?token=exp=1655581361~hmac=b5b39209307656d531ebb0add49bfe8b" alt="" /> •Good problem-solving skills.</li>
                            </ul>
                        </p>
                        <p style={{ fontSize: "1.2vw", marginLeft: "3vw", fontWeight: "" }} >
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                JavaScript<br />
                                <ProgressBar progress="9.89" completed={true} />
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                TypeScript<br />
                                <ProgressBar progress="8" completed={true} />
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                PHP<br />
                                <ProgressBar progress="6" completed={true} />
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                C#<br />
                                <ProgressBar progress="7" completed={true} />
                            </motion.div>
                        </p>
                        <p style={{ fontSize: "1.2vw", fontWeight: "" }}>
                            <ul>
                                <li>•Optimize <span className='font-bold'>graphics</span> and page speed for enhanced user experience.</li>
                                <li>•Check for <span className='font-bold'>brand consistency</span> across the website.</li>
                                <li>•Perform timely functional <span className='font-bold'>testing</span> of core website elements. </li>
                                <li>•Develop features to make websites <span className='font-bold'>mobile-friendly</span>.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div>


                </div>
            </motion.div>
            </div>




                {/* MOBILE VERSION */}






                <div className='contents sm:hidden'>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    widht: "100vw",
                    height: "100vh",
                    clipPath: "polygon(0 0, 79% 0, 100% 40%, 100% 100%, 25% 100%, 0 49%)",
                    background: "white",
                    top: "0",
                    left: "0",
                    position: "absolute",
                    zIndex: "1",
                }}>
                ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                <motion.span style={{ position: "absolute", bottom: "32vh", left: "10vw", zIndex: "4" }}
                    whileHover={{ scale: 1.1 }}
                >

                    <span style={{ color: 'black', fontWeight: 'bold', fontFamily: "monospace", fontSize: "6vw" }}>
                        <TypewriterComponent
                            options={{
                                strings: hardSkills,
                                autoStart: true,
                                loop: true,
                            }}
                        /></span></motion.span>
            </motion.div>
{/*             
            <motion.img
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}

                transition={{ duration: 0.5, ease: "easeInOut" }}
                src="https://i.ibb.co/xqw8v3M/Open-Peeps-Sitting.png" alt="" style={{
                    zIndex: "5",
                    position: "absolute",
                    bottom: "10vh",
                    left: "5vw",
                    width: "20vw",
                }} /> */}

            <motion.div
                initial={{ rotate: 4 }}
                whileHover={{ scale: 1.1 }}
                className=''
                style={{

                    border: "1px solid black",
                    width: "45vw",
                    height: "68vw",
                    position: "absolute",
                    bottom: "4vw",
                    right: "2vh",
                    zIndex: "3",
                }}
            >
                <div className='m-1' style={{ height: "10vh", fontSize: "3vw",  }}>

                    <p style={{ fontWeight: "bold",  fontSize: "3vw", textAlign: "center" }}>I'm able to speak and understand:</p>
                    <div style={{ border: "1px solid black" }} />
                    <br />
                    <p style={{ marginLeft: "2.5vw", fontWeight: "bold" }}>
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            Spanish (Native) <br />
                            <ProgressBar progress="33.6" completed={true} mobile={34} />
                        </motion.div>
                        <br />
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            English (C2) <br />
                            <ProgressBar progress="28" mobile={34} />
                        </motion.div>
                        <br />
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            Portuguese (A2) <br />
                            <ProgressBar progress="15" mobile={34} />
                        </motion.div>
                    </p>
                    <div className='flex justify-center mt-4'>
                        <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/4287/4287352.png" alt="" />
                    </div>

                </div>
            </motion.div>
            <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ scale: 1.1 }}
                style={{
                    zIndex: "3",
                    position: "absolute",
                    top: "1vh",
                    left: "1vw",
                    height: "95vw",
                    width: "85vw",
                }}>
                <div className='m-4'>
                    <h1 style={{ fontSize: "5vw", fontWeight: "bold" }}>“So many books, so little time.” <br />
― Frank Zappa.</h1>
                    
                    <div className='grid grid-cols-2 gap-2'>
                        <p style={{ fontSize: "3.1vw" }}>
                            <ul>
                                <li className='mt-1'><img className='w-6 inline' src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961545.png?token=exp=1655581297~hmac=ab3120affc24746aae6dcf99ffb0f66e" alt=" 1" /> •Strong creative ability.</li>
                                <li className='mt-1'><img className='w-6 inline' src="https://cdn-icons-png.flaticon.com/512/1/1755.png" alt=" 2" /> •Attention to detail.</li>
                                <li className='mt-1'><img className='w-6 inline' src="https://cdn-icons-png.flaticon.com/512/1078/1078011.png" alt=" 3" /> •Strong communication skills.</li>
                                <li className='mt-1'><img className='w-6 inline' src="https://cdn-icons.flaticon.com/png/512/3049/premium/3049117.png?token=exp=1655581361~hmac=b5b39209307656d531ebb0add49bfe8b" alt=" 4" /> •Good problem-solving skills.</li>
                            </ul>
                        </p>
                        <p style={{ fontSize: "5vw", marginLeft: "3vw", fontWeight: "" }} >
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                JavaScript<br />
                                <ProgressBar progress="27.3" completed={true} mobile={28} />
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                TypeScript<br />
                                <ProgressBar progress="20" mobile={28} />
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                PHP<br />
                                <ProgressBar progress="10" mobile={28} />
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 0 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                C#<br />
                                <ProgressBar progress="15" mobile={28} />
                            </motion.div>
                        </p>
                    </div>
                        <p style={{ fontSize: "3.2vw", marginTop:"4vh" }}>
                            <ul>
                                <li>•Optimize <span className='font-bold'>graphics</span> and page speed for enhanced user experience.</li>
                                <li>•Check for <span className='font-bold'>brand consistency</span> across the website.</li>
                                <li>•Perform timely functional <span className='font-bold'>testing</span> of core website elements. </li>
                                <li>•Develop features to make websites <span className='font-bold'>mobile-friendly</span>.</li>
                            </ul>
                        </p>
                </div>
                <div>


                </div>
                </motion.div>
                </div>
            <ParticlesHome></ParticlesHome>
        </div>

    )
}
