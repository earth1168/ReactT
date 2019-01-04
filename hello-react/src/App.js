import React, { Component } from 'react';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
//สร้าง component - JSX 

class App extends Component {
  render(){ 
    return(
      <div>
          <Header/>
          <Content title="Course React" name="Kongruksiam Studio" price="Free" />
          <Footer/>
     </div>
    );
  }
}



export default App;
