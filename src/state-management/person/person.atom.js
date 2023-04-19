import { atom } from 'recoil';

// Un "atom" de recoil pour stocker le "state" d'une personne
export const personAtom = atom({
  key: 'personAtom', // Un Id unique
  default: null
});