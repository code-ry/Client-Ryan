import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand fixed-top bg-gradient">
                <div id='logo'>
                    <a class="nav-link" href="/">
                        <img src="../logo.png" alt="Logo" width="80" />
                    </a>
                </div>
                <div id="navbarNav" class="nav justify-content-end container-fluid">
                    <a class="nav-link text-$green-700" href="/books">All Books</a>
                    <a class="nav-link" href="/login">Admin Login</a>
                    <a class="nav-link" href="/contact">Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar