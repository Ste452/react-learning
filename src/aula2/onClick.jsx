function onClick() {

    // React: nome em camelCase e valor é uma função
    const handleClick = () => alert("oi");

    const Botao = () => (
        <button onClick={handleClick}>Clique aqui</button>
    );

    return (
        <div>
            <button onClick={Botao}>Correto</button>
        </div>
    );
}

export default onClick