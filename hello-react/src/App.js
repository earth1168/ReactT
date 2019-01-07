import React, { Component } from 'react';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
//สร้าง component - JSX 

class App extends Component {
  render(){ 
    return(
      <div>
        <h1>React</h1>
        <h1><a href="/header">Header</a></h1>
        <h1><a href="/content">Content</a></h1>
        <h1><a href="footer">Footer</a></h1>
     </div>
    );
  }
}

export default App;
