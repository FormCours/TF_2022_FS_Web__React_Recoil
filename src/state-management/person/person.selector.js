import { selector } from 'recoil';
import { personAtom } from './person.atom';

export const personFullnameSelector = selector({
  key: 'personFullnameSelector',
  get: ({get}) => {
    // Lecture des données de l'atom "person"
    const person = get(personAtom);

    // Envoi de la valeur transformé (Derived State)
    return person ? `${person.firstname} ${person.lastname}` : null;
  }
})