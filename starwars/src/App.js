import React, { Component } from "react"
import Container from "./components/Container"

import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            starwarsChars: [],
        }
    }

    componentDidMount() {
        this.getCharacters("https://swapi.co/api/people/")
    }

    getCharacters = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        fetch(URL)
            .then(res => {
                return res.json()
            })
            .then(data => {
                //console.log(data, "data") So data is something we name, the .results comes from looking at the API data, and seeing what it is listed as. We can name things on the LEFT side of out dots.
                this.setState({ starwarsChars: data.results })
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    render() {
        return (
            <div className='App'>
                <h1 className='Header'>React Wars</h1>
                <Container characters={this.state.starwarsChars} />;
                {/* Assigning characters to the props that we will pass (which is this.state.starwarsChars), in my component underneath this one, I will reference the props by  { characters } */}
            </div>
        )
    }
}

export default App
