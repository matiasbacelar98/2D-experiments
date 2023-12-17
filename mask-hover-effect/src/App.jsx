import React from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './use-mouse-position';

export default function App() {
  const [isHovered, setIsHovered] = React.useState(false);
  const pos = useMousePosition();
  const size = isHovered ? 300 : 40;

  return (
    <main className='main'>
      <motion.div
        className='wrapper mask'
        animate={{
          WebkitMaskPosition: `${pos.x - size / 2}px ${pos.y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.4,
        }}
      >
        <img
          src='https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='tall building'
          className='img'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </motion.div>

      <div className='wrapper'>
        <img
          src='https://plus.unsplash.com/premium_photo-1677105821967-2783da64db3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='window'
          className='img'
        />
      </div>
    </main>
  );
}
