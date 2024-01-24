import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'About Page',
  description: 'This is About page',
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          at eos ipsum aperiam fuga soluta adipisci accusamus cupiditate cumque
          nesciunt praesentium voluptatum quia animi, dignissimos aut ad
          necessitatibus voluptatem iure.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};
export default AboutPage;
