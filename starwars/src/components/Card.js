import React from "react"
import Character from "./Character"

const Card = props => {
    //  console.log(props)
    return (
        <div>
            <h1>StarWars Characters:</h1>
            {props.characters.map(character => {
                return (
                    <Character
                        key={character.created}
                        characterObj={character}
                    />
                )
            })}
        </div>
    )
}

export default Card
