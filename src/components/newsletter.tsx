import { Button } from '@mantine/core'
import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-[#F4F5F6] py-20 flex flex-col justify-center items-center px-4'>
       <div className='px-[18px] flex flex-col gap-8'>
        <div className='flex flex-col'>
            <h3 className='text-center text-[#292929] text-5xl'>Subscribe to our newsletter </h3>
            <h5 className='text-[#292929] text-2xl text-center'>to get updates for newest property</h5>
        </div>
        <div className='items-center flex justify-between w-full gap-4'>
            <input className='border border-[#6E5DCF] px-10 py-[5px] rounded-lg'/>
            <Button className='bg-primary hover:bg-secondary'>Suscribe</Button>
        </div>
        </div>   
    </section>
  )
}

export default Newsletter
