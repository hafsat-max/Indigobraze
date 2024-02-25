import Image from 'next/image'
import React from 'react'

const data= [
    {
        id:1,
        course:'Project Management',
        text:'Master project planning, execution, and coordination.'
    },
    {
        id:2,
        course:'Software Testing',
        text:'Learn comprehensive testing methodologies for software quality.'
    },
    {
        id:3,
        course:'Business Analytics',
        text:'Excel in analyzing data for strategic decisions.'
    }
]

export const WhatWeDo = () => {
  return (
   <section className='bg-white py-10 px-4' id='about'>
    <div className='flex flex-col justify-center items-center gap-24'>
        <h2 className=' text-5xl text-grey text-center'>What we Do</h2>
        <div className='grid grid-cols-1 gap-5 items-center'>
            {
                data.map(({id,course, text})=>(
                    <div key={id} className='bg-white rounded-[22px] flex p-12 flex-col gap-6 border border-[#FFBA00] ' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        <div className='flex flex-col gap-5 justify-center items-center'>
                            <Image width={120} height={96} src={'/course.svg'} alt='courses'/>
                            <h3 className='font-bold text-xl text-grey text-center'>{course}</h3>
                        </div>
                        <p className='text-grey text-center max-w-[250px] text-xs'>{text}</p>
                    </div>
                ))
            }
        </div>
    </div>
   </section>
  )
}
