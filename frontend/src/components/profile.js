import React, { useEffect, useState } from "react";

const Profile = () => {

    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[mobile,setMobile]=useState();
    const Userid=JSON.parse(localStorage.getItem('users'))._id;

    useEffect(()=>{
        getprofiledata();
    });
    const getprofiledata= async ()=>{
        let result = await  fetch(`http://localhost:4000/profile/${Userid}`);
        result =await result.json();
        setName(result.name)
        setEmail(result.email)
        setPassword(result.password)
        setMobile(result.mobile)

        console.warn(result)
    }

    return (

        <div className="register">
            <img alt="profile" className="profile" src="https://res.cloudinary.com/teepublic/image/private/s--XAm6vfa6--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffb81c,e_outline:48/co_ffb81c,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_watermark_lock/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1567504614/production/designs/5827662_0.jpg"></img>
            <input type="text" className="instyle"
                value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" />

            <input type="text" className="instyle"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

            <input type="password" className="instyle"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

            <input type="tel" className="instyle"
                value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile No." />
        </div>




    );
}
export default Profile;