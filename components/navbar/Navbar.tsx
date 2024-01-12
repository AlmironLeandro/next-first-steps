import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

// Basicamente podes hacer un mapeo y en el html retornar esto con un Link de nextjs
const navItems = [
    {
        text: 'Home',
        path: '/'
    },
    {
        text: 'About',
        path: '/about'
    },
    {
        text: 'Pricing',
        path: '/pricing'
    },
    {
        text: 'Contact',
        path: '/contact'
    },
]

export const Navbar = () => {
    return (
        <div className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded  '>
            <Link className='flex items-center mr-2' href="/">
                <HomeIcon className='mr-2' />
                <span>Home</span>
            </Link>

            {/* {
                navItems.map((navItem, i) => (
                    <ActiveLink key={i} path={navItem.path} text={navItem.name}></ActiveLink>
                ))
            } */}

        
            {/* NOTE: Dos forma de usar pasar los parametros a un 
            componente con el spread operator o pasandole las props */}
            {
                navItems.map((navItem, i) => (
                    <ActiveLink key={i} {...navItem} />
                ))
            }




            {/* <Link className="mr-2" href="/about">about</Link>
            <Link className="mr-2" href="/pricing">Pricing</Link>
            <Link className="mr-2" href="contact">Contact</Link> */}
        </div>
    )
}
