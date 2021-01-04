import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
  constructor(props){
    super(props);
}
  render(){
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
