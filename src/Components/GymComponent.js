import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as gymData from "../Data/gym-location.json"
import mapStyles from "../Data/mapStyles";
import "../Css/Gym.css"

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Gym() {

    const [gymTable, setGymTable] = useState([]) 

    useEffect(() => {
        setGymTable(gymData.GymDetail)
    },[])
        
    const renderHeader = () => {
        let headerElement = ['id', 'Location', 'area', 'address']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return gymTable && gymTable.map( individual => {
            return (
                <tr key={individual.Properties.id}>
                    <td>{individual.Properties.id}</td>
                    <td>{individual.Location}</td>
                    <td>{individual.Properties.area}</td>
                    <td>{individual.Geometry.address}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <div>                   
                <img
                    className="d-block w-100 banner"
                    src={process.env.PUBLIC_URL + "/victor-freitas-JbI04nYfaJk-unsplash (1).jpg"}
                    alt="workout"
                />
            </div>
            <Container>
                <Row className="my-5"> 
                    <Col>
                        <h1 className="display-4">Looking For A Well-equipped and Beginner-friendly GYM?</h1>
                        <p className="lead">
                        When it comes to exercise motivation, environment matters. You can expect the best coaching
                        and the latest equipment from our health club. Share your fitness goals with us and build a stronger body!
                        </p>
                    </Col > 
                </Row>

                <WrappedMap 
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAYf5ahhyTNk4iT7OrVEflYw8MVN1yHDfg"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                className="my-5"
                />

                <Row className="my-5"> 
                    <Col>
                        <h1 className="display-4">Detail GYM Information</h1>
                        <div>
                            <Table id='gymtable'>
                                <thead>
                                    <tr>{renderHeader()}</tr>
                                </thead>
                                <tbody>
                                    {renderBody()}
                                </tbody>
                            </Table>
                        </div>
                    </Col > 
                </Row>          
            </Container>
        </div>
    )
}

function Map() {
    const [selectedGym, setSelectedGym] = useState(null);

    return (
        <div>
            <Container>                
                <Row>
                    <div >
                        <GoogleMap 
                            defaultCenter={{lat: 51.494048831632156, lng: -0.22408577612709696}}
                            defaultZoom={12}
                            defaultOptions={{styles: mapStyles}}                        >

                            {gymData.GymDetail.map( gym => {
                                return(
                                    <Marker 
                                    key={gym.Properties.id} 
                                    position={{lat: gym.Geometry.coordinates[0], lng: gym.Geometry.coordinates[1]}}
                                    onClick={() => {
                                        setSelectedGym(gym)
                                    }}
                                    icon={{
                                        url: process.env.PUBLIC_URL + "/barbell.svg",
                                        scaledSize: new window.google.maps.Size(25, 25)
                                    }}
                                    />                                    
                                )
                            })}

                            {selectedGym &&
                            (
                            <InfoWindow position={{lat: selectedGym.Geometry.coordinates[0], lng: selectedGym.Geometry.coordinates[1]}}
                            onCloseClick={() => {setSelectedGym(null)}}>
                                <div>
                                    <h5>{selectedGym.Properties.branch + " "+ selectedGym.Properties.area}</h5>
                                    <p>Address: {selectedGym.Geometry.address} <br /> {selectedGym.Properties.topComment + "    --" + selectedGym.Properties.author}</p>
                                </div>
                            </InfoWindow>
                            )}

                        </GoogleMap>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Gym;