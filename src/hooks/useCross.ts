import { useEffect, useRef, useState } from 'react';

import { ESolarSystemObject } from '../enums/object.enum';
import useSolarSystemStore from '../store/solarSystemStore';

const useCross = () => {
  const { selectedObject, setSelectedObject } = useSolarSystemStore();

  const [isOverlapping, setIsOverlapping] = useState(false);

  const rocketRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const mercuryRef = useRef<HTMLImageElement>(null);
  const venusRef = useRef<HTMLImageElement>(null);
  const earthRef = useRef<HTMLImageElement>(null);
  const marsRef = useRef<HTMLImageElement>(null);
  const jupiterRef = useRef<HTMLImageElement>(null);
  const saturnRef = useRef<HTMLImageElement>(null);
  const uranusRef = useRef<HTMLImageElement>(null);
  const neptuneRef = useRef<HTMLImageElement>(null);
  const cometRef = useRef<HTMLDivElement>(null);
  const asteroid1Ref = useRef<HTMLImageElement>(null);
  const asteroid2Ref = useRef<HTMLImageElement>(null);
  const asteroid3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const checkOverlap = () => {
      const rocketRect = rocketRef.current?.getBoundingClientRect();
      const objects = [
        { ref: sunRef, object: ESolarSystemObject.SUN },
        { ref: mercuryRef, object: ESolarSystemObject.MERCURY },
        { ref: venusRef, object: ESolarSystemObject.VENUS },
        { ref: earthRef, object: ESolarSystemObject.EARTH },
        { ref: marsRef, object: ESolarSystemObject.MARS },
        { ref: jupiterRef, object: ESolarSystemObject.JUPITER },
        { ref: saturnRef, object: ESolarSystemObject.SATURN },
        { ref: uranusRef, object: ESolarSystemObject.URANUS },
        { ref: neptuneRef, object: ESolarSystemObject.NEPTUNE },
        { ref: cometRef, object: ESolarSystemObject.COMET },
        { ref: asteroid1Ref, object: ESolarSystemObject.ASTEROID },
        { ref: asteroid2Ref, object: ESolarSystemObject.ASTEROID },
        { ref: asteroid3Ref, object: ESolarSystemObject.ASTEROID },
      ];

      let objectSelected = false;

      for (const { ref, object } of objects) {
        const rect = ref.current?.getBoundingClientRect();
        if (
          rocketRect &&
          rect &&
          rocketRect.left < rect.right &&
          rocketRect.right > rect.left &&
          rocketRect.top < rect.bottom &&
          rocketRect.bottom > rect.top
        ) {
          if (!isOverlapping) {
            setSelectedObject(object);
            setIsOverlapping(true);
          }
          objectSelected = true;
        }
      }

      if (!objectSelected && isOverlapping) {
        setSelectedObject(null);
        setIsOverlapping(false);
      }
    };

    document.addEventListener('keydown', checkOverlap);

    return () => {
      document.removeEventListener('keydown', checkOverlap);
    };
  }, [isOverlapping]);

  return {
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
  };
};

export default useCross;
