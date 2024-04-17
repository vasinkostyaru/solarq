import { useEffect, useRef } from 'react';

const useKeyPress = (targetKey: string, callback: () => void) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        callbackRef.current(); // Вызываем колбэк при нажатии целевой клавиши
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [targetKey]);
};

export default useKeyPress;
