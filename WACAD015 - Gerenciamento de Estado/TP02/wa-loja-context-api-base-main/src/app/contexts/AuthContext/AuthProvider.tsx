'use client'

import React, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type AuthContextType = {
  userEmail: string | null
  login: (email: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  userEmail: null,
  login: () => {},
  logout: () => {}
})

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUserEmail(storedUser)
    }
  }, [])

  const login = (email: string) => {
    setUserEmail(email) 
    localStorage.setItem('user', email) 
    router.push('/') 
  }

  const logout = () => {
    setUserEmail(null) 
    localStorage.removeItem('user') 
  }

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}