import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
    names: string
    last_names: string
    email: string
}

interface Data {
    user: User
    jwt: string
}


export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const login = async (url: string, email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data: Data = await response.json();

            if (!response.ok) {
                throw new Error(`Credenciales invalidas`)
            }

            setUser(data.user);
            setToken(data.jwt);

            // Almacenar en localStorage/sessionStorage
            localStorage.setItem('authToken', data.jwt);
            localStorage.setItem('user', JSON.stringify(data.user));

            navigate('/home');

        } catch(error) {
            setError(error instanceof Error ? error.message: 'Error desconocido');
        } finally {
            setLoading(false);
        }
    }

    return {
        user,
        token,
        loading,
        error,
        login
    }
};