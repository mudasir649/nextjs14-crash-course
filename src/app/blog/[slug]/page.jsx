import Image from 'next/image';
import styles from "./singlePost.module.css";
import PostUser from '@/components/postUser/PostUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';


// const getPost = async(id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

//   if(!res.ok){
//     throw new Error("Something went wrong.");
//   }

//   return res.json();

// }

export const generateMetadata = async ({params}) => {

  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description
  }

}

async function SingleBlog({params}) {

  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt='' fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
            <Suspense fallback={<div>Loading....</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
        </div>
        <div className={styles.content}>
          {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
