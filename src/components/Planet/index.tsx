import classNames from 'classnames';
import React from 'react';

import { PLANET_SVG } from '../../config/solarObjects';
import { EPlanet } from '../../enums/planet.enum';
import st from './Planet.module.less';

interface IProps {
  planet: EPlanet;
}

const Planet = ({ planet }: IProps) => {
  return (
    <>
      <div className={classNames(st.orbit, st[planet + 'Orbit'])}></div>
      <div className={classNames(st.planet, st[planet])}>
        <img src={PLANET_SVG[planet]} alt={planet} />
      </div>
    </>
  );
};

export default Planet;
