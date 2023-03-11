import errorImg from '../placeholderError.jpg';

const PokemonErrorView = ({message}) => {
    return (
        <div>
            <img src={errorImg} alt="error" width='200'/>
            <p>{ message }</p>
        </div>
    )
}

export default PokemonErrorView