import React, { Component } from 'react'

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
             this.setState({loading: true})
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(response => response.json())
                .then(pokemon => { this.setState({ pokemon }) })
                .finally(() => {this.setState({loading: false})})
        }
    }

    render() {
        return (
            <div>
                <h1>Pokemon info</h1>
                {this.state.loading && <p>Загружаем...</p>}
                {!this.state.pokemon && <div>Ведите имя покемона</div>}
                {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
                
            </div>
        )
    }
}



// export default class PokemonInfo extends Component {
//     state = {
//         pokemon: null,
//         loading: false,
//     }

//     componentDidMount() {
//         this.setState({ loading: true })
        
//         setTimeout(() => {
//             fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//             .then(response => response.json())
//             .then(pokemon => this.setState({ pokemon }))
//             .finally(() => this.setState({ loading: false }))
//         }, 2000)
        
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.loading && <p>Загружаем...</p>}
//                 {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//             </div>
             
//         )
//     }
// }