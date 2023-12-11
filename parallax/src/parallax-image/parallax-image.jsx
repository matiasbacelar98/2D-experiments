import { motion } from 'framer-motion';
import styles from './parallax-image.module.css';

export default function ParallaxImage({ url }) {
  return (
    <motion.div className={styles['wrapper']}>
      <img src={url} alt='image' />
    </motion.div>
  );
}
