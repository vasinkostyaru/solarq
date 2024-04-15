import { useEffect, useState } from 'react';

const useRocket = () => {
  const [position, setPosition] = useState({ x: 1000, y: 500 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: Math.max(prevPosition.y - 10, 0),
        }));
      } else if (event.key === 'ArrowDown') {
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: Math.min(prevPosition.y + 10, window.innerHeight - 50),
        }));
      } else if (event.key === 'ArrowLeft') {
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: Math.max(prevPosition.x - 10, 0),
        }));
      } else if (event.key === 'ArrowRight') {
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: Math.min(prevPosition.x + 10, window.innerWidth - 50),
        }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [position]);

  return { position };
};

export default useRocket;
