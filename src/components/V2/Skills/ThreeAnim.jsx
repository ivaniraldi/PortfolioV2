import React from 'react'
import { motion } from 'framer-motion'
import s from "../Bg.module.css"
import ParticlesHome from '../../particles/ParticlesHome'
import { Link } from 'react-router-dom'

export default function ThreeAnim() {
    const softSkills = [ "Setting up projects", "Communication Skills", "Critical thinking Skills", "Patience", "Taking Feedback", "Flexibility" ]
    const hardSkills = ["JavaScript", "React", "SQL", "Redux", "HTML5", "CSS", "TailWind", "Bootstrap", "Responsive Design", "User experience", ]
  return (
    <div style={{color:"white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <ParticlesHome></ParticlesHome>
        <h1  className='text-3xl sm:text-6xl' style={{
                marginTop: "2rem",
                fontFamily: "Iceberg",
                fontWeight: "bolder",
                color: "violet",
                textAlign: "center"
            }}>Soft Skills</h1>
        <div className='grid sm:grid-cols-3 grid-cols-2 gap-4'>
        {softSkills.map((softSkill, index) => {
            return <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1, color:"violet", }}
            whileTap={{ scale: 0.9, color:"violet", }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className='text-l sm:text-2xl' style={{
            fontWeight: "bold",
            color: "white",
            cursor:"pointer",
            textAlign: "center",
            fontFamily: "Iceberg",
            border: " 1px solid white",
            borderRadius: "25px",
            padding: "5px",

        }} key={index}>{softSkill}</motion.p>
    })}
            </div>

            <h1 style={{
                marginTop: "3vh",
                fontWeight: "bolder",
                fontFamily: "Iceberg",
                textAlign: "center",
                color: "violet"
            }} className={`text-3xl sm:text-6xl`} >Hard Skills</h1>
            <div className='grid grid-cols-2 sm:grid-cols-5 gap-4'>

        {hardSkills.map((hardSkill, index) => {
            return <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1, color:"violet", }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                whileTap={{ scale: 0.9, color:"violet", backgroundColor: "#fff" }}
                className='text-l sm:text-2xl' style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                cursor:"pointer",
                fontFamily: "Iceberg",
                border: " 1px solid white",
                borderRadius: "25px",
                padding: "5px",
            }} key={index}>{hardSkill}</motion.p>
        })}
            </div>
            <div className="md:hidden sm:hidden lg:hidden xl:grid 2xl:grid hidden">
                                <Link to="/home">
                                    <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "0.3", borderRadius: "100%", boxShadow: " 5px 5px 5px black", position: "fixed", bottom: "6%" }} alt=""  />
                                </Link>
                            </div>
    </div>
    
  )
}
