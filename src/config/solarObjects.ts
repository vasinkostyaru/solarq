import { EPlanet } from '../enums/planet.enum';
import earthSvg from '../images/earth.svg';
import jupiterSvg from '../images/jupiter.svg';
import marsSvg from '../images/mars.svg';
import mercurySvg from '../images/mercury.svg';
import neptuneSvg from '../images/neptune.svg';
import saturnSvg from '../images/saturn.svg';
import uranusSvg from '../images/uranus.svg';
import venusSvg from '../images/venus.svg';

export const PLANET_SVG = {
  [EPlanet.MERCURY]: mercurySvg,
  [EPlanet.VENUS]: venusSvg,
  [EPlanet.EARTH]: earthSvg,
  [EPlanet.MARS]: marsSvg,
  [EPlanet.JUPITER]: jupiterSvg,
  [EPlanet.SATURN]: saturnSvg,
  [EPlanet.URANUS]: uranusSvg,
  [EPlanet.NEPTUNE]: neptuneSvg,
};
