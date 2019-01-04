import React, { Component } from 'react';
//สร้าง component - JSX 

class App extends Component {
  render(){ 
    var mystlye={
      fontSize:100,
      color:'#FF0000'
    }
    return(
      <div>
      <h1 style={mystlye}>React Tutorial</h1>
      <h2>{50*50}</h2> 
      </div>
    )
  }
}

export default App;
