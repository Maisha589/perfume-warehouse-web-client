import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            // console.log(user)
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post("https://floating-lowlands-90113.herokuapp.com/login", { email });
                setToken(data.accessToken);
                localStorage.setItem("accessToken", data.accessToken);
                // console.log(data)
            }
        }
        getToken();
    }, [user])
    return [token]
};

export default useToken;