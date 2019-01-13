import React, { Component } from 'react';
import Footer from './components/Footer/index';
import Wrapper from './components/Wrapper';
import Main from './pages/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>

            <Main />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
