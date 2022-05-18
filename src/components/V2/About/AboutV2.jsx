import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AboutV2() {
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
                        <img src="https://i.ibb.co/sPfDfYg/hexagonos.png" alt=""
                            style={{
                                width: "10vh",
                                transform: "rotate(20deg)",
                                position: "absolute",
                                opacity: "0.7",
                            }}

                        />
                        <img style={{ position: "absolute", left: "55%", width: "40%" }} src="https://i.ibb.co/MV6VSr3/Group-4.png" alt=""  />

                        {/* TITLES */}
                        <motion.h1
                            initial={{ opacity: 0, y: -200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className='lg:text-6xl md:text-5xl text-4xl'
                            style={{
                                color: "white",
                                fontFamily: "Iceberg",
                                marginLeft: "4rem",
                                textShadow: "4px 4px 4px rgba(0, 0, 0)",
                                cursor:"default"
                            }}>

                            About me
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className='lg:text-4xl md:text-3xl text-2xl'
                            style={{
                                color: "#7D6F87",
                                fontFamily: "Iceberg",
                                marginLeft: "2.7rem",
                                position: "relative",
                                bottom: "1rem",
                                opacity: "0.7",
                                textShadow: "4px 4px 4px rgba(0, 0, 0)",
                                cursor:"default"

                            }}>
                            (a little bit)
                        </motion.p>


                        {/* IMAGE */}
                        <motion.div
                            initial={{ opacity: 1, y: -200 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="md:hidden sm:hidden lg:grid xl:grid 2xl:grid hidden"
                            style={{
                                position: "absolute",
                                bottom: "66%",
                                left: "65%",
                            }}
                        >
                            <div>
                                <span className='text-white'
                                    style={{
                                        fontFamily: "Iceberg",
                                        textShadow: "4px 4px 4px rgba(0, 0, 0)",
                                        cursor:"default"
                                    }}

                                >thats me!</span>
                                <img style={{
                                    width: "10vh",
                                    transform: "rotate(160deg)",
                                    display: "inline-block",
                                    position: "relative",
                                    bottom: "1rem",



                                }} src="https://i.ibb.co/gDzqCkv/pointer.png" alt="nf" />


                                <img style={{
                                    width: "25vh",
                                    borderRadius: "100%",
                                    display: "inline-block",
                                    marginLeft: "-1rem",
                                    marginTop: "4rem",
                                    boxShadow: "4px 4px 4px rgba(0, 0, 0)",

                                    border: "3px solid #3C98DB",
                                }} src="https://i.ibb.co/XSPKyHm/FOTO-CV.png" alt="nf" />
                            </div>

                        </motion.div>

                        {/* TEXT DESCRIPTION */}
                        <div
                            style={{
                                marginLeft: "1rem",
                                marginRight: "1rem",
                            }}
                        >
                            <text className="text-white sm:text-2xl lg:text-2xl xl:text-2xl md:text-base"
                                style={{
                                    fontFamily: "Iceberg",
                                    textShadow: "4px 4px 4px rgba(0, 0, 0)",
                                    cursor:"default"

                                }}

                            >
                                Hi! Im 
                                <motion.span
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.1, ease:"anticipate" }}                                
                                >
                                <span style={{ color: "#3C98DB" }}> Ivan</span>
                                </motion.span>
                                , a Full Stack Developer
                                <br />
                                oriented mostly to the 
                                <motion.span
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease:"anticipate" }}                                
                                >
                                <span style={{ color: "#BA65BC" }}> Front-end</span>
                                </motion.span>
                                .
                                <br />
                                Im 23 years old and im from Buenos Aires, Argentina.
                                <br />
                                I Actually work on 
                                <motion.span
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.4, ease:"anticipate" }}                                
                                >
                                <a href="http://coderhouse.com" target="_blank" rel="noopener noreferrer"><span style={{ color: "#938A3C" }}> CoderHouse </span></a>
                                </motion.span>
                                 as a 
                                 <motion.span
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.6, ease:"anticipate" }}                                
                                >
                                 <span style={{ color: "#8FA6F6" }}> Back-End </span>
                                </motion.span>
                                Programming Tutor, also im developing apps as a
                                <motion.span
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.7, ease:"anticipate" }}                                
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
                                <span style={{ color: "#D0D0D0" }}>¡Thanks for reading!</span>
                                <br />
                                I hope we can get to know each other better, in any case it was a pleasure to greet you, I leave you
                                <motion.span
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, ease:"anticipate" }}                                
                                >
                                <span style={{ color: "#C2FAB9" }}> my networks </span>
                                </motion.span>
                                for any questions you may have.
                            </text>
                            {/* SOCIAL MEDIA LINKS */}
                            <motion.div className='flex justify-center mt-4'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 0.98 }}
                                    transition={{ duration: 3, ease: "easeInOut" }}
                                >
                                
                                <a style={{ opacity: "30%" }} href="https://www.linkedin.com/in/ivan-iraldi-8413a3213/" target="_blank">
                                    <motion.img
                                    whileHover={{ scale: 1.2 }}
                                    src="https://i.ibb.co/72XX4QY/linkedin.png" alt="nf" className='sm:w-12 md:w-12 lg:w-12 xl:w-20 xl:mt-10 2xl:w-12 w-10' style={{ boxShadow: "5px 5px 5px black", borderRadius: "100%" }} />
                                </a>
                                <a style={{ opacity: "30%", marginLeft: "5%" }} href="https://www.github.com/ivaniraldi" target="_blank">
                                    <motion.img
                                    whileHover={{ scale: 1.2 }}
                                    src="https://i.ibb.co/yfyNxkW/github-1.png" alt="nf" className='sm:w-12 md:w-12 lg:w-12 xl:w-20 xl:mt-10 2xl:w-12 w-10' style={{ boxShadow: "5px 5px 5px black", borderRadius: "100%" }} />
                                </a>
                                <a style={{ opacity: "30%", marginLeft: "5%" }} href="https://www.facebook.com/profile.php?id=100071325024533" target="_blank">
                                    <motion.img
                                    whileHover={{ scale: 1.2 }}
                                    src="https://i.ibb.co/KW5zT9c/facebook.png" alt="nf" className='sm:w-12 md:w-12 lg:w-12 xl:w-20 xl:mt-10 2xl:w-12 w-10' style={{ boxShadow: "5px 5px 5px black", borderRadius: "100%" }} />
                                </a>
                                <a style={{ opacity: "30%", marginLeft: "5%" }} href="https://api.whatsapp.com/send/?phone=5491137574004&text=Hi%20Ivan!%20i%20recently%20viewed%20your%20portfolio...&app_absent=0" target="_blank">
                                    <motion.img
                                    whileHover={{ scale: 1.2 }}
                                    src="https://i.ibb.co/P1VGQMT/whatsapp-1.png" alt="nf" className='sm:w-12 md:w-12 lg:w-12 xl:w-20 xl:mt-10 2xl:w-12 w-10' style={{ boxShadow: "5px 5px 5px black", borderRadius: "100%" }} />
                                </a>
                            </motion.div>

                            <div className="md:hidden sm:hidden lg:grid xl:grid 2xl:grid hidden">
                                <img style={{ position: "absolute", right: "4%", bottom: "7%", width: "10vh", transform: "rotate(-40deg)", opacity: "0.7" }} src="https://i.ibb.co/sPfDfYg/hexagonos.png" alt=""  />
                            </div>
                            {/* MEDIA PHONES BACK BUTTON */}
                            <div className="md:grid sm:grid lg:grid xl:hidden 2xl:grid grid">
                                <Link to="/">
                                    <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "100%", borderRadius: "100%", boxShadow: " 5px 5px 5px black" }} alt=""  />
                                </Link>
                            </div>
                            {/* MEDIA Windows BACK BUTTON */}
                            <div className="md:hidden sm:hidden lg:hidden xl:grid 2xl:grid hidden">
                                <Link to="/home">
                                    <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "0.3", borderRadius: "100%", boxShadow: " 5px 5px 5px black", position: "fixed", bottom: "6%" }} alt=""  />
                                </Link>
                            </div>



                        </div>

                    </div>

                </div>
            </div>

        </motion.div>
    )
}
