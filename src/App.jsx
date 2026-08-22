import Login from './aula5/Login'
import Notification from './aula5/Notification'
import { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    return (
        <div>
            <Login isLoggedIn={isLoggedIn} />
            <Notification showNotification={showNotification} />
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <button onClick={() => setShowNotification(!showNotification)}>
                {showNotification ? 'Ocultar' : 'Mostrar'} Notificação
            </button>
        </div >
    );
}

export default App;