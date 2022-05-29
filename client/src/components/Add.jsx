import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';

export default function Main(props) {
    const {list, setListing} = props;
    const [item, setItem] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(item) {
            setListing([...list, item])
            alert(item)
            e.target.reset();
            setItem(null)
        } else {
            alert("Blank Entry")
        }
    }
    return(
        <Row> 
            <Col xs={12} sm={{span: 6, offset: 3}} className="mt-3">
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row}>
                        <Col xs={12} sm={10}>
                            <Form.Control type="text" onChange={(e) => setItem(e.target.value)}/>
                        </Col>
                        <Col xs={12} sm={2}>
                            <Button className="w-100" type="submit">Add</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}