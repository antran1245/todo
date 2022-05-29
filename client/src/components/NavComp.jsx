import { useContext, useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { ModeContext } from '../Context/ModeContext';
import '../App.css';

export default function NavComp() {
    const {mode, setMode} = useContext(ModeContext);
    
    return(
        <Nav className='justify-content-end'>
            {
                mode?
                <span onClick={() => setMode(false)}>&#x1F319;</span>:
                <span onClick={() => setMode(true)}>&#9728;</span>
            }
        </Nav>
    );
}