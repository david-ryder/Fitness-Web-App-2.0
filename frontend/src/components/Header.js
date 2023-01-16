import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            flexDirection: "row",
            backgroundColor: " 	rgb(0, 100, 255)",
            gap: "20px",
            padding: "15px"
        }}>

            <Link className='links' to='/'>Home</Link>
            <Link className='links' to='/register'>Register</Link>
            <Link className='links' to='/login'>Login</Link>
        </div>
    )
}