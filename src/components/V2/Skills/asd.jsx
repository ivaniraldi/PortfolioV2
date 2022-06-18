import { motion } from 'framer-motion'
import ParticlesBackground from '../../particles/ParticleBackground'
import React, { useRef, useState } from 'react'



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
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                
                style={{
                    zIndex: "3",
                    position: "absolute",
                    top: "3vh",
                    left: "1vw",
                    width: "90vw",
                    height: "90vh",
                    border: "1px solid black",

                }}>
                    <h1></h1>

                
            </motion.div>

            <ParticlesBackground />
        </div>

    )
}
