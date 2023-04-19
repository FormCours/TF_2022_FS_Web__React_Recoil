import { useCallback } from 'react';
import PersonForm from '../../components/person-form/person-form';
import { useRecoilState } from 'recoil';
import { personAtom } from '../../state-management/person/person.atom';

const PersonEncode = () => {

  // Récuperation en "lecture" et "ecriture" du state de 'personAtom'
  const [person, setPerson] = useRecoilState(personAtom);

  const handleEncoding = useCallback((personData) => {
    // Modifier le state de l'atom
    setPerson({ ...personData });
  });

  return (
    <>
      <h2>Veuillez encoder une personne</h2>
      <PersonForm onPersonSubmit={handleEncoding} />
    </>
  );
};

export default PersonEncode;