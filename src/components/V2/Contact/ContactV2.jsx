import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import s from './Contact.module.css'
import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'
function validate(input) {
    let errors = {}; //genero un objeto errores
    if (!input.name) {
      //input es mi estado local, si en mi estadolocal.name no hay nada,
      errors.name = "Name is required"; //entonces en mi objeto.name pongo un string que diga se requiere un nombre
    } else if (!input.email) {
      errors.email = "Email is required";
    } else if (!input.message) {
      errors.message = "Message is required"}
    return errors;
  }

export default function Contact() {
    const form = useRef();
    const [input, setInput] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
    })
    const [errors, setErrors] = useState({})

    function handleChange(e) {
        //todos los inputs del formulario van a necesitar tener la prop handleChange
        e.preventDefault();
        setInput({
          //quiero ir guardando las cosas que el usuario escriba en el input en mi estado input
          ...input, //traé todo lo que ya tenías
          [e.target.name]: e.target.value, //y seteame el e.target.name en e.target.value (agregame el e.target.value de lo que esté
        }); //modificando, el target.name se lo fui pasando en el formulario, si esta modificando el
        //name, va a tomar el target.value de name, si esta modificando life span, va a tomar el target.value de name='life_span'
        //a medida que va modificando me va llenando ese estado
        setErrors(
          validate({
            //seteame mi estado errores, pasándole la función validate de más arriba,
            ...input, //con el estado input y el e.target.name en el e.target.value
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
            document.getElementById("DoNotSubmit"); //con docudntSubmit")
            return alert("Please complete the fields with valid data");
          }
          
        emailjs.sendForm('service_rountsm', 'template_4jfhbhf', form.current, '-4OVkyttlIm08uYsA')
          .then((result) => {
            Swal.fire(
                'Good job!',
                'You email was sended!',
                'success'
              )
              setInput({
                //seteo el input en cero otra vez
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
                        background: "#141414",
                        borderRadius: "7px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <div className=' sm:m-8 m-4' style={{ height: "91.5%" }}>
                        <motion.p
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className={`text-white absolute ${s.title}`} style={{ right: "10vw", top: "50px", zIndex: "1", fontFamily: "Iceberg", fontSize: "6vw", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
                        >Contact me</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className={`text-2xl absolute ${s.phoneHide}`} style={{ color: "#7D6F87", top: "20vh", right: "29vw", zIndex: "1", fontFamily: "Iceberg", fontSize: "2vw", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
                        >(e-mail)</motion.p>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                             className={s.form} style={{
                            height: "85.5%",
                            marginTop: "9.5vh",
                            
                        }}>

                            <form ref={form} onSubmit={sendEmail}>
                            <p className='' style={{
                                color: "#fff",
                                fontFamily: "Iceberg",

                            }}>Name</p>
                            <input required className={`border-2 border-white text-black text-3xl ${s.fInput}`} style={{
                                borderRadius: "6px",
                                fontFamily: "Iceberg",
                                boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)"
                            }}
                            value={input.name}  onChange={(e) => handleChange(e)} placeholder="John" name="name"></input>
                            <p className='' style={{
                                color: "#fff",
                                fontFamily: "Iceberg",
                            }}>Lastname</p>
                            <input required placeholder="Doe" onChange={(e) => handleChange(e)} value={input.lastName} name="lastName" className={`border-2 border-white text-black text-3xl ${s.fInput}`} style={{
                                borderRadius: "6px",
                                fontFamily: "Iceberg",
                                boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)"
                            }}></input>
                            <p className='' style={{
                                color: "#fff",
                                fontFamily: "Iceberg",
                            }}>E-mail</p>
                            <input id="email" type="email" name="email"value={input.email} onChange={(e) => handleChange(e)} placeholder="email@example.com"  className={`border-2 border-white text-black text-3xl ${s.fInputEmail}`} style={{
                                borderRadius: "6px",
                                fontFamily: "Iceberg",
                                boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)"
                            }}></input>

                            <p className={s.msgPhone} style={{
                                color: "#fff",
                                fontFamily: "Iceberg",
                            }}>Message</p>
                            <textarea  required onChange={(e) => handleChange(e)}value={input.message} placeholder="Enter your message..." name="message"className={`border-2 border-white text-black text-3xl ${s.msgPhoneT}`} style={{
                                borderRadius: "6px",
                                boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                                width: "100%",
                                resize: "none",
                                padding: "10px",
                                fontFamily: "Iceberg",
                            }}></textarea>

                            <br></br>
                            <button  value="send" type='submit'className={s.button} style={{
                                borderRadius: "40px",
                                marginTop: "7vh",
                                background: "#413F42",
                                marginLeft: "7vw",
                                width: "13vw",
                                color: "white",
                                textAlign: "center",
                                height: "10vh",
                                fontFamily: "Iceberg",
                                textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                                fontSize: "2.8vw",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "2px 3px 4px #000,"

                            }}>SEND {">>"}</button>


                            <button  value="send" type='submit' className={s.buttonPhone} style={{
                                borderRadius: "40px",
                                background: "#413F42",
                                color: "white",
                                textAlign: "center",
                                height: "10vh",
                                fontFamily: "Iceberg",
                                textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                                fontSize: "8vw",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "2px 3px 4px #000,"

                            }}>SEND {">>"}</button>
                            </form>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        className={`${s.msg}`} style={{
                            top: "32vh",
                            left: "37vw",
                            height: "60vh",
                            width: "55vw",
                        }}>
                            <p className={`text-white`} style={{ zIndex: "1", fontFamily: "Iceberg", fontSize: "2.7vw", textShadow: "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}>
                                Message</p>

                            <textarea required onChange={(e) => handleChange(e)}value={input.message} placeholder="Enter your message..." name="message" className={`border-2 border-white text-black text-3xl ${s.fInput}`} style={{
                                borderRadius: "6px",
                                boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
                                height: "80%",
                                width: "100%",
                                resize: "none",
                                padding: "10px",
                                fontFamily: "Iceberg",
                                fontSize: "1.5vw",
                            }}></textarea>

                            

                        </motion.div>
                        <div className="md:hidden sm:hidden lg:grid xl:grid 2xl:grid hidden">
                                <Link to="/home">
                                    <img src="https://i.ibb.co/MsgSJ8v/previous-1.png" style={{ width: "40px", opacity: "0.3", borderRadius: "100%", boxShadow: " 5px 5px 5px black", position: "fixed", bottom: "6%" }} alt="" />
                                </Link>
                            </div>



                    </div>


                </div>
            </div>

        </motion.div>
    )
}
