import classNames from 'classnames';
import React, { LegacyRef } from 'react';

import { ESolarSystemObject } from '../../enums/object.enum';
import useIsSelected from '../../hooks/useIsSelected';
import asteroid1Svg from '../../images/asteroid1.svg';
import asteroid2Svg from '../../images/asteroid2.svg';
import asteroid3Svg from '../../images/asteroid3.svg';
import st from './Asteroids.module.less';

interface IProps {
  asteroid1Ref?: LegacyRef<HTMLImageElement>;
  asteroid2Ref?: LegacyRef<HTMLImageElement>;
  asteroid3Ref?: LegacyRef<HTMLImageElement>;
}

const Asteroids = ({ asteroid1Ref, asteroid2Ref, asteroid3Ref }: IProps) => {
  const { isSelected, hasSelected } = useIsSelected(ESolarSystemObject.ASTEROID);

  return (
    <>
      <div
        className={classNames(st.asteroids, st.asteroid1, { [st.paused]: hasSelected })}
      >
        <img
          className={classNames({ [st.selected]: isSelected })}
          alt="asteroid"
          src={asteroid1Svg}
          ref={asteroid1Ref}
        />
      </div>
      <div
        className={classNames(st.asteroids, st.asteroid2, { [st.paused]: hasSelected })}
      >
        <img
          className={classNames({ [st.selected]: isSelected })}
          alt="asteroid"
          src={asteroid2Svg}
          ref={asteroid2Ref}
        />
      </div>
      <div
        className={classNames(st.asteroids, st.asteroid3, { [st.paused]: hasSelected })}
      >
        <img
          className={classNames({ [st.selected]: isSelected })}
          alt="asteroid"
          src={asteroid3Svg}
          ref={asteroid3Ref}
        />
      </div>
    </>
  );
};

export default Asteroids;
