import React, { Component } from 'react';
import Container from "../components/Container";
import Col from "../components/Col";
import Card from "../components/Card"
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Photos from "../Photos.json";
import Footer from "../components/Footer";
import "./style.css";

class Main extends Component {
    state = {
        points: 0,
        highScore: 0,
        gameOver: false,
        animals: Photos,
        clicked: []
    }
    indexShuffle(arr){
        for(let i = 0; i < arr.length; i++){
            let rnd = Math.floor(Math.random() * arr.length);
            let temp = arr[i];
            arr[i] = arr[rnd];
            arr[rnd] = temp;
        }
        
        return arr;

    }
    handlePhotoClick = (i) => {
        const id = i;
        let newState = {...this.state}
        for(let i = 0; i < this.state.clicked.length; i++){
            if(this.state.clicked[i] === id){
                this.toggleIncorrect();
                return this.setState({
                    points: 0,
                    gameOver: false,
                    animals: this.indexShuffle(newState.animals),
                    clicked: []
                });
            }
        }
        
        newState.clicked.push(id);
        newState.points++;

        if(newState.highScore < newState.points){
            newState.highScore = newState.points;
        }
        newState.animals = this.indexShuffle(newState.animals);

        this.setState(newState);
        

     
            
       
    }
    toggleIncorrect(){
        const elems = document.querySelectorAll('.foxes');
        console.log('toggled');

        elems.forEach( elem => {
            elem.classList.add('wrong');
        });

        setTimeout(()=> {
            elems.forEach( elem => {
                elem.classList.remove('wrong');
            });
        }, 1050);
    }
    render() {
        let animals = this.state.animals;
        let cards = animals.map(pic => <Card onClick={() => this.handlePhotoClick(pic.id)} data-value={pic.id} key={pic.id} img={pic.src} alt="red-panda" />);

        return (
            <div>
                <Navbar score={this.state.points} high={this.state.highScore} />
                <Hero />
                <Container>
                    <Row  style={{margin: "5rem"}}>
                        <Col size="md-12">
                        {cards}
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>

        );

    }

}

export default Main;