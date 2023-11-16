import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

 
 export const authContext = createContext(null)
 const google = new GoogleAuthProvider();

const ContaxProvaider = ({children}) => {
    const [users,setUsers] = useState(null)
    const [lodding,setLodding]=useState(true)
     
    const createUser =(email,password)=>{
        setLodding(true)

       return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser =(email,password)=>{
        setLodding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLodding(true)
       return signOut(auth);

    }
    const singGoogle =()=>{
        setLodding(true)
        return signInWithPopup(auth,google);
    }
    useEffect(()=>{
      const unSubcribe = onAuthStateChanged(auth,corruntUesr=>{
            setUsers(corruntUesr)
            setLodding(false)
            console.log('corrent user', corruntUesr);
        });
        return ()=> {
            unSubcribe()
        }
    },[])
    const userInfo ={users,createUser,loginUser,logOut,lodding,singGoogle}
    return (
        <authContext.Provider value={userInfo}>
             {children}
        </authContext.Provider>
    );
};

export default ContaxProvaider;