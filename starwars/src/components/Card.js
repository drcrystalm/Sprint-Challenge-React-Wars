import React from "react"
import Character from "./Character"

const Card = props => {
    console.log(props)
    return (
        <div>
            <h1>StarWars Character:</h1>
            {.map(character => {
                return <Character info={character} />
            })}
        </div>
    )
}

export default Card;
