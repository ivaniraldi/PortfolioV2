import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function PDetail({ project, setOpenModal, openModal }) {
    //modal

    return (
        <motion.div
            className={`${!openModal ? 'visible' : 'invisible'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{

                zIndex: "2",
                width: "100%",
                height: "",
                background: "",
                textAlign: "center",

            }}
        >
            <h1 style={{
                color: '#fff',
                fontSize: '2.1vw',
                fontWeight: 'bold',
                fontFamily: "Iceberg",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",

            }}>{project.Project_name}</h1>
            <p style={{
                color: '#fff',
                fontSize: '1.5vw',
                fontFamily: "Iceberg",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",

            }}>{project.Project_description}</p>
            <div
                style={{
                    width: "100%",
                    marginTop: "5px",

                }}
                className="grid grid-cols-2">
                <div className="text-white">
                    <h1 style={{
                        color: '#fff',
                        fontSize: '1.3vw',
                        fontWeight: 'bold',
                        fontFamily: "Iceberg",
                    }}>Date:</h1>
                    <p style={{
                        color: '#fff',
                        fontSize: '1.4vw',
                        fontWeight: 'bold',
                        fontFamily: "Iceberg",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",

                    }}>
                        {project.Project_end_date}
                    </p>
                </div>
                <div className="text-white">
                    <h1 style={{
                        color: '#fff',
                        fontSize: '1.3vw',
                        fontWeight: 'bold',
                        fontFamily: "Iceberg",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",

                    }}>Users:</h1> <p

                    ><span style={{
                        color: '#fff',
                        fontSize: '1.4vw',
                        fontWeight: 'bold',
                        fontFamily: "Iceberg",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",

                    }}>{project.Project_Users}</span></p>
                </div>
            </div>
            <div
                style={{
                    marginTop: "5px",
                }}
            >

                <h1 style={{
                    color: '#fff',
                    fontSize: '1.3vw',
                    fontWeight: 'bold',
                    fontFamily: "Iceberg",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",

                }}>Tools:</h1>

                <p style={{
                    color: '#fff',
                    fontSize: '1.1vw',
                    fontFamily: "Iceberg",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",

                }}>{project.Project_Languages.map(l => (<motion.button
                    style={{ marginLeft: "5px" }}
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}>{l + " "}</motion.button>))}</p>

                <p style={{
                    color: '#fff',
                    fontSize: '1.1vw',
                    fontWeight: 'bold',
                    fontFamily: "Iceberg",

                }}>Active: {project.Project_status == "Active" ? (<span style={{ color: "green", }}>•</span>) : (<span style={{ color: "red" }}>•</span>)}</p>
                <div className="flex items-center justify-center py-4">
                    <a href={project.Project_Link} target="_blank">
                        <motion.img src='https://i.ibb.co/MsgSJ8v/previous-1.png' alt='' className="bg-black text-white font-bold rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            whileHover={{ scale: 1.1 }}
                            style={{
                                width: "3vw",

                            }} />
                    </a>
                    <a href={project.Project_Code} target="_blank">
                        <motion.img src='https://i.ibb.co/yfyNxkW/github-1.png' alt='' className="bg-black text-white font-bold ml-5 rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            whileHover={{ scale: 1.1 }}
                            style={{
                                width: "3vw",

                            }} />

                    </a>
                </div>
            </div>



        </motion.div>
    )
}
