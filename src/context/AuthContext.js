"use client"

import { apiLogin } from '@/actions/user';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const login = (email, senha) => {
        if (email === "vini@fiap.com.br") {
            setUser({
                email,
                name: email
            })
            apiLogin(email, senha)
        }
    }

    const logout = () => setUser(null)

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
