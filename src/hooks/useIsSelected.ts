import { useEffect, useState } from 'react';

import { ESolarSystemObject } from '../enums/object.enum';
import useSolarSystemStore from '../store/solarSystemStore';

const useIsSelected = (object: ESolarSystemObject) => {
  const { selectedObject } = useSolarSystemStore();
  const [isSelected, setIsSelected] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedObject === object);
    setHasSelected(selectedObject !== null);
  }, [selectedObject]);

  return { hasSelected, isSelected };
};

export default useIsSelected;
