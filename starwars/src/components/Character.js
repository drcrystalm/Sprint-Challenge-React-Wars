import React from "react"

const Character = props => {
    console.log(props)
    return (
        <div className='character-info'>
            <h3 className='character-name'>Name: {props.characterObj.name}</h3>
        </div>
    )
}

export default Character
