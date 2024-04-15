import { EPlanet } from '../../enums/planet.enum';
import Asteroids from '../Asteroids';
import Comet from '../Comet';
import Planet from '../Planet';
import Rocket from '../Rocket';
import Sun from '../Sun';
import st from './SolarSystem.module.less';

const SolarSystem = () => {
  return (
    <div className={st.solarSystem}>
      <Sun />

      <Planet planet={EPlanet.MERCURY} />

      <Planet planet={EPlanet.VENUS} />

      <Planet planet={EPlanet.EARTH} />

      <Planet planet={EPlanet.MARS} />

      <Asteroids />

      <Planet planet={EPlanet.JUPITER} />

      <Planet planet={EPlanet.SATURN} />

      <Planet planet={EPlanet.URANUS} />

      <Planet planet={EPlanet.NEPTUNE} />

      <Comet />

      <Rocket />
    </div>
  );
};

export default SolarSystem;
