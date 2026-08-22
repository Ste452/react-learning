
function arrowFunctions() {

    function saudacao(nome) {
        return `Olá, ${nome}!`;
    }

    const saudacao2 = (nome) => {
        return `Olá, ${nome}`;
    }

    // Forma completa, com return
    const dobro = (numero) => {
        return numero * 2;
    }

    // Forma curta (retorno implícito) - mesmo resultado
    const dobro2 = (numero) => numero * 2; 
    return (
        <>
            <div>
                <button onClick={saudacao}>
                    
                </button>
            </div>
    
            <div>
                <button onClick={saudacao2}>

                </button>
            </div>

            <div>
                <button onClick={dobro}>

                </button>
            </div>
            <div>
                <button onClick={dobro2}>

                </button>
            </div>
        </>
    );
}

export default arrowFunctions