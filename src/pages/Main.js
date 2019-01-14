import React, { Component } from 'react';
import Container from "../components/Container";
import Col from "../components/Col";
import Card from "../components/Card"
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Photos from "../Photos.json";
import Footer from "../components/Footer";

class Main extends Component {
    state = {
        points: 0,
        highScore: 0,
        gameOver: false,
        animals: Photos
    }
    indexShuffle(){

    }
    randomizer(){
        return Math.floor(Math.random() * 12);
    }
    render() {
        let animals = Photos;
        let ani = animals.map(pic => <Card key={pic.id} img={pic.src} alt="red-panda" />);

        return (
            <div>
                <Navbar score={this.state.points} high={this.state.highScore} />
                <Hero />
                <Container>
                    
                        
                    <Row style={{margin: "5rem"}}>
                        <Col size="md-12">
                        {ani}
                        </Col>
                    </Row>
                    
                </Container>
                
                <Footer />
            
                
            
            </div>

        );

    }

}

export default Main;