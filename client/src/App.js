import { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavComp from './components/NavComp';
import Main from './components/Main';
import morning from './morning.jpg';
import night from './night.jpg';
import './App.css';

function App() {
  const [mode, setMode] = useState(true)

  const backgroundStyle = {
    backgroundImage: `url(${mode?morning:night})`,
    backgroundColor: mode?'#FFCC8F':'#354259'
  }
  return (
    <Container className='App' fluid style={backgroundStyle}>
      <NavComp mode={mode} setMode={setMode}/>
      <Main />
    </Container>
  );
}

export default App;
