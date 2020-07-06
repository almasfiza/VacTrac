import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Jumbotron from './components/homepage/Jumbotron';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Appbar />
      <Jumbotron />
      <Footer />
      

      
    </div>
  );
}

export default App;
