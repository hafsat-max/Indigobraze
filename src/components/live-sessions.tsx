import { Flex } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const LiveSessions = () => {
    return (
        <section className='py-[5rem] bg-[#F4F5F6]'
        >
            <div className='w-[88%] mx-auto flex justify-between items-center max-[890px]:flex-col gap-5'>

                {/* left session */}
                <div className='flex flex-col gap-10 max-[890px]:items-center'>
                    <div className='flex flex-col gap-6'>
                        <Flex align='center' gap={8} className='max-[890px]:justify-center font-bold'>
                            <h2 className=' text-[2rem] text-grey text-center !no-underline h-[50px]'>Join our Live</h2><h2 className='underline-colored  text-[2rem] text-grey text-center '>Sessions</h2>
                        </Flex>
                        <p className='text-grey text-base max-w-[400px] tracking-[2%] leading-[176%] max-[890px]:text-center'>You can register for join our next session on career advancement on the link below, or watch the recording of our last session
                            <b className='text-yellow'> here</b>.</p>
                    </div>
                    <a href="https://bit.ly/3Thucc0">
                        <button className='bg-primary text-white py-2 px-8 rounded-lg hover:bg-secondary max-[890px]:self-center'>Register</button>
                    </a>
                </div>

                {/* right session */}
                <motion.figure className='flex-1 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}>

                    <Image width={500} height={500} alt='' src={'/live.png'} className='max-w-full w-full rounded-lg' />
                </motion.figure>
            </div>

        </section>
    )
}

