import React from 'react';
import Links from './links/Links';
import styles from "./navbar.module.css";
import Link from 'next/link';
import { auth, signOut } from '@/lib/auth';

async function Navbar() {

  const session = await auth();

  console.log(session);

  const handleLogout = async() => {
    "use server"
    await signOut();
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <Links session={session} handleLogout={handleLogout} />
    </div>
  )
}

export default Navbar