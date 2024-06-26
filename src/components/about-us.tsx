import { Flex } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export const AboutUs = () => {
    return (
        <section className='bg-[#F4F5F6]'>
            <div className=' flex px-4 py-[140px] gap-20p justify-center w-[88%] mx-auto max-[890px]:flex-col-reverse'>
                <motion.figure className='flex-1 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}>

                    <Image width={600} height={600} alt='' src={'/about.png'} className='max-w-full w-full rounded-lg' />
                </motion.figure>
                <motion.div className='flex flex-col flex-1 gap-10 self-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    <div className='flex flex-col gap-6'>
                        <Flex align='center' gap={8} className='max-[890px]:justify-center'>
                            <h2 className=' text-5xl text-grey text-center !no-underline h-[50px]'>About</h2><h2 className='underline-colored  text-5xl text-grey text-center '>Us</h2>
                        </Flex>
                        <p className='max-w-[460px] font-medium text-base text-grey max-[890px]:text-center max-[890px]:max-w-full'>IndigoBraze Technologies is more than just a career change consultancy firm; we&apos;re your trusted partner in launching your successful tech career. Founded by industry veterans with a passion for empowering individuals, we understand the challenges and opportunities that come with navigating the dynamic tech landscape.
                            <br/><br/>
                            Our mission is to equip individuals with the essential skills, knowledge, and confidence needed to thrive in the tech industry. We achieve this through our rigorous curriculum, expert-led instruction, and unwavering commitment to your success.</p>
                    </div>
                    {/* <button className='bg-primary text-white py-2 px-8 rounded-lg hover:bg-secondary self-start !cursor-pointer max-[890px]:self-center'>Join Us</button> */}
                </motion.div>
            </div>
        </section>
    )
}

