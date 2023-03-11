import { ImSpinner } from 'react-icons/im';
import placeholderPokemon from '../placeholderPokemon.png';
import PokemonDataView from 'components/PokemonDataView';
import './PokemonPendingView.css';

const PokemonPendingView = ({pokemonName}) => {
    const pokemon = {
        name: pokemonName,
        sprites: { 
            other: {
                "official-artwork": {
                    front_default: placeholderPokemon,
                }
            }
        },
        stats: [],
    }

    return (
        <div>
            <div className="Pending-view">
                <ImSpinner size="32" className="Icon-spinner"/>
                <p>Загружаем...</p>                
            </div>
            <PokemonDataView pokemon={pokemon} />
        </div>
    )
}

export default PokemonPendingView;