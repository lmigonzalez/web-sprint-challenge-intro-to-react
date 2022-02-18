import React, { useState , useEffect} from 'react';
import './App.css';

import axios from 'axios';
import Characters from './components/Characters';
import styled from 'styled-components';


const StyledCharacters = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // flex-direction: column;
  align-items: center;
  background-color: ${props=> props.theme.white};
  opacity: 0.8;
  width: 90%;

`


const App = () => {

  const [ characters, setCharacters] = useState([]);

  useEffect(()=>{

    axios.get('https:swapi.dev/api/people')
    .then(res=>{
      // console.log(res.data.map((element)=>{
      //   console.log(element.name)
      // }))
      setCharacters(res.data)
    })
    .catch(err =>{
      console.error(err)
    })

  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledCharacters className="App">
      <Characters characters = {characters}></Characters>
    </StyledCharacters>
  );
}

export default App;
