import React from "react";
import Character from "./Character";
import styled from "styled-components";





const Characters = (props) =>{

return (
	props.characters.map((element, idx)=>{
		console.log(element)
		return <Character 
		name = {element.name} 
		birth_year = {element.birth_year}
		gender = {element.gender}
		height = {element.height}
		key = {idx}>

		</Character>
	})
)

}


export default Characters;