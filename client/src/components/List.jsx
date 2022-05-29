import { useContext, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { ModeContext } from '../Context/ModeContext';

export default function List(props) {
    const {list, setListing} = props;
    const {mode} = useContext(ModeContext);

    const light = {
        backgroundColor: 'rgba(0, 0, 0, 0.151)'
    }
    const dark = {
        backgroundColor: 'rgba(255, 255, 255, 0.541)',
        color: 'white'
    }
    const removeItem = (index) => {
        let newList = list.filter((element, i) => index != i)
        setListing(newList)
    }
    return(
        <div className="listing" style={mode?light:dark}>
        {
            list && list.map((item, i) => {
                return (
                <Row key={i} className="py-2 px-2">
                    <Col xs={10}>
                        {item}
                    </Col>
                    <Col xs={2}>
                        <Button variant='danger' className='w-100' onClick={() => removeItem(i)}>&#10005;</Button>
                    </Col>
                </Row>
                );
            })
        }
        </div>
    );
}