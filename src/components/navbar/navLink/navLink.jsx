'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './navLink.module.css';

function NavLink({item}) {

    const pathname = usePathname();

  return (
    <div>
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>{item.title}</Link>
    </div>
  )
}

export default NavLink