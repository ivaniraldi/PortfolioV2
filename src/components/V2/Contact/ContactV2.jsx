import { motion } from 'framer-motion'
import ParticlesBackground from '../../particles/ParticleBackground'
import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function validate(input) {
    let errors = {}; //genero un objeto errores
    if (!input.name) {
        //input es mi estado local, si en mi estadolocal.name no hay nada,
        errors.name = "Name is required"; //entonces en mi objeto.name pongo un string que diga se requiere un nombre
    } else if (!input.email) {
        errors.email = "Email is required";
    } else if (!input.message) {
        errors.message = "Message is required"
    }
    return errors;
}


export default function ContactV2() {
    const form = useRef();
    const [input, setInput] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
    })
    const [errors, setErrors] = useState({})

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }


    const sendEmail = (e) => {
        e.preventDefault();
        if (
            errors.name !== undefined ||
            errors.email !== undefined ||
            errors.message !== undefined
        ) {
            document.getElementById("DoNotSubmit");
            return alert("Please complete the fields with valid data");
        }

        emailjs.sendForm('service_rountsm', 'template_4jfhbhf', form.current, '-4OVkyttlIm08uYsA')
            .then((result) => {
                Swal.fire(
                    'Thanks!',
                    'An email was sended to me, in 24hs you will get an answer!',
                    'success'
                )
                setInput({
                    name: "",
                    lastName: "",
                    email: "",
                    message: "",

                });
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
                        <div style={{position:"absolute", top:"3vh", left:"3vw"}}>
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
                    clipPath: "polygon(19% 16%, 90% 16%, 84% 69%, 14% 69%)",
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
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                    zIndex: "3",
                    position: "absolute",
                    top: "20vh",
                    left: "17vw",
                    width: "64vw",
                    height: "45vh",

                }}>

                <form ref={form} onSubmit={sendEmail} className="hidden sm:contents">

                    <div className='grid grid-cols-2 ml-16'>
                        <p className='' style={{ fontFamily: "Iceberg" }}>Name<br />
                            <input required className={`text-black text-xl`} style={{
                                borderRadius: "6px",
                                fontFamily: "Iceberg",
                                width: "25vw",
                                height: "5vh",
                                boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)"
                            }}
                                value={input.name} onChange={(e) => handleChange(e)} placeholder=" John" name="name"></input></p>

                        <p className='' style={{
                            fontFamily: "Iceberg",
                        }}>Lastname<br /><input required placeholder=" Doe" onChange={(e) => handleChange(e)} value={input.lastName} name="lastName" className={`text-black text-xl $`} style={{
                            borderRadius: "6px",
                            fontFamily: "Iceberg",
                            width: "25vw",
                            height: "5vh",
                            boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)"
                        }}></input></p>

                    </div>
                    <p className="mt-3 ml-8" style={{
                        fontFamily: "Iceberg",
                    }}>Message</p>
                    <textarea required onChange={(e) => handleChange(e)} value={input.message} placeholder="Enter your message..." name="message" className={`text-black text-xl ml-8`} style={{
                        borderRadius: "6px",
                        boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        resize: "none",
                        padding: "10px",
                        fontFamily: "Iceberg",
                    }}></textarea>
                    <p className='' style={{
                        fontFamily: "Iceberg",
                        marginTop:"9px"
                    }}>E-mail</p>
                    <input id="email" type="email" name="email" value={input.email} onChange={(e) => handleChange(e)} placeholder=" email@example.com" className={`text-black text-3xl}`} style={{
                        borderRadius: "6px",
                        fontFamily: "Iceberg",
                        boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)"
                    }}></input>
                    <br />
                    <button value="send" type='submit' style={{
                        borderRadius: "40px",
                        marginTop: "2vh",
                        background: "#413F42",
                        marginLeft: "50vw",
                        width: "10vw",
                        color: "white",
                        textAlign: "center",
                        height: "7vh",
                        fontFamily: "Iceberg",
                        textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                        fontSize: "2vw",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "2px 3px 4px #000,"
                    }}>SEND {">>"}</button>

                </form>
                <form ref={form} onSubmit={sendEmail} className="contents sm:hidden">

                    <div className='grid grid-cols-2 ml-8'>
                        <p className='' style={{ fontFamily: "Iceberg" }}>Name<br />
                            <input required className={`text-black text-xl`} style={{
                                borderRadius: "6px",
                                fontFamily: "Iceberg",
                                width: "25vw",
                                height: "5vh",
                                boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)"
                            }}
                                value={input.name} onChange={(e) => handleChange(e)} placeholder=" John" name="name"></input></p>

                        <p className='' style={{
                            fontFamily: "Iceberg",
                        }}>Lastname<br /><input required placeholder=" Doe" onChange={(e) => handleChange(e)} value={input.lastName} name="lastName" className={`text-black text-xl $`} style={{
                            borderRadius: "6px",
                            fontFamily: "Iceberg",
                            width: "25vw",
                            height: "5vh",
                            boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)"
                        }}></input></p>

                    </div>
                    <p className="mt-3 ml-6" style={{
                        fontFamily: "Iceberg",
                    }}>Message</p>
                    <textarea required onChange={(e) => handleChange(e)} value={input.message} placeholder="Enter your message..." name="message" className={`text-black text-xl ml-2`} style={{
                        borderRadius: "6px",
                        boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        resize: "none",
                        padding: "10px",
                        fontFamily: "Iceberg",
                    }}></textarea>
                    <p className='' style={{
                        fontFamily: "Iceberg",
                        marginTop:"9px"
                    }}>E-mail</p>
                    <input id="email" type="email" name="email" value={input.email} onChange={(e) => handleChange(e)} placeholder=" email@example.com" className={`text-black text-3xl}`} style={{
                        borderRadius: "6px",
                        fontFamily: "Iceberg",
                        boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)"
                    }}></input>
                    <br />
                    <button value="send" type='submit' style={{
                        borderRadius: "40px",
                        marginTop: "4vh",
                        background: "#413F42",
                        marginLeft: "40vw",
                        width: "20vw",
                        color: "white",
                        textAlign: "center",
                        height: "7vh",
                        fontFamily: "Iceberg",
                        textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                        fontSize: "4vw",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "2px 3px 4px #000,"
                    }}>SEND {">>"}</button>

                </form>
            </motion.div>

            <ParticlesBackground />
        </div>

    )
}
