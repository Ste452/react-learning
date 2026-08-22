/* eslint-disable no-undef */
import {useState} from 'react';

Child = ({ sendDataToParent }) => {
    return (
        <button onClick={() => sendDataToParent('Dados do Filho')}>Enviar</button>
    );
}
 
Parent = () => {
    const [data, setData] = useState('');

    const handleDataFromChild = (childData) => {
        setData(childData);
    };

    return (
        <div>
            <p>Dados recebidos: {data} </p>
 
            <Child sendDataToParent={handleDataFromChild} />
        </div>
    );
}

export default Parent;