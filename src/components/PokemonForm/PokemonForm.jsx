import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default class PokemonForm extends Component {
    state = {
        pokemonName: '',
    }

    handleSubmit = event => {
        event.preventDefault();
        
        if (this.state.pokemonName.trim() === '') {
            // const notify = () => toast("Введите имя покемона!");
            alert('Введите имя покемона!')
            return
        }

        this.props.onChange(this.state.pokemonName)
        this.setState({ pokemonName: '' })
    }

    handleNameChange = event => {
        this.setState({ pokemonName: event.currentTarget.value.toLowerCase() })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                />
                <button type='submit'>
                    <FaSearch style={{marginRight: 8}} />
                    Найти
                </button>
            </form>
        )
    }
}