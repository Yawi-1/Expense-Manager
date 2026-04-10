import { createContext, useContext, useState } from "react";
import axios from "axios"
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const user = 'yawi'
    const api = 'http://localhost:3000/api/auth'
    const [loading, setLoading] = useState(false)

    const signup = async (formData) => {
        setLoading(true)
        try {
            const res = await axios.post(`${api}/signup`, formData)
            console.log(res.data)
        } catch (error) {
            console.error('Signup error:', error.resposne.data)
        } finally {
            setLoading(false)
        }
    }

    const login = async (formData) => {
        setLoading(true)
        try {
            const res = await axios.post(`${api}/login`, formData)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        setLoading(true)
        try {
            const res = await axios.post(`${api}/logout`)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

        return (
            <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
                {children}
            </AuthContext.Provider>
        )
    }
    export const useAuth = () => useContext(AuthContext)
    export default AuthProvider

