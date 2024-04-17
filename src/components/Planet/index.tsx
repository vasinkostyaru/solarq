import classNames from 'classnames';
import React, { LegacyRef } from 'react';

import { PLANET_SVG } from '../../config/solarObjects';
import { ESolarSystemObject } from '../../enums/object.enum';
import useIsSelected from '../../hooks/useIsSelected';
import st from './Planet.module.less';

interface IProps {
  planet: ESolarSystemObject;
  planetRef?: LegacyRef<HTMLImageElement>;
}

const Planet = ({ planet, planetRef }: IProps) => {
  const { isSelected, hasSelected } = useIsSelected(planet);

  return (
    <>
      <div className={classNames(st.orbit, st[planet + 'Orbit'])}></div>
      <div className={classNames(st.planet, st[planet], { [st.paused]: hasSelected })}>
        <img
          className={classNames({ [st.selected]: isSelected })}
          src={PLANET_SVG[planet]}
          alt={planet}
          ref={planetRef}
        />
      </div>
    </>
  );
};

export default Planet;
