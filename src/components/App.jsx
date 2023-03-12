import React, { Component } from 'react';
// import PokemonInfo from 'components/PokemonInfo';
// import PokemonForm from 'components/PokemonForm';

// import { ToastContainer } from 'react-toastify';

// import {LoginForm} from './LoginForm/LoginForm';

import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import { AddMaterial, GetMaterials, DeleteMaterials } from './MaterialServices/Api';
import { MaterialsList } from './MaterialsList/MaterialsList';

export default class App extends Component {
  // state = {
  //   pokemonName: '',
  // }
  
  // handleSubmitForm = (pokemonName) => {
  //   this.setState({ pokemonName })
  // }

  state = {
    materials: [],
    loading: false,
  }

  componentDidMount = async () => {
    this.setState({ loading: true, });
    try {
      const materials = await GetMaterials();
      this.setState({ materials, loading: false, });
    } catch (error) {
      console.log(error)
    }    
  }

  addMaterials = async values => {
    // this.setState({loading: true,})
    try {
      const material = await AddMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
        // loading: false,
      }));
    } catch (error) {
      console.log(error)
    }    
  }  

  deleteMaterial = async materialId => {
    try {
      await DeleteMaterials(materialId);
      this.setState(state => ({
        materials: this.state.materials.filter(material => material.id !== materialId)
      }));
    } catch (error) {
      console.log(error)
    }    
  }

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',
          fontSize: 14,
          color: '#010101'
        }}
      >
        {/* <PokemonForm onChange={this.handleSubmitForm} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer /> */}

        {/* <LoginForm /> */}       

        <MaterialEditorForm
          onSubmit={this.addMaterials}
        />
        {this.state.loading
          ? <p>LOADING...</p>
          : <MaterialsList
              materials={this.state.materials}
              onDelete={this.deleteMaterial}
            />
        }       
      </div>
    )
  }    
};
