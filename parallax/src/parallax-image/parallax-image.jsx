import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './parallax-image.module.css';

export default function ParallaxImage({ url }) {
  const imgRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className={styles['wrapper']}>
      <motion.img style={{ y }} ref={imgRef} src={url} alt='image' />
    </div>
  );
}
