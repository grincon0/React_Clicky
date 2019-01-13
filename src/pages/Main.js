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
        animals: [...Photos]
    }
    componentDidMount() {
        console.log("Rendered");

    }
    changeIndex(){
        const rnd = this.randomizer();
        let array = [...this.state.animals];

        for(let i = 0; i < array.length;i++){
            array[i].id = rnd();
        }

        this.sort(array);

    }
    sort(arr){

        for(let i = 0; i < arr.length; i++){
            for(let a = 0; a < arr.length; a++){
                if(arr[a] > arr[a + 1]){
                    let lesser = arr[a + 1];
                    arr[a + 1] = arr[a];
                    arr[a] = lesser;
                }
            }

        }

        this.shuffle(arr);

    }
    shuffle(arr){
        this.setState(this.state.animals = arr);
    }
    randomizer(){
        return Math.floor(Math.random() * 12);
    }
    render() {
        let animals = this.state.animals.map(pic => <Card id={pic.id} img={pic.src} />)
        return (
            <div>
                <Navbar score={this.state.points} highScore={this.state.highScore} />
                <Container>
                    
                    <Hero />
                    <Row>
                        <Col size="md-12">
                            {animals}
                        </Col>
                    </Row>
                </Container>
            </div>

        );

    }

}

export default Main;