const Child = ({message}) => {
    return <p>{message}</p>;
}

const Parent = () => {
    return <Child message="Olá, do componente pai!" />
}

export default Parent;