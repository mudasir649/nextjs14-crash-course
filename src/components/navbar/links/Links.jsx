'use client';
import React, { useState } from 'react';
import styles from './links.module.css';
import NavLink from '../navLink/navLink';
import Image from 'next/image';

const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
];

function Links({session, handleLogout}) {

    const [open, setOpen] = useState(false);

    const isAdmin = true;


  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
        ))}{
            session?.user ? (
                <>
                {session?.user && ( <NavLink item={{title: "Admin", path: "/admin"}} />)}
                <form action={handleLogout}>
                    <button className={styles.logout}>Logout</button>
                </form>
                </>
            ) : (
                <NavLink item={{title: 'Login', path: '/login'}} />
            )
        }
        </div>
        <Image 
            src="/menu.png" 
            alt='' 
            width={30} 
            height={30} 
            className={styles.menuButton} 
            onClick={() => setOpen(!open)}
            />
        {open && 
        <div className={styles.mobileLinks}>
        {links.map((link) => (
            <NavLink item={link} key={link.title} />
        ))}
        </div>}
    </div>
  )
}

export default Links