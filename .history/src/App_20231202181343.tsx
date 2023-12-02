import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';

// Type Inference: hover on App Component: to see the return type of App Component.
function App() {

  const personName = {
    first: "Sinch",
    last: "Lily"
  }

  return (
    <div className="App">
      <Greet name="Lily" messageCount={20} isLoggedIn={ true } />
      <Person name />
    </div>
  );
}

export default App;