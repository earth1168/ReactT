import React, { Component } from 'react';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
//สร้าง component - JSX 

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      message:"Unlike",
      type:""
    }
    this.changeMessage=this.changeMessage.bind(this);
    this.insertData=this.insertData.bind(this);
  }

  changeMessage(){
    this.setState({message:"Like"});
  }
  insertData(){
    var item="React";
    var myArray=this.state.data;
    myArray.push(item);
    this.setState({data:myArray});

  }
  onChange(event){
    this.setState({type:event.target.value})
  }
  render(){ 
    return(
      <div>
            <h1>React</h1>
            <a href="/header">header</a> <br/>
            <a href="/content">content</a> <br/>
            <a href="/footer">footer</a>
     </div>
    );
  }
}



export default App;
