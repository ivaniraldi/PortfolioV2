import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
import s from './HomeV2.module.css'
import ParticlesHome from '../../particles/ParticlesHome.jsx'
import TypewriterComponent from 'typewriter-effect'

export default function Home() {
    function handleDownload() {
        let timerInterval
        Swal.fire({
            title: 'Downloading Resume!',
            backdrop: true,
            background: "#000",
            color: "#fff",
            html: 'Done in <b></b> milliseconds.',
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }
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
                className="hidden sm:flex"
                style={{
                    width: '98%',
                    height: '96vh',
                    background: '#000',
                    boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "6px",
                    // border: "1px solid #fff",
                }}

            >
                {/* SIDE BAR */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-2/5 w-full flex justify-center items-center"
                    style={{
                        zIndex: "1",

                        height: '96%',
                        background: "none",
                        borderRadius: "3px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        marginTop: "1%",
                        marginRight: "1%",
                        marginLeft: "1%",

                    }}

                >
                    <div className='border' style={{
                        widht: "100vh",
                        height: "200vh",
                        padding: "65vh",
                        marginRight: "12%",
                        position: "fixed",
                        background: "white",
                        transform: "rotate(-17deg)",
                        zIndex: "4",
                    }} />
                    <div className='border' style={{
                        widht: "100vh",
                        height: "200vh",
                        padding: "64.6vh",
                        marginRight: "12%",
                        position: "fixed",
                        background: "black",
                        transform: "rotate(-15deg)",
                        zIndex: "4",
                    }} />
                    <div
                        className="flex justify-center items-center"
                        style={{
                            height: '60%',
                            width: '74%',
                            background: "none",
                            borderRadius: "3px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            marginTop: "1%",
                            marginLeft: "1%",
                        }}
                    >

                        <img src="https://i.ibb.co/VjjNRfW/Sin-t-tulo-2.png" alt="" style={{
                            width: "35vh",
                            position: "absolute",
                            top: "5vh",
                            left: "5vh",
                            zIndex: "5",
                            borderRadius: "50%",
                            border: "3px solid #fff",

                        }} className="absolute " />
                        <div style={{ zIndex: "10" }} className="">
                            <div style={{ position: "absolute", left: "3vw" }}>
                                <Link to="/skills">
                                    <motion.p
                                        initial={{ opacity: 0, x: -150 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ opacity: 1, x: -10, scale: 1.1 }}
                                        transition={{ duration: 0.9, ease: "easeInOut" }}
                                        className='text-5xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                                    >SKILLS</motion.p>
                                </Link>
                                <Link to="/contact">
                                    <motion.p
                                        initial={{ opacity: 0, x: -150 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ opacity: 1, x: -10, scale: 1.1 }}
                                        transition={{ duration: 0.7, ease: "easeInOut" }}
                                        className='text-5xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                                    >CONTACT</motion.p>
                                    
                                </Link>
                                <Link to="/about">
                                    <motion.p
                                        initial={{ opacity: 0, x: -150 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ opacity: 1, x: -10, scale: 1.1 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className='text-5xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                                    >ABOUT ME</motion.p>
                                </Link>
                                <Link to="/projects">
                                    <motion.p
                                        initial={{ opacity: 0, x: -150 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ opacity: 1, x: -10, scale: 1.1 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className='text-5xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                                    >MY PROJECTS</motion.p>
                                </Link>
                            </div>
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
                            whileHover={{ opacity: 1, y: -10, scale: 1.05 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className=' absolute' style={{ color: "#dc41ff82", right: "10vw", top: "50px", zIndex: "1", fontFamily: "Iceberg", fontSize: "6vw", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
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
                            className={`absolute  ${s.imgFullScreen}`} style={{ bottom: "0vh", right: "0vw", zIndex: "0" }} src='https://i.gifer.com/Hihj.gif' alt="" />

                        {/* <motion.img
                            initial={{ opacity: 0,  y:1300, x:-500 }}
                            animate={{ opacity: 0.3, y: 0, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className={`absolute  ${s.imgFullScreen}`} style={{ bottom: "1vh", left: "26vw", opacity: "0.3", zIndex: "0", width: "300px" }} src='https://i.ibb.co/P59vSMz/afaf2ef7-c841-4985-8ab7-8c704f7517bb.png' alt="" /> */}


                        <div className='h-24 w-1/4 fixed' style={{ bottom: "12vh", right: "10vw" }}>
                            {/* ON WORKING PROCCESS TO TRANSLATE */}
                            {/* <button className='w-full h-20 border-2 text-white' style={{borderRadius:"35px", fontSize:"4vh",fontFamily:"Iceberg"}}>English / Spanish</button> */}

                        </div>

                    </div>

                </div>
            </div>
            <motion.div
                className='w-full border h-full contents sm:hidden'>
                <div className='flex justify-center'>
                    <div style={{}}>
                    <img className='w-1/2 absolute sm:hidden ' style={{top:"-9vw", left:"-13vw"}} src="https://i.ibb.co/VjjNRfW/Sin-t-tulo-2.png" alt="" />
                        <motion.p
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className='text-white text-2xl absolute' style={{ zIndex: "1", top: "15vh", right: "57vw", fontFamily: "Iceberg", fontSize: "", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
                        >hi! im </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ opacity: 1, y: -10, scale: 1.05 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className=' absolute' style={{ color: "#dc41ff82", right: "10vw", top: "13vh", zIndex: "1", fontFamily: "Iceberg", fontSize: "10vw", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
                        >Ivan.Iraldi </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className='text-white text-2xl absolute' style={{ top: "20vh", right: "10vw", zIndex: "1", fontFamily: "Iceberg", fontSize: "4vw", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
                        >a Full Stack Web Developer.</motion.p>
                        <Link to="/skills">
                            <motion.p
                                initial={{ opacity: 0, x: -150 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ opacity: 1, x: -10, scale: 1.1 }}
                                transition={{ duration: 0.9, ease: "easeInOut" }}
                                className='text-5xl mt-20' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                            >SKILLS</motion.p>
                        </Link>
                        <Link to="/contact">
                            <motion.p
                                initial={{ opacity: 0, x: -150 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ opacity: 1, x: -10, scale: 1.1 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className='text-5xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                            >CONTACT</motion.p>
                        </Link>
                        <Link to="/about">
                            <motion.p
                                initial={{ opacity: 0, x: -150 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ opacity: 1, x: -10, scale: 1.1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className='text-5xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                            >ABOUT ME</motion.p>
                        </Link>
                        <Link to="/projects">
                            <motion.p
                                initial={{ opacity: 0, x: -150 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ opacity: 1, x: -10, scale: 1.1 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className='text-5xl' style={{ fontFamily: "Iceberg", color: "white", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000", }}
                            >PROJECTS</motion.p>
                        </Link>
                    </div>


                </div>
            </motion.div>
            <ParticlesHome></ParticlesHome>
        </motion.div>
    )
}