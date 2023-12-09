import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['wrapper']}>
      <p className={styles['text']}>smooth-scrolling</p>
      <img
        className={styles['hand']}
        alt='hand gesture'
        src='https://matiasbacelar.vercel.app/icons/cool-hand.png'
      />
    </footer>
  );
}
