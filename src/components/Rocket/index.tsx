import classNames from 'classnames';
import { RefObject } from 'react';

import rocketSvg from '../../images/rocket.svg';
import st from './Rocket.module.less';
import useRocket from './useRocket';

interface IProps {
  rocketRef?: RefObject<HTMLDivElement>;
}

const Rocket = ({ rocketRef }: IProps) => {
  const { position } = useRocket();

  return (
    <div
      ref={rocketRef}
      className={classNames(st.rocket)}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <img src={rocketSvg} alt="rocket" />
    </div>
  );
};

export default Rocket;
