import PropTypes from 'prop-types';

const Saudacao = ({ nome, idade }) => {

    return (
        <div>
            <h1>Olá, {nome}!</h1>
            { idade && <p>Você tem {idade} anos.</p> }
        </div>
    );
};

Saudacao.propTypes = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number,
};

export default Saudacao;