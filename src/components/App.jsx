import React, { Component } from 'react';
import PokemonInfo from 'components/PokemonInfo';
import PokemonForm from 'components/PokemonForm';

import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    pokemonName: '',
  }
  
  handleSubmitForm = (pokemonName) => {
    this.setState({ pokemonName })
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101'
        }}
      >
        <PokemonForm onChange={this.handleSubmitForm} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer />
      </div>
    )
  }    
};
