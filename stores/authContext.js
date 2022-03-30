import { createContext,useEffect, useState } from "react"
import netlifyIdentity from 'netlify-identity-widget'
import { HelpOutline } from "@mui/icons-material"

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    autoReady:false
})

export const AuthContextProvider =({children}) =>{
    const[user, setUser] = useState(null)
    useEffect(() => {
        netlifyIdentity.on('login', (user)=>{
            setUser(user)
        })
        netlifyIdentity.init()
    
    },[])

    const login =() => {
        netlifyIdentity.open()
    }

    const context = {user, login}

    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext