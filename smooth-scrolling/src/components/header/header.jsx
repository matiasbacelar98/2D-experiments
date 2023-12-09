import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles['wrapper']}>
      <img
        alt='user'
        src='https://i.pravatar.cc/44'
        className={styles['avatar']}
      />
      <button
        className={styles['btn']}
        onClick={() => console.log('close session')}
      >
        Close
      </button>
    </header>
  );
}
