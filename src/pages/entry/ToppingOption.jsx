import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const ToppingOption = ({ name, imagePath }) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
            <img
                style={{ width: '75%' }}
                src={`http://localhost:3030/${imagePath}`}
                alt={`${name} topping`}
            />
            <Form.Group
                controlId={`${name}`}
                as={Row}
                style={{ marginTop: '10px' }}
            >
                <Form.Label column xs="6" style={{ textAlign: 'right' }}>
                    {name}
                </Form.Label>
            </Form.Group>
        </Col>
    );
}

export default ToppingOption
