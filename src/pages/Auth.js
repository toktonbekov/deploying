import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { mainContext } from '../contexts/MainContext';

const Auth = () => {
    const { authUser, setUser, user } = useContext(mainContext)
    const history = useHistory()


    useEffect(() => {
        setUser()
    }, [])

    if (user) {
        history.push("/")
    }

    return (
        <div className="auth">
            <div className="auth-block">
                <h2>Войдите, чтобы пользоваться нашим приложением</h2>
                <button onClick={authUser}>Войти с помощью GOOGLE</button>
            </div>
        </div>
    );
};

export default Auth;