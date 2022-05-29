import { Container } from "react-bootstrap";
import { useState } from "react";
import Add from './Add';
import '../App.css';

export default function Main() {
    const [list, setListing] = useState([])
    return(
        <Container className="content mt-md-5 mt-3">
            <Add list={list} setListing={setListing}/>
        </Container>
    );
}