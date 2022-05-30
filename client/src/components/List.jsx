import { useContext } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { ModeContext } from '../Context/ModeContext';
import axios from 'axios';

export default function List(props) {
    const {list, setListing} = props;
    const {mode} = useContext(ModeContext);

    const light = {
        backgroundColor: 'rgba(0, 0, 0, 0.151)',
        color: 'white'
    }
    const dark = {
        backgroundColor: 'rgba(255, 255, 255, 0.541)',
        color: 'white'
    }
    const removeItem = async(id) => {
        await axios.delete(`http://localhost:8000/api/item/${id}`)
        let newList = list.filter((element, i) => id !== element._id)
        setListing(newList)
    }
    return(
        <>
        {
            list && list.map((item, i) => {
                return (
                <Row key={i} className="p-2 mt-2 listing" style={mode?light:dark}>
                    <Col xs={10}>
                        {item.content}
                    </Col>
                    <Col xs={2}>
                        <Button variant='danger' className='w-100' onClick={() => removeItem(item._id)}>&#10005;</Button>
                    </Col>
                </Row>
                );
            })
        }
        </>
    );
}