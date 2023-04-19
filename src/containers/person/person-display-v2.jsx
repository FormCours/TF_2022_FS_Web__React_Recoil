import { useRecoilValue } from 'recoil';
import { personFullnameSelector } from '../../state-management/person/person.selector';

const PersonDisplay = () => {

  // Récuperation de la valeur du state de 'personAtom'
  const person = useRecoilValue(personFullnameSelector);

  return (
    <>
      {!person ? (
        <h2>Aucune personne encodées</h2>
      ) : (
        <>
          <h2>Valeur de la personne encodées</h2>
          <p>{person}</p>
        </>
      )}
    </>
  );
};

export default PersonDisplay;