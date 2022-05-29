import { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import '../App.css';

export default function NavComp(props) {
    const {mode, setMode} = props;
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