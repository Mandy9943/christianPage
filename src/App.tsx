import React from 'react';
import logo from './logo.svg';
import './App.css';
import Encabezado from './Components/Encabezado/Encabezado';
import styled from 'styled-components';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';

function App() {
  return (
    <AppS>
      <header className="App-header">
        <Encabezado />
        <IconoS>

        <img src={logo} className="App-logo" alt="logo" />
        </IconoS>
        
        <PersonalInfo />
      </header>
    </AppS>
  );
}

export default App;

const AppS = styled.div`
 background-image: url("/images/img.jpg");
 background-repeat: no-repeat;
 background-size: cover;
`
const IconoS = styled.div`
 display:flex;
 justify-content:center;
 margin-top: 50px;
  @media(max-width: 500px) {
    justify-content:start;
    margin: -20px 0 0 -25px;
  }
`