import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from 'axios'

export default function Create() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  })

  const handleUserAdd = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/users`, user)
    navigate('/Home');
  }

  return (
    <div>
      <Container>
        <Row style={{ marginTop: "50px" }} className="border w-[500px] hover:shadow-2xl  mx-auto ">
          <Col md={8} lg={6} xs={12}>
            <div className=""></div>
            <Card className="">
              <Card.Body>
                <div className="mb-3 mt-md-4 ">
                  <h2 className="fw-bold mb-5 text-center text-uppercase font-bold text-2xl ">Add User Form</h2>
                  <div className="mb-3">
                    <div className='flex justify-center items-center text-center '>
                      <Form onSubmit={handleUserAdd} className=''>
                        <Form.Group className="mb-3 grid grid-cols-2" controlId="Name">
                          <Form.Label className="">
                            Name
                          </Form.Label>
                          <Form.Control type="text" className='border-[2px] border-black ml-3' placeholder="Enter Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3 grid grid-cols-2" controlId="formBasicEmail">
                          <Form.Label className="">
                            Email
                          </Form.Label>
                          <Form.Control type="email" required className='border-[2px] border-black ml-3' placeholder="Enter email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </Form.Group>

                        <Form.Group
                          className="mb-3 grid grid-cols-2"
                          controlId="formBasicPassword"
                        >
                          <Form.Label className=''>Contact</Form.Label>
                          <Form.Control type="text" className='border-[2px] border-black ml-3' placeholder="Contact" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                        </Form.Group>

                        <Form.Group
                          className="mb-3 grid grid-cols-2"
                          controlId="formBasicPassword"
                        >
                          <Form.Label className=''>City</Form.Label>
                          <Form.Control type="text" className='border-[2px] border-black ml-3' placeholder="City" onChange={(e) => setUser({ ...user, city: e.target.value })} />
                        </Form.Group>
                        
                          <Button className='text-center border m-5 px-5 text-white bg-blue-500 rounded-md' variant="primary" type="submit">
                            Add User
                          </Button>
                      
                      </Form>
                    </div>
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
