import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from 'axios'

export default function Create() {

  const navigate = useNavigate();
 const [user,setUser] = useState({
    name:'',
    email:'',
    phone:'',
    city:''
 })

const handleUserAdd = (e) => {
  e.preventDefault();
  axios.post(`http://localhost:3001/users`,user)
  navigate('/Home');
}

  return (
    <div>
      <Container>
        <Row style={{marginTop:"50px"}} className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Add User Form11</h2>
                  <div className="mb-3">

                    <Form onSubmit={handleUserAdd}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> setUser({...user , name:e.target.value})}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setUser({...user , email:e.target.value})}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" placeholder="Contact" onChange={(e)=> setUser({...user , phone:e.target.value})}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" onChange={(e)=> setUser({...user , city:e.target.value})}/>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Add User
                        </Button>
                      </div>
                      
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
