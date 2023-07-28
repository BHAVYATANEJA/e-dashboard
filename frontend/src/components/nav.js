import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {

    const Navigate = useNavigate();
    const auth = localStorage.getItem('users');

    const logout = () => {

        localStorage.clear();
        Navigate('/signup');
    }

    return (
        <div>
            <img className='logo' alt='logo ' src="https://static.vecteezy.com/system/resources/thumbnails/005/076/592/small/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"></img>
            {
                auth ?
                    <>
                        <ul className='navbar'>
                            <li><Link to="/">Products Listing</Link></li>
                            <li><Link to="/add">Add Products</Link></li>
                            <li><Link to="/update/:id">Update Products</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
                        </ul>
                    </>
                    : <>
                        <ul className='navbar navbar-right'>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </>
            }
        </div>
    );
}
export default Nav;