import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Add from './Add';
import List from "./List";
import '../App.css';

export default function Main() {
    const [list, setListing] = useState([])

    return(
        <Container className="mt-md-5 mt-3">
            <Row> 
                <Col xs={12} lg={{span: 6, offset: 3}} className="mt-3">
                    <Add list={list} setListing={setListing}/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={12} lg={{span: 6, offset: 3}}>
                    <List list={list} setListing={setListing}/>
                </Col>
            </Row>
        </Container>
    );
}