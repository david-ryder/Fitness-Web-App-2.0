import axios from "axios"
import { useState, useEffect } from "react"

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setLoginStatus] = useState(Boolean = false)

    useEffect(() =>  {
        if (isLoggedIn === true) {
            console.log("Logging in")
        }
    })

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        authenticateUser()
    }

    function authenticateUser() {
        axios.get('http://localhost:8000/api/users/')
        .then(function (response) {
            let user = response.data.find(user => user.username === username)
            
            if (password === user.password) {
                setLoginStatus(true)
            }
            else {
                console.log("Incorrect password")
            }
        })
        .catch(function (error) {
            console.log("User does not exist")
        })
    }

    return (
        <div style={{
            justifyContent: "center",
            margin: "auto",
            maxWidth: "500px",
            width: "50%",
            // border: "5px solid black"
        }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={handleUsernameChange}></input>
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={handlePasswordChange}></input>
                <br />
                
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}