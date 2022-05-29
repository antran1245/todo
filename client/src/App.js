import { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavComp from './components/NavComp';
import morning from './morning.jpg';
import './App.css';

function App() {
  const [mode, setMode] = useState(true)

  const backgroundStyle = {
    backgroundImage: `url(${morning})`,
    backgroundColor: `#FFCC8F`
  }
  return (
    <Container className='App' fluid style={backgroundStyle}>
      <NavComp mode={mode} setMode={setMode}/>
    </Container>
  );
}

export default App;
