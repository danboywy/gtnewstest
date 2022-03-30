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
            netlifyIdentity.close()
            console.log('login even')
        })
        netlifyIdentity.on('logout', () =>{
            setUser(null)
            console.log('logout even')
        })
      
        netlifyIdentity.init()

        return()=>{
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
    
    },[])

    const login =() => {
        netlifyIdentity.open()
    }

    const logout =() => {
        netlifyIdentity.logout()
    }

    const context = {user, login, logout}

    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext