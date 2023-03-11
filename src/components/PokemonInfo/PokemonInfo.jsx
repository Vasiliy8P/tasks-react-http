import React, { Component } from 'react';
import PokemonErrorView from 'components/PokemonErrorView';
import PokemonDataView from 'components/PokemonDataView';
import PokemonPendingView from 'components/PokemonPendingView';

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
            this.setState({pokemon: null, status: 'penging'})
            setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    
                    return Promise.reject(
                        new Error(`Нет покемона с именем ${this.props.pokemonName}`)
                    )                    
                })
                .then(pokemon => { this.setState({ pokemon, status: 'resolved' }) })
                .catch(error => {
                    this.setState({ error, status: 'rejected' })
                })
            }, 2000)
        }
    }

    render() {
        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        if (status === 'idle') {
            return <div>Ведите имя покемона</div>
        }

        if (status === 'penging') {
            return <PokemonPendingView pokemonName={ pokemonName } />
        }

        if (status === 'rejected') {
            return <PokemonErrorView message={ error.message } />
        }

        if (status === 'resolved') {
            return <PokemonDataView pokemon={ pokemon } />
        }
    }
}

// =============================================================================

// export default class PokemonInfo extends Component {
//     state = {
//         pokemon: null,
//         loading: false,
//         error: null,
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.pokemonName !== this.props.pokemonName) {
//             this.setState({loading: true, pokemon: null})
//             fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json()
//                     }
                    
//                     return Promise.reject(
//                         new Error(`Нет покемона с именем ${this.props.pokemonName}`)
//                     )                    
//                 })
//                 .then(pokemon => { this.setState({ pokemon }) })
//                 .catch(error => {
//                     this.setState({ error })
//                 })
//                 .finally(() => {this.setState({loading: false})})
//         }
//     }

//     render() {
//         const { pokemon, loading, error } = this.state;
//         const { pokemonName } = this.props;

//         return (
//             <div>
//                 <h1>Pokemon info</h1>
//                 {error && <p>{ error.message }</p> }
//                 {loading && <p>Загружаем...</p>}
//                 {!pokemonName && <div>Ведите имя покемона</div>}
//                 {pokemon && (
//                     <div>
//                         <p>{pokemon.name}</p>
//                         <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} width='180'/>
//                     </div>
//                 )}                
//             </div>
//         )
//     }
// }

// =============================================================================

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