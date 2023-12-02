import './App.css';
import { Greet } from './components/Greet';

// Type Inference: hover on App Component: to see the return type of App Component.
function App() {
  return (
    <div className="App">
      <Greet name="Lily" messageCount="" />
    </div>
  );
}

export default App;
