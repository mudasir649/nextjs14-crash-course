import Image from 'next/image';
import styles from "./singlePost.module.css";

function SingleBlog() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.png" alt='' fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image 
            src="/post.png" 
            alt='' 
            className={styles.avatar} 
            width={50}
            height={50}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Terry Jefferson</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor situs un eisteches. Lorem ipsum dolor situs un eisteches.Lorem ipsum dolor situs un eisteches.Lorem ipsum dolor situs un eisteches.

        </div>
      </div>
    </div>
  )
}

export default SingleBlog