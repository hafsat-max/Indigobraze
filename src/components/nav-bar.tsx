import {Menu, Flex } from '@mantine/core'
import { HambergerMenu } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'

export const NavBar = () => {
    const list = [
        {
            text: 'Home',
            id: 1,
            link: ''
        },
        {
            text: 'About',
            id: 2,
            link: '#about'
        },
        {
            text: 'Contact',
            id: 3,
            link: '#contact'
        },
    ]
    return (
        <section className='flex items-center justify-between px-5 py-5'>
            <Image width={70} height={50} alt='logo' src='/logo.png' />
            <ul className='flex items-center gap-32 max-[600px]:hidden'>
                {
                    list.map(({ text, id, link }) => (
                        <li key={id} className='text-18 list-none text-grey cursor-pointer'><a href={`${link}`}>{text}</a></li>
                    ))
                }
                <a href="https://bit.ly/3Thucc0">
                    <button className='bg-primary text-white py-3 px-8 rounded-lg hover:bg-secondary'>Register</button>
                </a>
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
                                list.map(({ text, id, link }) => (
                                    <li key={id} className='text-18 list-none text-grey cursor-pointer  hover:bg-secondary'><a href={link}>{text}</a></li>
                                ))}
                            <a href="https://bit.ly/3Thucc0">
                                <button className='bg-primary text-white py-2 px-8 rounded-lg hover:bg-secondary'>Register</button>
                            </a>
                        </Flex>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </section>
    )
}

