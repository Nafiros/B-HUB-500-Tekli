import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="rootView">
        <Header />
        <Content />
      </div>
    );
  }
}



export default App;
