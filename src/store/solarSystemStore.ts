import { create } from 'zustand';

import { ESolarSystemObject } from '../enums/object.enum';

interface IUseSolarSystemStore {
  selectedObject: ESolarSystemObject | null;
  setSelectedObject: (selectedObject: ESolarSystemObject | null) => void;
}

const useSolarSystemStore = create<IUseSolarSystemStore>((set) => ({
  selectedObject: null,
  setSelectedObject: (selectedObject: ESolarSystemObject | null) =>
    set((state) => ({ ...state, selectedObject })),
}));

export default useSolarSystemStore;
