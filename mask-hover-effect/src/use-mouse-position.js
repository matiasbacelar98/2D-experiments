import React from 'react';

export default function useMousePosition() {
  const [position, setPosition] = React.useState({ x: null, y: null });

  // Take pos from mouse
  React.useEffect(() => {
    function updateMousePosition(e) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return position;
}
