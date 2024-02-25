import { HambergerMenu } from 'iconsax-react'
import React from 'react'

export const NavBar = () => {
    const list = [
        'Home', 'About', 'Contact'
    ]
    return (
        <section className='flex items-center justify-between px-5 py-5'>
            <h3 className='font-bold text-xl text-primary'>Logo</h3>
            <ul className='flex items-center gap-32 max-[600px]:hidden'>
                {
                    list.map((item, idx) => (
                        <li key={idx} className='text-18 '>{item}</li>
                    ))
                }
                <button className='bg-primary text-white py-3 px-8 rounded-lg hover:bg-secondary'>Register</button>
            </ul>
            <HambergerMenu
                size="32"
                color="#000080"
                className='hidden max-[600px]:block'
            
            />
        </section>
    )
}

