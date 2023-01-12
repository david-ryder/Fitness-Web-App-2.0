import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div style={{
            width: "100%",
            height: "fit-content",
            display: "inline-block"
        }}>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Register</Link>
        </div>
    )
}