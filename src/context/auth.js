import React, {createContext, useState, useEffect} from 'react'
import firebase from 'gatsby-plug-firebase'
export const AuthContext = ({Children}) ;
    const AuthProvider = ({Children})  ;
{
   const [user, setUser] = useState()
   useEffect(()=> {
firebase.auth().onAuthSatetChnged(user =>setUser(user) )
   },[])
}
{return 
     <AuthContext.Provider value = {{user, setUser}}>
     {Children} 
     </AuthContext.Provider>



}
export default AuthProvider
