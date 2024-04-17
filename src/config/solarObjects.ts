import { ESolarSystemObject } from '../enums/object.enum';
import asteroidPng from '../images/asteroid.png';
import cometPng from '../images/comet.png';
import earthPng from '../images/earth.png';
import earthSvg from '../images/earth.svg';
import jupiterPng from '../images/jupiter.png';
import jupiterSvg from '../images/jupiter.svg';
import marsPng from '../images/mars.png';
import marsSvg from '../images/mars.svg';
import mercuryPng from '../images/mercury.png';
import mercurySvg from '../images/mercury.svg';
import neptunePng from '../images/neptune.png';
import neptuneSvg from '../images/neptune.svg';
import saturnPng from '../images/saturn.png';
import saturnSvg from '../images/saturn.svg';
import sunPng from '../images/sun.png';
import uranusPng from '../images/uranus.png';
import uranusSvg from '../images/uranus.svg';
import venusPng from '../images/venus.png';
import venusSvg from '../images/venus.svg';

export const PLANET_SVG = {
  [ESolarSystemObject.MERCURY]: mercurySvg,
  [ESolarSystemObject.VENUS]: venusSvg,
  [ESolarSystemObject.EARTH]: earthSvg,
  [ESolarSystemObject.MARS]: marsSvg,
  [ESolarSystemObject.JUPITER]: jupiterSvg,
  [ESolarSystemObject.SATURN]: saturnSvg,
  [ESolarSystemObject.URANUS]: uranusSvg,
  [ESolarSystemObject.NEPTUNE]: neptuneSvg,
};

export const OBJECTS_PNG = {
  [ESolarSystemObject.MERCURY]: mercuryPng,
  [ESolarSystemObject.VENUS]: venusPng,
  [ESolarSystemObject.EARTH]: earthPng,
  [ESolarSystemObject.MARS]: marsPng,
  [ESolarSystemObject.JUPITER]: jupiterPng,
  [ESolarSystemObject.SATURN]: saturnPng,
  [ESolarSystemObject.URANUS]: uranusPng,
  [ESolarSystemObject.NEPTUNE]: neptunePng,
  [ESolarSystemObject.SUN]: sunPng,
  [ESolarSystemObject.COMET]: cometPng,
  [ESolarSystemObject.ASTEROID]: asteroidPng,
};
