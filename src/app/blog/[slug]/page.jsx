import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/libs/data';

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error('Something went wrong!!');
//   }

//   return res.json();
// };

export const generateMetadata = async({params}) => {

  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc
  }

}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  console.log(post);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          }
          fill
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <PostUser id={post?.userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt}</span>
          </div>
        </div>
        <p className={styles.desc}>{post?.desc}</p>
      </div>
    </div>
  );
};
export default SinglePostPage;
