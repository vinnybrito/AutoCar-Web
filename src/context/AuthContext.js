"use client"

import { apiLogin, apiLogout } from '@/actions/user';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const login = async (email, senha) => {
        const res = await apiLogin(email, senha)  

        if (res?.error) return res

        setUser({
            email
        })
    }

    const logout = () => {
        setUser(null)
        apiLogout
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
    
}
