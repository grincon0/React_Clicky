import React, { Component } from 'react';
import Card from "../components/Card";
import Container from "../components/Container";
import Col from "../components/Col";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Photos from "../Photos.json";

class Main extends Component {
    state = {
        points: 0,
        highScore: 0,
        gameOver: false,
        animals: {...Photos}
    }
    componentDidMount() {
        console.log("Rendered");


    }
    render() {
        let photoGroup = Photos.map( pic => <Card id={pic.id} img={pic.src} />)


        return (
            <div>
                <Navbar />
                <Container>
                    
                    <Hero />
                    <Row>
                        <Col>
                            <ul>
                                {photoGroup}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

        );

    }

}

export default Main;