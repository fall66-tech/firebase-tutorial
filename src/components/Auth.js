import { useState } from "react"
import { auth , googleProvider } from "../config/firebase-config"
import { createUserWithEmailAndPassword, signInWithPopup , signOut} from "firebase/auth"

export const Auth = () => {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);

    const signIn = async() => {
        
            await createUserWithEmailAndPassword(auth, email , password)
       
    }
    const signInGoogle = async() => {
        try{
            await signInWithPopup(auth , googleProvider)
        }
        catch (err) {
            console.log(err);
        }
    }
    const logout = async() => {
        try{
            await signOut(auth)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign in</button>
        <button onClick={signInGoogle}>Sign in with google</button>
        <button onClick={logout}>logout</button>
        </div>
    )
}