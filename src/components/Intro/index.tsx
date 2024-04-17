import classNames from 'classnames';
import { useEffect, useState } from 'react';

import arrowSvg from '../../images/keyArrows.svg';
import st from './Intro.module.less';

const Intro = ({ speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isClose, setIsClose] = useState(false);

  const text =
    'Добро пожаловать в солнечную систему, авантюрист из далекой галактики! Ваше путешествие начинается здесь и сейчас. Вы оказались внутри нашей системы. С помощью клавиш на клавиатуре вы можете управлять вашим кораблем, перемещаясь по этим невероятным просторам. Подлетайте ближе к планетам, чтобы изучить их.';

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, currentIndex, speed]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
      ) {
        setIsClose(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={classNames({ [st.close]: isClose })}>
      <div className={st.backdrop}></div>
      <div className={st.introContainer}>
        {displayText}
        {currentIndex === text.length && (
          <div className={st.instruction}>
            Нажмите на стрелки что бы начать <img src={arrowSvg} alt="arrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
