import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="bg-light text-dark">
            <h1 className="mt-5">About Online Pharmacy </h1>
            <p> Online based pharmacy where you can buy medicine ..We delivered it to your home</p>

            <div>
                <h1 className="text-warning">  Our Team</h1>
            </div>
            <Row>
                <Col>
                    <div className="card text-dark shadow-lg ms-5 me-5">
                        <img width="100%" height="400px" src="https://i.ibb.co/f16CPJr/doctor14jpg.jpg" alt="" />
                        <h6>John Wick</h6>
                        <p class="title"> Founder</p>


                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
                <Col>
                    <div className="card text-dark ms-5 me-5">
                        <img width="100%" height="400px" src="https://i.ibb.co/682VVj8/doctor3.jpg" alt="" />
                        <h6>David Latham</h6>
                        <p class="title">CEO</p>


                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
                <Col>
                    <div className="card text-dark ms-5 me-5">
                        <img width="100%" height="400px" src="https://i.ibb.co/z7MgmZf/doctor1.jpg" alt="" />
                        <h6>Tom Wright</h6>
                        <p class="title"> Founder</p>


                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
            </Row>
            <br />
            <br />

        </div>
    );
};

export default About;