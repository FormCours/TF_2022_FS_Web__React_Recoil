import './App.css'
import PersonDisplay from './containers/person/person-display-v2';
import PersonEncode from './containers/person/person-encode';

function App() {

  return (
    <div className="App">
      <h1>Demo de l'utilisation de Recoil</h1>
      <PersonEncode />
      <PersonDisplay />
    </div>
  )
}

export default App
