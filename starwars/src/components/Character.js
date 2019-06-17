import React from "react"

import "./StarWars.css"

const Character = props => {
    console.log(props)
    return (
        <div className='character-info'>
            <h2 className='character-name'>{props.characterObj.name}</h2>
            <p>Gender: {props.characterObj.gender}</p>
            <p>Height: {props.characterObj.height}</p>
            <p>Mass: {props.characterObj.mass}</p>
            <p>Hair Color: {props.characterObj.hair_color}</p>
        </div>
    )
}

// const { name, gender, height, mass, hair_color } = props //Props is coming up undefined.
// const Character = ({ name, gender }) => {
//     return (
//         <div>
//             <h3>
//                 Name: {name}
//                 Gender: {gender}{" "}
//             </h3>
//         </div>
//     )
// }

// Look up restructuring later, but for this sprint just decided to pass props to access the key: value pairs

export default Character
