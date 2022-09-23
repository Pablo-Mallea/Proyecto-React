import { createContext, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({children})=>{

    /* const [user, setUser] = useState() */

    return (
        <LoginProvider>
            {children}
        </LoginProvider>

        )
}