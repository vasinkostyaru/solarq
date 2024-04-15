import classNames from 'classnames';
import React from 'react';

import asteroid1Svg from '../../images/asteroid1.svg';
import asteroid2Svg from '../../images/asteroid2.svg';
import asteroid3Svg from '../../images/asteroid3.svg';
import st from './Asteroids.module.less';

const Asteroids = () => {
  return (
    <>
      <div className={classNames(st.asteroids, st.asteroid1)}>
        <img alt="asteroid" src={asteroid1Svg} />
      </div>
      <div className={classNames(st.asteroids, st.asteroid2)}>
        <img alt="asteroid" src={asteroid2Svg} />
      </div>
      <div className={classNames(st.asteroids, st.asteroid3)}>
        <img alt="asteroid" src={asteroid3Svg} />
      </div>
      <div className={classNames(st.asteroids, st.asteroid4)}>
        <img alt="asteroid" src={asteroid1Svg} />
      </div>
      <div className={classNames(st.asteroids, st.asteroid5)}>
        <img alt="asteroid" src={asteroid2Svg} />
      </div>
      <div className={classNames(st.asteroids, st.asteroid6)}>
        <img alt="asteroid" src={asteroid3Svg} />
      </div>
    </>
  );
};

export default Asteroids;
