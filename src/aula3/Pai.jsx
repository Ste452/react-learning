import { useState } from "react";
import Filho from "./Filho";

const Pai = () => {
    const [dadosDoFilho, setDadosDoFilho] = useState();

    const receberDados = (dados) => {
        setDadosDoFilho(dados);
    };

    return (
        <div>
            <h2>Componente Pai:</h2>
            <p>Dados recebidos do Filho: {dadosDoFilho}</p>
            <Filho message={"Olá, pai!"} sendDataToParent={receberDados} />
        </div>
    );
};

export default Pai;