import { Button, Text, Menu, Flex } from '@mantine/core'
import { HambergerMenu } from 'iconsax-react'
import React from 'react'

export const NavBar = () => {
    const list = [
        {
            text:'home',
            id:1,
            link: ''
        },
        {
            text:'About',
            id:2,
            link:'#about'
        },
        {
            text:'Contact',
            id:3,
            link:'#contact'
        },
    ]
    return (
        <section className='flex items-center justify-between px-5 py-5'>
            <h3 className='font-bold text-xl text-primary'>Logo</h3>
            <ul className='flex items-center gap-32 max-[600px]:hidden'>
                {
                    list.map(({text,id,link}) => (
                        <li key={id} className='text-18 list-none text-grey cursor-pointer'><a href={link}>{text}</a></li>
                    ))
                }
                <button className='bg-primary text-white py-3 px-8 rounded-lg hover:bg-secondary'>Register</button>
            </ul>

            <Menu>
                <Menu.Target>
                    <HambergerMenu
                        size="32"
                        color="#000080"
                        className='hidden max-[600px]:block cursor-pointer'
                    />
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Item color="red">
                        <Flex direction='column' gap={12}>
                            {
                                list.map(({text,id,link}) => (
                                    <li key={id} className='text-18 list-none text-grey cursor-pointer'><a href={link}>{text}</a></li>
                                ))}
                            <button className='bg-primary text-white py-2 px-8 rounded-lg hover:bg-secondary'>Register</button>
                        </Flex>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </section>
    )
}

