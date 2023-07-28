import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const Navigate=useNavigate();


    const LoginData=async ()=>{
        console.warn(email,password);

        let result = await fetch('http://localhost:4000/login',{
            method :'post',
            body : JSON.stringify({email,password}),
            headers :{
                'Content-Type' :'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem('users',JSON.stringify(result))
            Navigate('/')

        }
        else{
            console.warn("Please Enter correct details")
        }
        
    }


    useEffect(()=>{
        const auth = localStorage.getItem('users');

        if(auth){
            Navigate('/');
        }
    })

    return(
    <div className="register">
            <h1>Login</h1>
            <input type="text" className="instyle" 
             value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />

            <input type="password" className="instyle" 
            value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            <button onClick={LoginData} className="btn" >login</button>

    </div>
    );
}
export default Login;