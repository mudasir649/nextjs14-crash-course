import React from 'react';
import styles from "./postUser.module.css"
import { getUser } from '@/lib/data';
import Image from 'next/image';


// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//     if(!res.ok){
//         throw new Error("")
//     }

//     return res.json();

// }


async function PostUser({userId}) {

    const user = await getUser(userId);

  return (
    <div className={styles.container}>
    <Image 
        src={user.img ? user.img : '/noavatar.png'} 
        alt='' 
        className={styles.avatar} 
        width={50}
        height={50}
    />
    <div className={styles.texts}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{user.user}</span>
    </div>
    </div>
  )
}

export default PostUser