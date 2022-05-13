
import { motion } from 'framer-motion'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

export default function V1() {
  return (
    <motion.div className='pp'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}

    
    >
    <NavBar/>
   <Home/>
   <Skills/>
   <Projects/>
   <About/>
   <Contact/>
   <Footer/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script>
  </motion.div>
  )
}
