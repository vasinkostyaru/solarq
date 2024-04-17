import { useEffect, useState } from 'react';

const useRocket = () => {
  const [position, setPosition] = useState({ x: 500, y: 500 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newVelocity = { ...velocity };

      if (event.key === 'ArrowUp') {
        newVelocity.y = Math.max(velocity.y - 1, -10);
      } else if (event.key === 'ArrowDown') {
        newVelocity.y = Math.min(velocity.y + 1, 10);
      } else if (event.key === 'ArrowLeft') {
        newVelocity.x = Math.max(velocity.x - 1, -10);
      } else if (event.key === 'ArrowRight') {
        newVelocity.x = Math.min(velocity.x + 1, 10);
      }

      setVelocity(newVelocity);
    };

    document.addEventListener('keydown', handleKeyDown);

    const handleKeyUp = () => {
      setVelocity({ x: 0, y: 0 });
    };

    document.addEventListener('keyup', handleKeyUp);

    const updatePosition = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + velocity.x,
        y: prevPosition.y + velocity.y,
      }));
    };

    const interval = setInterval(updatePosition, 30);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      clearInterval(interval);
    };
  }, [velocity]);

  return { position };
};

export default useRocket;
