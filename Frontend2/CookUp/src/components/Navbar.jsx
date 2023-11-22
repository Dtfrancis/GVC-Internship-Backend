import { useState } from "react";

const Navbar = () => {
    return ( 
        <div className="width: 100% ">
            <div className="background-color: #18328F"></div>
            <nav className="navbar">
            <h1>CookUp online Bake Shop</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/create">Account</a>
                <a href="/create">Payment</a>
                <a href="/create">Services</a>
                <a href="/create">Account</a>
                <a href="/create">Products</a>
                <a>Login</a>
                <a>Sign Up</a>
            </div>
        </nav>

        </div>
        
     );
}
 
export default Navbar;