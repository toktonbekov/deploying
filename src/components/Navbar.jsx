import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { mainContext } from '../contexts/MainContext';

const Navbar = () => {
    const { user, setUser, logOut } = useContext(mainContext)
    const history = useHistory()
    // console.log(user);
    useEffect(() => {
        setUser()
    }, [])

    if (!user) {
        history.push('/auth')
    }

    return (
        <div className="navbar">
            <div> Главная </div>
            <div>
                {user ? (
                    <div>
                        <strong>{user.displayName}</strong>
                        <button onClick={logOut}>Выйти</button>
                    </div>
                ) : (
                    null
                )}
            </div>
        </div>
    );
};

export default Navbar;