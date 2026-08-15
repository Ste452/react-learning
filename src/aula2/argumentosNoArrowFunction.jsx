import { useState } from "react";

function  argumentosNoArrowFunction() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>Contador: {contador} </h1>
            <button onClick={() => setContador(contador + 1)}>Icrementar</button>
            <button onClick={() => setContador(0)}>Resetar </button>
        </div>
    );
}

export default argumentosNoArrowFunction