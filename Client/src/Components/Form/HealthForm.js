import React from 'react'
import './HealthForm.css'
import axios from 'axios'
import {Form, Row, Button, Col, Container, Jumbotron } from 'react-bootstrap';
import { CountryDropdown} from 'react-country-region-selector';

export default function HealthForm() {
    const[email, setEmail] = React.useState('')
    const[idNum, setIdNum] = React.useState('')
    const[country, setCountry] = React.useState('')
    const[symptoms, setSymptoms] = React.useState('')
    const[beenCountry, setBeenCountry] = React.useState('')
    const[isolated, setIsolated] = React.useState('')
    const [error, setError] = React.useState('')
    const endPoint = "http://localhost:4000/forms"





    const submitHandle = async(e)=>{
        e.preventDefault()
        const config = {
            header:{"Content-Type":'application/json'}
        }
        try {
            const {data} =await axios.post(endPoint,{
                email:email,
                idNum:idNum,
                country:country,
                symptoms:symptoms,
                beenCountry:beenCountry,
                isolated:isolated
            },config)
            window.location = '/success'
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(()=>{
                setError('')
            },5000)
        }
    }
    return (
        
        <Container className = "container">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <Jumbotron>
                    <h1>MEDICAL REPORT FORM</h1>
                    <Form >
                    <Form.Group>
                        <h4>Personal information, Disease - Isolation - Exposure History</h4>
                        {error&&<p style={{color:"red"}}>*{error}</p>}
                        <Form.Label>First Name<span> (*)</span></Form.Label>
                        <Form.Row>
                        <Col>
                            <Form.Control type="text" name="firstName"></Form.Control>
                        </Col>
                        <Form.Label>Last Name<span> (*)</span></Form.Label>
                        <Col>
                            <Form.Control type="text" name = "lastName"></Form.Control>
                        </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email<span> (*)</span></Form.Label>
                        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTel">
                        <Form.Label>Contact phone number<span> (*)</span></Form.Label>
                        <Form.Control
                            type="telephone"
                        />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTel">
                        <Form.Label>Your ID number<span> (*)</span></Form.Label>
                        <Form.Control
                            type="text"
                            value={idNum} onChange={(e)=>setIdNum(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Enter your country<span> (*)</span></Form.Label>
                        <br></br>
                        <Form.Control
                            type="text"
                            value={country} onChange={(e)=>setCountry(e.target.value)}
                        />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Contact address<span> (*)</span></Form.Label>
                        <Form.Control placeholder="" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCityZip">
                        <Form.Label>Have you experienced any of the following symptoms within the past 14 days?<span> (*)</span></Form.Label>
                        <Form.Control
                            type="text"                       
                            value={symptoms} onChange={(e)=>setSymptoms(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Have you recently been directed to self-isolate or quarantine:<span> (*)</span></Form.Label>
                        <Form.Control placeholder=""value={isolated} onChange={(e)=>setIsolated(e.target.value)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Col} controlId="formGridArrive">
                        <Form.Label>Which country have you been to for the last 14 days?<span> (*)</span></Form.Label>
                        <Form.Control
                            type="text"
                            value={beenCountry} onChange={(e)=>setBeenCountry(e.target.value)}
                        />
                        </Form.Group>  
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
