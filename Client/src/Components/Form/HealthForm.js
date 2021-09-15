import React from 'react'
import './HealthForm.css'
import {Form, Row, Button, Col, Container, Jumbotron } from 'react-bootstrap';
import { CountryDropdown} from 'react-country-region-selector';

export default function HealthForm() {

    const submitHandle =()=>{window.location = '/success'}
    return (
        
        <Container className = "container">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <Jumbotron>
                    <h1>MEDICAL REPORT FORM</h1>
                    <Form >
                    <Form.Group>
                        <h4>Personal information, Disease - Isolation - Exposure History</h4>
                        <Form.Label>First Name<span> (*)</span></Form.Label>
                        <Form.Row>
                        <Col>
                            <Form.Control type="text" required></Form.Control>
                        </Col>
                        <Form.Label>Last Name<span> (*)</span></Form.Label>
                        <Col>
                            <Form.Control type="text" required></Form.Control>
                        </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email<span> (*)</span></Form.Label>
                        <Form.Control type="email" required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTel">
                        <Form.Label>Contact phone number<span> (*)</span></Form.Label>
                        <Form.Control
                            type="telephone"
                            required
                        />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTel">
                        <Form.Label>Your ID number<span> (*)</span></Form.Label>
                        <Form.Control
                            type="text"
                            required
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Select your country<span> (*)</span></Form.Label>
                        <br></br>
                        <CountryDropdown required
                        />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Contact address<span> (*)</span></Form.Label>
                        <Form.Control placeholder=""required />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCityZip">
                        <Form.Label>Have you experienced any of the following symptoms within the past 14 days?<span> (*)</span></Form.Label>
                        <Form.Control
                            type="text"                       
                            required
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Have you recently been directed to self-isolate or quarantine:<span> (*)</span></Form.Label>
                        <Form.Check
                        type="radio"
                        label="Yes"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="No"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />

                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Col} controlId="formGridArrive">
                        <Form.Label>Have you been to any countries for the last 14 days?<span> (*)</span></Form.Label>
                        <Form.Control
                            type="text"
                            required
                        />
                        </Form.Group>

                        
                    <br />
                    <br />
                    <Button variant="primary" type="submit" onClick={submitHandle}>
                    Submit
                </Button>
                    </Form>
                </Jumbotron>
                
                
                </Col>
                
                
            </Row>
        </Container>
        
    )
}
