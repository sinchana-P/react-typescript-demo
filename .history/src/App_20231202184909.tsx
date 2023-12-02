import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

// Type Inference: hover on App Component: to see the return type of App Component.
function App() {

  const personName = {
    first: "Sinch",
    last: "lili"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]

  return (
    <div className="App">
      <Greet name="Lily" messageCount={20} isLoggedIn={ true } />
      <Person name={personName} />
      <PersonList names={nameList} />
      <S
    </div>
  );
}

export default App;
