import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'



const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-light text-dark
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs-text-dark xs:dark:text-light xs-font-bold
        '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x: x, y: y, transition: {duration: 1.5} }}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
return (
    <>
        <h2 className='font-bold text-6xl mt-60 w-full text-center md:text-5 md:mt-30'>Produk Terbaik</h2>
            <div className='w-full h-screen relatve flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]

            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
           
            
            '>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
                lg:p-6 md:p-4 xs:text-xs xs:p-2
                
                '
                whileHover={{scale:1.05}}
                >
                   Produk KSN
                </motion.div>

                <Skill name="Gula" x="0vw" y="10vw"/>
                <Skill name="Emas Antam" x="0vw" y="-15vw"/>
                {/* <Skill name="Mie" x="-20vw" y="-10vw"/>
                <Skill name="Cuanki Lidah" x="23vw" y="-2vw"/> */}
                {/* <Skill name="Bumbu" x="22vw" y="-10vw"/>
                <Skill name="Sambel" x="0vw" y="15vw"/>
                <Skill name="cikur" x="22vw" y="15vw"/> */}
            </div>

    </>
    )
}




export default Skills



