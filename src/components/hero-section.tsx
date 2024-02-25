import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import "aos/dist/aos.css";

export const HeroSection = () => {

    return (
        <section className='flex justify-center items-center px-4  w-full bg-[url("/hero.png")] bg-no-repeat bg-cover bg-center h-[calc(100vh_-_88px)]'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{ 
                    hidden: { opacity: 0, y: -100 },
                    visible: { opacity: 1, y: 0 },
                }}
                className='flex flex-1 flex-col justify-center items-center gap-12'
            >
                <div className='flex flex-col gap-4'>
                <h2 className='max-w-[800px] text-grey font-bold text-72 text-center'>Elevate Your Career With IndigoBraze.</h2>
                <p className='font-medium text-grey text-18 max-w-[730px] text-center'>Join thousands of professionals who have enhanced their skills through our specialized e-learning platform.</p>
                </div>

                <button className='bg-primary text-white py-3 px-8 rounded-lg leading-[140%] over:bg-secondary'>Sign Up</button>
            </motion.div>
        </section>
    )
}

