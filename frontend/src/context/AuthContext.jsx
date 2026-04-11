import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    axios.defaults.withCredentials = true;
    const [user, setUser] = useState(null)
   const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [verifyLoading, setVerifyLoading] = useState(false)
    const api = 'http://localhost:3000/api/auth'

    const signup = async (formData) => {
        setLoading(true)
        try {
            const res = await axios.post(`${api}/signup`, formData)

            setUser(res.data.data) 
            // optional: show success message
            alert(res.data.message)
            // redirect to dashboard or login page
            navigate('/dashboard')


        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else if (error.request) {
                console.log("No response from server")
            } else {
                console.log("Error:", error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    const login = async (formData) => {
        setLoading(true)
        try {
            const res = await axios.post(`${api}/login`, formData)
            setUser(res.data.data)
            alert(res.data.message)
            navigate('/dashboard')
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else if (error.request) {
                console.log("No response from server")
            } else {
                console.log("Error:", error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        setLoading(true)
        try {
            const res = await axios.post(`${api}/logout`)
            setUser(null)
            alert(res.data.message)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }


     useEffect(() => {
        const fetchUser = async () => {
            setVerifyLoading(true)
            try {
                const res = await axios.get(`${api}/profile`)
                setUser(res.data)
            } catch (error) {
                setUser(null)
            } finally {
                setVerifyLoading(false)
            }
        }

        fetchUser()
    }, [])


    return (
        <AuthContext.Provider value={{ user, signup, login, logout, loading, verifyLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)
export default AuthProvider

