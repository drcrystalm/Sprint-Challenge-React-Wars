import React from "react"
// import Character from './Character'

const StarWarsChar = props => {
    console.log(props)
    return (
        <div>
            <h1>StarWars Character:</h1>
            {starwarsChars.map(character => {
                return <Character info={character} />
            })}
        </div>
    )
}

export default StarWarsChar
