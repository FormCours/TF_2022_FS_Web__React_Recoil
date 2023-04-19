import { useRecoilValue } from 'recoil';
import { personAtom } from '../../state-management/person/person.atom';

const PersonDisplay = () => {

  // Récuperation de la valeur du state de 'personAtom'
  const person = useRecoilValue(personAtom);

  return (
    <>
      {!person ? (
        <h2>Aucune personne encodées</h2>
      ) : (
        <>
          <h2>Valeur de la personne encodées</h2>
          <p>{person.firstname} {person.lastname}</p>
        </>
      )}
    </>
  );
};

export default PersonDisplay;