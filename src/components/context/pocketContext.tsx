import { createContext, useContext, useEffect, useState, useCallback useMemo } from "react";
import PocketBase from "pocketbase"
import {useInterval} from "usehooks-ts"
import jwtDecode from "jwt-decode"
import ms from "ms"


const BASE_URL = url
const fiveMinutesInMs = ms("5 minutes")
const twoMinutesInMs = ms("2 minutes")
const PocketContext = createContext({})

export const PocketProvider = ({children}) => {
    const pb = useMemo(() => new PocketBase(BASE_URL), [])


const [token, setToken] = useState(pb.authStore.token)
const [user, setUser] = useState(pb.authStore.model)

useEffect(() => {
  return pb.authStore.onChange((tokenm model) => {
    setToken(token)
    setModel(model)
  })
}, [])

// const register = useCallback(async(username, password) =>{
// return await pb
// .collection("users")
// .create({username, password, passwordConfirm: password })
// }, [])

const login = useCallback(async(username, password) =>{
return await pb
.collection("users").authWithPassword(username,password)
}, [])

const logout = useCallback(async (username, password) => {
    return await pb.authStore.clear()
}, [])

const refreshSession= useCallback( async () =>{
    if (!pb.authStore.isValid) return
    const decoded = jwtDecode(token)
    const tokenExpiration = decoded.exp
    const expirationWithBuffer = (decoded.exp + fiveMinutesInMs)
    if (tokenExpiration < expirationWithBuffer ) {
        await pb.collection ("users").authRefresh() 
    }
    }, [token])
    
useInterval(refreshSession, token ? twoMinutesInMs : null)

  return (
    <PocketContext.Provider value={{ user, login,logout, token,pb }}>
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext)