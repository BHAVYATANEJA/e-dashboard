import React , {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
const Signup=()=>{
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [mobile,setMobile]= useState("");

    const Navigate =useNavigate();

    useEffect(()=>{

        const auth = localStorage.getItem("users");

        if(auth){

            Navigate('/')
        }

    })

    const CollectData= async()=>{
     console.warn(name,email,password,mobile);
        let result = await fetch('http://localhost:4000/register',{
            method :'post',
            body:   JSON.stringify({name,email,password,mobile}),
            headers :{
                'Content-Type' :'application/json'
            },
        })


        result= await result.json();
        console.warn(result);
        localStorage.setItem('users',JSON.stringify(result));
            Navigate('/');
    }

    return(
        <div className="register">
            <h1>Register Now</h1>
            <input type="text" className="instyle" 
             value={name} onChange={(e)=>setName(e.target.value)} placeholder="Username" />

            <input type="text" className="instyle" 
            value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
           
            <input type="password" className="instyle"
            value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            
            <input type="tel" className="instyle" 
            value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile No." />
            
            
            <input type="checkbox" className="checkstyle"/>I Hereby confirm all the details are correct<br></br>
            <button onClick={CollectData} className="btn" >Sign up</button>
            <button className="btn" >Reset</button>


        </div>
    );
}
export default Signup;
