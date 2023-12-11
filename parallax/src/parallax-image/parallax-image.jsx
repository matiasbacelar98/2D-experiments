import styles from './parallax-image.module.css';

export default function ParallaxImage({ url }) {
  return <img className={styles['wrapper']} src={url} alt='image' />;
}
