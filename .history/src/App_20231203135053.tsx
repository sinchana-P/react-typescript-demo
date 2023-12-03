import { log } from 'console';
import './App.css';
import Button from './components/Button';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import { Input } from './components/Input';
import { Container } from './components/Container';

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
      <p>Greet</p>
      <Greet name="Lily" messageCount={20} isLoggedIn={ true } />
      
      <p>Person</p>
      <Person name={personName} />

      <p>PersonList</p>
      <PersonList names={nameList} />

      <p>Status</p>
      <Status status="success" />

      <p>Heading</p>
      <Heading>Placeholder Text</Heading>

      <p>Oscar</p>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicarpio!</Heading>
      </Oscar>

      <p>Greet</p>
      <Greet name="Lily" isLoggedIn={false} />
      
      {/* 6. Event Props */}
      <p>Event Props</p>
      <Button handleClick={() => {
        console.log('Button Clicked');       
      }} />
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id);       
      }} />
      <Input value='' handleChange={event => console.log(event)} />
    
      {/* 7. Style Props  */}
      <Container styles={{ border: '3px solid black', padding: '1rem' }} />

    
    </div>
  );
}

export default App;
