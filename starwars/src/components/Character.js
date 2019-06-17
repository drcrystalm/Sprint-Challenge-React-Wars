import React from "react"

// const Character = props => {
//     //console.log(props)
//     return (
//         <div className='character-info'>
//             <h3 className='character-name'>Name: {props.characterObj.name}</h3>
//         </div>
//     )
// }

// const { name, gender, height, mass, hair_color } = props //Props is coming up undefined.
const Character = ({ name, gender }) => {
    return (
        <div>
            Name: {name}, Gender: {gender},
        </div>
    )
}

export default Character
