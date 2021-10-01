import React from "react";
import { Container, Row, Col, Card, Tab, Tabs } from "react-bootstrap";

function bodyPart(arr, part){
    return ( arr.filter((oneEx) => {
        return ( oneEx.bodyPart == part
        )
    }))
}

function AllRelatedEx({ex}){
    return (
        <Card style={{ width: '16rem' }} className="my-2">
            <Card.Img variant="top" src={ex.gifUrl} />
            <Card.Body style={{ height: '5rem' }}>
                <Card.Title>{ex.name}</Card.Title>
            </Card.Body>  
        </Card>
    )
}

function Workout({exercises}) {

    console.log(exercises);

    return (
        <div >
            <div>                   
                <img
                    className="d-block w-100"
                    src="/victor-freitas-JbI04nYfaJk-unsplash (1).jpg"
                    alt="workout"
                />
            </div>
            <Container>
                <Row className="my-5"> 
                    <Col>
                        <h1 className="display-5">StrongLifts 5×5: <br /> The Best Beginner Workout Lifting Barbell </h1>
                        <p className="lead">
                            The StrongLifts 5×5 strength training program consists of two workouts:<br />
                            Workout A: Squat, Bench Press, Barbell Row<br />
                            Workout B: Squat, Overhead Press, Deadlift
                        </p>
                    </Col > 
                </Row>
                <Row md={6} className="my-2"> 
                    <Col md={6}>                       
                        <h4>What you should do</h4>
                        <p>Do three workouts per week. Never train two days in a row or do two workouts in a day. Wait one day before doing your next workout. This gives your body time to recover, get stronger and build muscle so you can lift heavier next workout. Alternate workout A and B each time you train.</p>
                    </Col >
                    <Col md={6}>                       
                        <h4>Why use Barbell</h4>
                        <p>Barbell is the second stable equipment you can get after machine in gym. Workout stable make sure you can increase your training weight and volume safely and quickly. In GBG, we always recommend Barbell exercise. And you, will be amazed how much potential you got in your body</p>
                    </Col >  
                </Row>

                <hr className="mb-5"/>

                <Row className="my-5">
                    <Col>                       
                        <h4 className="display-5">Know more about Barbell</h4>
                        <p className="lead">The StrongLifts 5x5 involve 6 barbell exercise that comprehensively trained your big muscles. <br />Try to find them below, pay attention to the animation and learn how to do the move.</p>
                    </Col >
                </Row>
                <Row>
                    <Tabs defaultActiveKey="chest" id="uncontrolled-tab-example" className="px-4">
                        <Tab eventKey="chest" title="Chest">
                            <Container>
                                <Row xs={1} sm={2} md={3}>
                                    {bodyPart(exercises, "chest").map((ex) => {
                                        return(
                                            <Col key={ex.id}>
                                                <AllRelatedEx ex={ex}/>
                                            </Col>
                                        )
                                    })}  
                                </Row>
                            </Container>        
                        </Tab>
                        <Tab eventKey="back" title="Back">
                            <Container>
                                <Row xs={1} sm={2} md={3}>
                                    {bodyPart(exercises, "back").map((ex) => {
                                        return(
                                            <Col key={ex.id}>
                                                <AllRelatedEx ex={ex}/>
                                            </Col>
                                        )
                                    })}  
                                </Row>
                            </Container>   
                        </Tab>
                        <Tab eventKey="shoulders" title="Shoulders">
                            <Container>
                                <Row xs={1} sm={2} md={3}>
                                    {bodyPart(exercises, "shoulders").map((ex) => {
                                        return(
                                            <Col key={ex.id}>
                                                <AllRelatedEx ex={ex}/>
                                            </Col>
                                        )
                                    })}  
                                </Row>
                            </Container>   
                        </Tab>
                        <Tab eventKey="upper arms" title="Upper Arms">
                            <Container>
                                <Row xs={1} sm={2} md={3}>
                                    {bodyPart(exercises, "upper arms").map((ex) => {
                                        return(
                                            <Col key={ex.id}>
                                                <AllRelatedEx ex={ex}/>
                                            </Col>
                                        )
                                    })}  
                                </Row>
                            </Container>   
                        </Tab>
                        <Tab eventKey="lower arms" title="Lower Arms">
                            <Container>
                                <Row xs={1} sm={2} md={3}>
                                    {bodyPart(exercises, "lower arms").map((ex) => {
                                        return(
                                            <Col key={ex.id}>
                                                <AllRelatedEx ex={ex}/>
                                            </Col>
                                        )
                                    })}  
                                </Row>
                            </Container>   
                        </Tab>
                        <Tab eventKey="waist" title="Waist">
                            <Container>
                                <Row xs={1} sm={2} md={3}>
                                    {bodyPart(exercises, "waist").map((ex) => {
                                        return(
                                            <Col key={ex.id}>
                                                <AllRelatedEx ex={ex}/>
                                            </Col>
                                        )
                                    })}  
                                </Row>
                            </Container>   
                        </Tab>
                        <Tab eventKey="upper legs" title="Upper Legs">
                            <Container>
                                <Row xs={1} sm={2} md={3}>
                                    {bodyPart(exercises, "upper legs").map((ex) => {
                                        return(
                                            <Col key={ex.id}>
                                                <AllRelatedEx ex={ex}/>
                                            </Col>
                                        )
                                    })}  
                                </Row>
                            </Container>   
                        </Tab>
                        <Tab eventKey="lower legs" title="Lower Legs" >
                            <Container>
                                <Row xs={1} sm={2} md={3}>
                                    {bodyPart(exercises, "lower legs").map((ex) => {
                                        return(
                                            <Col key={ex.id}>
                                                <AllRelatedEx ex={ex}/>
                                            </Col>
                                        )
                                    })}  
                                </Row>
                            </Container>   
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    )
}

export default Workout;