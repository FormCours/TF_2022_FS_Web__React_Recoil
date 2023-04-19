import { useState, useId } from 'react';

const PersonForm = ({ onPersonSubmit }) => {

  const idForm = useId();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handlePersonSubmit = (e) => {
    e.preventDefault();

    onPersonSubmit({
      firstname, lastname
    });

    setFirstname('');
    setLastname('');
  }

  return (
    <form onSubmit={handlePersonSubmit}>
      <div>
        <label htmlFor={idForm+'firstname'}>Prénom : </label>
        <input type="text" id={idForm+'firstname'} 
            value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
      </div>
      <div>
        <label htmlFor={idForm+'lastname'}>Nom : </label>
        <input type="text" id={idForm+'lastname'} 
            value={lastname} onChange={(e) => setLastname(e.target.value)}/>
      </div>
      <div>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
};

export default PersonForm;