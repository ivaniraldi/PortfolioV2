import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThreeAnim from './ThreeAnim'

export default function SkillsV2() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div/>

                        <ThreeAnim text={"asasdd"}></ThreeAnim>



        </motion.div>
    )
}
