import React from "react"
import Character from "./Character"

const Container = ({ characters }) => {
    //named characters because that's what I called my props on App.js, must be in a {} so that it can access correctly. Look object destructuring.
    console.log(characters)
    return (
        <div>
            <h1>StarWars Characters:</h1>
            {characters.map(character => {
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

export default Container
