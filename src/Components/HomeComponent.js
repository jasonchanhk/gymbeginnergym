import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import "../Css/Home.css"

function Home() {
    return (
        <div >
            <Carousel>
                <Carousel.Item className="carouselitem">
                    <img
                    className="d-block w-100"
                    height="100%"
                    src="/victor-freitas-WvDYdXDzkhs-unsplash.jpg"
                    alt="workout"
                    />
                    <Carousel.Caption>
                    <h3>StrongLifts 5×5:<br />Get Stronger Lifting Barbell 3 times/week</h3>
                    <p>We can build up your strength in 3 months time!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carouselitem">
                    <img
                    className="d-block w-100"
                    height="100%"
                    src="/mike-von-CX0zKCHOpJo-unsplash.jpg"
                    alt="nutrition"
                    />

                    <Carousel.Caption>
                    <h3>Understanding Nutrition: <br />Let Good Food Slim/Bulk You Down/Up</h3>
                    <p>Find your total daily energy expenditure (TDEE) to control your diet!</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item className="carouselitem">
                    <img
                    className="d-block w-100"
                    height="100%"
                    src="/luis-vidal-FodEsaNZs48-unsplash2.jpg"
                    alt="gymnearby"
                    />

                    <Carousel.Caption>
                    <h3>Looking For A Well-equipped <br />and Beginner-friendly GYM?</h3>
                    <p>You can expect the best coaching and the latest equipment from our health club.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="text-start">                
                <Row>
                    <Col lg="4" className="my-5 text-center">
                        <img
                        className="d-block object-fit rounded-circle mx-auto"
                        width="200"
                        height="200"
                        src="/hayley-kim-design-eot-ka5dM7Q-unsplash.jpg"
                        alt="Hayley Kim portrait"
                        />
                        <h2 className="mb-0 mt-3">Hayley Kim</h2>
                        <p className="text-muted mb-1">Fitness instructor</p>
                        <p>For a decade I’ve put myself in a position to gain vast amounts of experience in the fitness industry. From working with people of all ages from their early 20s to people in their 50s. </p>
                        <Button variant="warning" type="submit" className="orangebg">View details</Button>
                    </Col>
                    <Col lg="4" className="my-5 text-center">
                        <img
                        className="d-block object-fit rounded-circle mx-auto"
                        width="200"
                        height="200"
                        src="/logan-weaver-P6u6zGa6SKA-unsplash.jpg"
                        alt="Logan Weaver portrait"
                        />
                        <h2 className="mb-0 mt-3">Logan Weaver</h2>
                        <p className="text-muted mb-1">Peronal Trainner</p>
                        <p>Passionate about helping others achieve their fitness and weight-loss goals, I provide high-energy programs combining the latest techniques in nutrition and exercise science. </p>
                        <Button variant="warning" type="submit" className="orangebg">View details</Button>
                    </Col>
                    <Col lg="4" className="mt-5 text-center">
                        <img
                        className="d-block object-fit rounded-circle mx-auto"
                        width="200"
                        height="200"
                        src="/madison-lavern-4gcqRf3-f2I-unsplash.jpg"
                        alt="Madison Lavern portrait"
                        />
                        <h2 className="mb-0 mt-3">Madison Lavern</h2>
                        <p className="text-muted mb-1">Yoga Instructor</p>
                        <p>Yoga is a great exercise that help to get better posture. We can work into whatever areas you hold tension, with plenty of adjustments to ensure correct alignment, as desired. </p>
                        <Button variant="warning" type="submit" className="orangebg">View details</Button>
                    </Col>
                </Row>

                <hr className="mb-5"/>

                <Row>
                    <Col lg="7" className="mb-5">
                        <h2 className="display-4 mt-5">StrongLifts 5×5: <br /> Get Stronger Lifting Barbell 3 times/week</h2>
                        <p className="lead">
                            The StrongLifts 5×5 strength training program consists of two workouts that work with barbell.
                            Do three workouts per week and keep alternating them. We can build up your strength in 3 months time!<br />
                        </p>
                        <Button as={Link} variant="warning" type="button" to="/workout" className="orangebg">Checkout What Barbell Can Do</Button>
                    </Col>
                    <Col lg="5">
                        <img
                        className="d-block"
                        width="100%"
                        height="100%"                    
                        src="/mariah-krafft-KaxVB5xh4Nw-unsplash.jpg"
                        alt="Workout programme"
                        />
                    </Col>
                </Row>
                <hr className="my-5"/>
                <Row>                    
                    <Col lg="5">
                        <img
                        className="d-block"
                        width="100%"
                        height="100%"
                        src="/mike-von-FM1yYLAS6Ws-unsplash.jpg"
                        alt="TDEE calculator"
                        />
                    </Col>
                    <Col lg="7" >
                        <h2 className="display-4 mt-5">Understanding Nutrition: Let Good Food Slim/Bulk You Down/Up</h2>
                        <p className="lead">
                            You will have undoubtedly heard about the need for protein in your diet, 
                            but that is just the tip of the sports nutrition iceberg in. Find your total 
                            daily energy expenditure (TDEE) to control your diet!</p>
                        <Button as={Link} variant="warning" type="button" to="/nutrition" className="orangebg">Try Calculate Your TDEE</Button>
                    </Col>
                </Row>
                <hr className="my-5"/>
                <Row className="mb-5">
                    <Col lg="7" className="mb-5">
                        <h2 className="display-4 mt-5">Looking For A Well-equipped and Beginner-friendly GYM? </h2>
                        <p className="lead">
                        When it comes to exercise motivation, environment matters. You can expect the best coaching
                        and the latest equipment from our health club. Share your fitness goals with us and build a stronger body!  
                        </p>
                        <Button as={Link} variant="warning" type="button" to="/gymnearby" className="orangebg">Find the GBG GYM near you</Button>
                    </Col>
                    <Col lg="5">
                        <img
                        className="d-block"
                        width="100%"
                        height="100%"
                        src="/sam-moqadam-Z4Q9KHw9ofE-unsplash.jpg"
                        alt="Gym Location"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;