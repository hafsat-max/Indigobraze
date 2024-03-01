import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import "aos/dist/aos.css";

export const HeroSection = () => {

    return (
        <section className='flex justify-center items-center px-4  w-full bg-[url("/hero.png")] bg-no-repeat bg-cover bg-center h-[calc(100vh_-_88px)]'>
            <div className='flex flex-1 flex-col justify-center items-center gap-12'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='flex flex-col gap-4'>
                        <h2 className='max-w-[800px] text-grey font-bold text-72 text-center'>LAUNCH YOUR TECH CAREER TODAY!</h2>
                        <p className='font-medium text-grey text-18 max-w-[730px] text-center'>
                            Our comprehensive training program equips you with the in-demand skills and industry knowledge needed to land your first tech job.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}>

                    <a href="https://bit.ly/3Thucc0">
                        <button className='bg-primary text-white py-3 px-8 rounded-lg leading-[140%] over:bg-secondary'>Sign Up</button>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

