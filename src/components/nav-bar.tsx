import React from 'react'

export const NavBar = () => {
    const list =[
        'Home', 'About', 'Contact'
    ]
  return (
   <section className='flex items-center justify-between px-5 py-5'>
        <h3 className='font-bold text-xl text-primary'>Logo</h3>
        <ul className='flex items-center gap-8'>
            {
                list.map((item, idx)=>(
                    <li key={idx}>{item}</li>
                ))
            }
            <button className='bg-primary text-white py-3 px-8 rounded-lg'>Register</button>
        </ul>

   </section>
  )
}

