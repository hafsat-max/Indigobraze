import Image from 'next/image'
import React from 'react'
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Flex } from '@mantine/core';

const data = [
    {
        id: 1,
        course: 'Project Management',
        text: 'Master project planning, execution, and coordination.'
    },
    {
        id: 2,
        course: 'Software Testing',
        text: 'Learn comprehensive testing methodologies for software quality.'
    },
    {
        id: 3,
        course: 'Business Analysis',
        text: 'Excel in analyzing data for strategic decisions.'
    }
]

export const WhatWeDo = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return (
        <section className='bg-white py-10 px-4' id='about'>
            <div className='flex flex-col justify-center items-center gap-10 relative'>
                <Flex align='center' gap={8}>
                <h2 className=' text-5xl text-grey text-center !no-underline h-[50px]'>What we </h2><h2 className='underline-colored  text-5xl text-grey text-center '>Do</h2>
                </Flex>
                <Carousel
                slideGap='xs'
                    maw={600}
                    mx="auto"
                    loop
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}
                    classNames={{ root: 'w-full flex justify-center gap-1 relative', slide:'items-center' }}
                >
                    {
                        data.map(({ id, course, text }) => (
                            < Carousel.Slide key={id} className='bg-white rounded-[22px] flex p-12 flex-col gap-6 border border-[#FFBA00] ' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <Image width={120} height={96} src={'/course.svg'} alt='courses' />
                                    <h3 className='font-bold text-xl text-grey text-center'>{course}</h3>
                                </div>
                                <p className='text-grey text-center max-w-[300px] text-xs'>{text}</p>
                            </Carousel.Slide>
                        ))
                    }
                </Carousel>            
                {/* <Image width={100} height={84} src={'/blue.png'} alt='blue' className='absolute top-[90%] left-[5%]'/>
                <Image width={100} height={84} src={'/yellow1.png'} alt='' className=' absolute top-[40%] left-[15%]'/>
                <Image width={100} height={84} src={'/yellow2.png'} alt='' className=' absolute top-[90%] left-[55%]'/> */}
            </div>
        </section>
    )
}
