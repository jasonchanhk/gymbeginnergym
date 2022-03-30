import { Container, Row, Col, Table, Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import "../Css/Nutrition.css";

function YourStat({ Nut }) {
    return (
        <div as={Col} class="table-responsive" >
            <Table bordered className="mb-5 text-center"  >
                <thead >
                    <tr>
                        <th> </th>
                        <th>Balanced</th>
                        <th>Low Carb</th>
                        <th>High Protein</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Protein</td>
                        <td>{Math.round(Nut.balanced?.protein)}g</td>
                        <td>{Math.round(Nut.lowcarbs?.protein)}g</td>
                        <td>{Math.round(Nut.highprotein?.protein)}g</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>{Math.round(Nut.balanced?.fat)}g</td>
                        <td>{Math.round(Nut.lowcarbs?.fat)}g</td>
                        <td>{Math.round(Nut.highprotein?.fat)}g</td>
                    </tr>
                    <tr>
                        <td>Carbs</td>
                        <td>{Math.round(Nut.balanced?.carbs)}g</td>
                        <td>{Math.round(Nut.lowcarbs?.carbs)}g</td>
                        <td>{Math.round(Nut.highprotein?.carbs)}g</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

function Nutrition() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [statInput, setStatInput] = useState({
        age: 25,
        gender: "male",
        height: 175,
        weight: 75,
        activityLevel: 3,
        goal: "maintain"
    });

    const [nutritionStat, setNutritionStat] = useState({
        "calorie": 2369.777025,
        "balanced": {
            "protein": 140.01077832335315,
            "fat": 65.27529529940108,
            "carbs": 305.56406350299386
        },
        "lowfat": {
            "protein": 154.07804350817716,
            "fat": 51.98952388312719,
            "carbs": 321.38978400478663
        },
        "lowcarbs": {
            "protein": 168.38640442593348,
            "fat": 78.9608563127258,
            "carbs": 246.39592512043345
        },
        "highprotein": {
            "protein": 197.3225439159292,
            "fat": 59.101438274336196,
            "carbs": 262.14347621681435
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        setStatInput(data);
    };

    useEffect(() => {
        async function getNutritionStat() {
            const response = await axios.request({
                method: 'GET',
                url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
                params: {
                    age: statInput.age,
                    gender: statInput.gender,
                    height: statInput.height,
                    weight: statInput.weight,
                    activitylevel: statInput.activityLevel,
                    goal: statInput.goal
                },
                headers: {
                    'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
                    'x-rapidapi-key': '341a03eda5msh10b4ad6b6bca891p1685a4jsndd453de6359a'
                }
            })
            const data = await response.data.data
            setNutritionStat(data)
            console.log(data)
        }
        getNutritionStat();
    }, [statInput])

    return (
        <div>
            <div>
                <img
                    className="d-block w-100 workout"
                    src={process.env.PUBLIC_URL + "/victor-freitas-JbI04nYfaJk-unsplash (1).jpg"}
                    alt="workout"
                />
            </div>
            <Container>
                <Row className="my-5">
                    <Col>
                        <h1 className="display-4">Understanding Nutrition: Let Good Food Help Achieve Your Fitness Goal </h1>
                        <p className="lead">
                            Trying to dial in your nutrition for your physique or athletic goals? Then you need to know your current total daily energy expenditure (TDEE), or the number of calories you burn each day. Eat more than this amount and you can expect to gain weight. Eat less than this amount and you'll set yourself up to lose weight.
                        </p>
                        <p className="lead">
                            The two tools below can help you better understand the fundamental of sports nutrition. After calculating your TDEE, identifying your fitness goal and knowing the nutrition value for common food, you are ready to restructure your diet and start going to gym!
                        </p>
                    </Col >
                </Row>

                <hr className="mb-5" />

                <Row className="my-5">
                    <Col>
                        <h4 className="display-4">Total Daily Energy Expenditure (TDEE) Calculator</h4>
                    </Col >
                </Row>
                <Row>
                    <Col lg="5" className="mb-5">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <h3>TDEE Calculator</h3>
                            <Row >
                                <Form.Group as={Col} md="6">
                                    <Form.Label column mb={4}>Age</Form.Label>
                                    <Form.Control type="number" placeholder="" {...register("age", { required: "*required", min: 0, max: { value: 80, message: "*please provide an age under 80" } })} />
                                    <ErrorMessage errors={errors} name="age" render={({ message }) => <p className="err text-muted mb-0">{message}</p>} />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label column mb={4}>Gender</Form.Label>
                                    <Form.Select aria-label="Default select example" {...register("gender", { required: true })}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label column lg={4}>Weight</Form.Label>
                                    <Form.Control type="number" placeholder="kg" {...register("weight", { required: "*required", min: { value: 40, message: "*please provide a weight above 40 kg" }, max: { value: 160, message: "*please provide a weight below 160 kg" } })} />
                                    <ErrorMessage errors={errors} name="weight" render={({ message }) => <p className="err text-muted mb-0">{message}</p>} />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label column lg={4}>Height</Form.Label>
                                    <Form.Control type="number" placeholder="cm" {...register("height", { required: "*required", min: { value: 130, message: "*please provide a height above 130 cm" }, max: { value: 230, message: "*please provide a height below 230 cm" } })} />
                                    <ErrorMessage errors={errors} name="height" render={({ message }) => <p className="err text-muted mb-0">{message}</p>} />
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group as={Col} md="12">
                                    <Form.Label column lg={4}>Activity Level</Form.Label>
                                    <Form.Select {...register("activityLevel")}>
                                        <option value="1">1/ Sedentary (office job)</option>
                                        <option value="2">2/ Light exercise (1-2 days/week)</option>
                                        <option value="3">3/ Moderate exercise (3-5 days/week)</option>
                                        <option value="4">4/ Heavy exercise (6-7 days/week)</option>
                                        <option value="5">5/ Athlete</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <br />
                            <Row>
                                <Form.Group as={Col} md="12">
                                    <Form.Label column lg={4}>Goal</Form.Label>
                                    <Form.Select  {...register("goal")}>
                                        <option value="maintain">Maintain</option>
                                        <option value="weightgain">Weight Gain</option>
                                        <option value="weightlose">Weight Lose</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <br />
                            <Button variant="warning" type="submit" className="orangebg">Caculate</Button>
                        </Form>
                    </Col>
                    <Col lg="7">
                        <Row>
                            <Col md="6">
                                <Card className="mb-2">
                                    <Card.Header as="h3" className="text-center">Your Statistics</Card.Header>
                                    <Card.Body>
                                        <Table hover>
                                            <tbody>
                                                <tr>
                                                    <td>Age</td>
                                                    <td>{statInput.age}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gender</td>
                                                    <td>{statInput.gender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Height</td>
                                                    <td>{statInput.height}</td>
                                                </tr>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td>{statInput.weight}</td>
                                                </tr>
                                                <tr>
                                                    <td>Activity Level</td>
                                                    <td>{statInput.activityLevel}</td>
                                                </tr>
                                                <tr>
                                                    <td>Goal</td>
                                                    <td>{statInput.goal}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Row>
                                    <Col>
                                        <Card className="text-center">
                                            <Card.Header as="h3" >Daily Calories</Card.Header>
                                            <Card.Body>
                                                <Card.Title className="fw-bold" as="h1">{Math.round(nutritionStat.calorie) || 0}</Card.Title>
                                                <Card.Subtitle className="my-2 text-muted">calories per days</Card.Subtitle>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card className="mt-4 text-center">
                                            <Card.Header as="h3" className="">Weekly Calorie</Card.Header>
                                            <Card.Body>
                                                <Card.Title className="fw-bold" as="h1">{Math.round(nutritionStat.calorie * 7) || 0}</Card.Title>
                                                <Card.Subtitle className="my-2 text-muted">calories per week</Card.Subtitle>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3 className="text-center mt-2">Macronutrients</h3>
                                {nutritionStat && <YourStat as={Col} Nut={nutritionStat} />}
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr className="mb-5" />

                <Row className="my-5">
                    <Col>
                        <h4 className="display-4">Nutrition value for common food</h4>
                    </Col >
                </Row>
                <Row>
                    <Col lg="4" className="mb-5">
                        <h4>Protein in the diet</h4>
                        <div className="hovereffect">
                            <a href={process.env.PUBLIC_URL + "/ProteinList.pdf"} download >
                                <img className="d-block w-100 download" src={process.env.PUBLIC_URL + "/ProteinList.jpg"} alt="protein in the diet" />
                                <span>
                                    <img className="download-text" src={process.env.PUBLIC_URL + "/direct-download.svg"} alt="download" />
                                </span>
                            </a>
                        </div>
                    </Col>
                    <Col lg="4" className="mb-5">
                        <h4>Fat in the diet</h4>
                        <div className="hovereffect">
                            <a href={process.env.PUBLIC_URL + "/FatList.pdf"} download>
                                <img className="d-block w-100 download" src={process.env.PUBLIC_URL + "/FatList.jpg"} alt="fat in the diet" />
                                <span>
                                    <img className="download-text" src={process.env.PUBLIC_URL + "/direct-download.svg"} alt="download" />
                                </span>
                            </a>
                        </div>
                    </Col>
                    <Col lg="4" className="mb-5">
                        <h4>Carbs in the diet</h4>
                        <div className="hovereffect">
                            <a href={process.env.PUBLIC_URL + "/CarbList.pdf"} download>
                                <img className="d-block w-100 download" src={process.env.PUBLIC_URL + "/CarbList1.jpg"} alt="carbs in the diet" />
                                <span>
                                    <img className="download-text" src={process.env.PUBLIC_URL + "/direct-download.svg"} alt="download" />
                                </span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Nutrition;