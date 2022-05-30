import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function Main(props) {
    const {list, setListing} = props;
    const [content, setContent] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(content) {
            const resp = await axios.post('http://localhost:8000/api/items/post', {content})
            setListing([...list, resp.data])
            e.target.reset();
            setContent(null)
        } else {
            alert("Blank Entry")
        }
    }
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
                <Col xs={12} sm={10} lg={10}>
                    <Form.Control type="text" onChange={(e) => setContent(e.target.value)}/>
                </Col>
                <Col xs={12} sm={2} lg={2} className="mt-2 mt-sm-0">
                    <Button className="w-100" type="submit">Add</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}