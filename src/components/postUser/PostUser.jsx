import { getUser } from '@/libs/data';
import styles from './postUser.module.css';
import Image from 'next/image';

const PostUser = async ({ id }) => {
  const user = await getUser(id);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? img : '/noavatar.png'}
        width={50}
        height={50}
        alt=""
        className={styles.avatar}
      />
      <span className={styles.title}>Author</span>
      <span className={styles.name}>{user.username}</span>
    </div>
  );
};
export default PostUser;
