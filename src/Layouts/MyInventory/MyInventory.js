import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyInventory = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h2>This is my inventory: {user.displayName}</h2>
        </div>
    );
};

export default MyInventory;