// Write your Character component here
import React from "react";
import styled from "styled-components";


const StyledCharacter = styled.div`

	background-color: ${props => props.theme.lightblue};
	width: 30%;
	height: auto;
	margin: 10px;
	padding: 10px;
	border-radius: 10px;
	-webkit-box-shadow: 14px 11px 15px -5px rgba(0,0,0,0.55); 
	box-shadow: 14px 11px 15px -5px rgba(0,0,0,0.55);

`

const Character = (props) =>{

	return(

		<StyledCharacter>
		
		<h2>{props.name}</h2>
		<p>{props.birth_year}</p>
		<p>{props.gender}</p>
		<p>{props.height}</p>
		</StyledCharacter>
		
		
		
	)
}

export default Character;