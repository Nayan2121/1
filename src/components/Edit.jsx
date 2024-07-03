import React, { useEffect, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


function Edit() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        city: ''
    })


    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data);
    }


    const handleUserEdit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user)
        navigate('/Home');
    }

    return (
        <>
            <div>
                <Container>
                    <Row style={{ marginTop: "50px" }} className="border w-[500px] hover:shadow-2xl  mx-auto ">
                        <Col md={8} lg={6} xs={12}>
                            <div className=""></div>
                            <Card className="">
                                <Card.Body>
                                    <div className="mb-3 mt-md-4 ">
                                        <h2 className="fw-bold mb-5 text-center text-uppercase font-bold text-2xl ">Edit User Form</h2>
                                        <div className="mb-3">
                                            <div className='flex justify-center items-center text-center '>
                                                <Form onSubmit={handleUserEdit}>
                                                    <Form.Group className="mb-3 grid grid-cols-2" controlId="Name">
                                                        <Form.Label className="">
                                                            Name
                                                        </Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Name"
                                                            className='border-[2px] border-black ml-3'
                                                            value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3 grid grid-cols-2" controlId="formBasicEmail">
                                                        <Form.Label className="text-center">
                                                            Email
                                                        </Form.Label>
                                                        <Form.Control type="email"  className='border-[2px] border-black ml-3' placeholder="Enter email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                                    </Form.Group>

                                                    <Form.Group
                                                        className="mb-3 grid grid-cols-2"
                                                        controlId="formBasicPassword"
                                                    >
                                                        <Form.Label>Contact</Form.Label>
                                                        <Form.Control type="text"  className='border-[2px] border-black ml-3' placeholder="Contact" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                                    </Form.Group>

                                                    <Form.Group
                                                        className="mb-3 grid grid-cols-2"
                                                        controlId="formBasicPassword"
                                                    >
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control type="text" className='border-[2px] border-black ml-3' placeholder="City" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })} />
                                                    </Form.Group>
                                                    <div className='text-center border px-5 text-white bg-blue-500 rounded-md'>
                                                        <Button variant="primary" type="submit">
                                                            Edit User
                                                        </Button>
                                                    </div>
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
        </>
    )
}

export default Edit