import { useState } from 'react';

import { ESolarSystemObject } from '../../enums/object.enum';
import useCross from '../../hooks/useCross';
import useShowModal from '../../hooks/useShowModal';
import Asteroids from '../Asteroids';
import Comet from '../Comet';
import SolarModal from '../Modal';
import Planet from '../Planet';
import Rocket from '../Rocket';
import Sun from '../Sun';
import Toast from '../Toast';
import st from './SolarSystem.module.less';

const SolarSystem = () => {
  const {
    selectedObject,
    rocketRef,
    sunRef,
    mercuryRef,
    venusRef,
    earthRef,
    marsRef,
    jupiterRef,
    saturnRef,
    uranusRef,
    neptuneRef,
    cometRef,
    asteroid1Ref,
    asteroid2Ref,
    asteroid3Ref,
  } = useCross();

  const [modalOpen, setModalOpen] = useState(false);

  useShowModal('Enter', () => {
    if (selectedObject !== null) {
      setModalOpen(true);
    }
  });

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={st.solarSystem}>
      <Sun sunRef={sunRef} />

      <Planet planet={ESolarSystemObject.MERCURY} planetRef={mercuryRef} />

      <Planet planet={ESolarSystemObject.VENUS} planetRef={venusRef} />

      <Planet planet={ESolarSystemObject.EARTH} planetRef={earthRef} />

      <Planet planet={ESolarSystemObject.MARS} planetRef={marsRef} />

      <Asteroids
        asteroid1Ref={asteroid1Ref}
        asteroid2Ref={asteroid2Ref}
        asteroid3Ref={asteroid3Ref}
      />

      <Planet planet={ESolarSystemObject.JUPITER} planetRef={jupiterRef} />

      <Planet planet={ESolarSystemObject.SATURN} planetRef={saturnRef} />

      <Planet planet={ESolarSystemObject.URANUS} planetRef={uranusRef} />

      <Planet planet={ESolarSystemObject.NEPTUNE} planetRef={neptuneRef} />

      <Comet cometRef={cometRef} />

      <Rocket rocketRef={rocketRef} />

      <Toast
        showToast={selectedObject !== null && !modalOpen}
        selectedObject={selectedObject}
      />

      <SolarModal
        show={modalOpen && selectedObject !== null}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default SolarSystem;
