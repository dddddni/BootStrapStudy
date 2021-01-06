import React, { Component } from 'react';
import Header from './Main/Header';
import Footer from './Main/Footer';
import Content from './Main/Content';

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
