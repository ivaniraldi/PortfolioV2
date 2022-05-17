import React from 'react'
import { motion } from "framer-motion"
import s from './Bg.module.css'
import { Link } from 'react-router-dom'
import ParticlesBackground from '../particles/ParticleBackground.jsx'


export default function Bg() {
    return (
        <Link to="/home">
            <div
                style={{
                    height: '100vh',
                    width: '100%',
                    position: 'absolute',
                    justifyContent: 'center',
                    display: 'flex',
                    background: "black",
                }}
            >
                <ParticlesBackground></ParticlesBackground>
                <Link to="/home">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: +200 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        onHoverStart={() => {
                            console.log('hover start')

                        }
                        }
                        className={s.glitch}
                    >Ivan.Iraldi</motion.h1>


                    <motion.h4
                        initial={{ opacity: 0, x: -500, y: 320 }}
                        animate={{ opacity: 0.8, x: +48 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            height: '100px',
                            color: 'white',
                            marginLeft: "20px",
                            cursor: "default",
                        }}
                    >Full Stack Developer.</motion.h4>
                </Link>
                <p>

                <motion.h2
                    initial={{ opacity: 0, x: -50, y: 390 }}
                    animate={{ opacity: 0.15, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        height: '100px',
                        color: 'white',
                        cursor: "default",
                    }}
                >
                    (tap to enter)
                </motion.h2>
                </p>

            </div>
        </Link>
    )
}
