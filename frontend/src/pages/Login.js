import axios from "axios"
import { useState, useEffect } from "react"

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setLoginStatus] = useState(Boolean = false)
    const [usernameError, setUsernameError] = useState(Boolean = false)
    const [passwordError, setPasswordError] = useState(Boolean = false)

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
                setPasswordError(false)
                setLoginStatus(true)
            }
            else {
                setUsernameError(false)
                setPasswordError(true)
            }
        })
        .catch(function (error) {
            setUsernameError(true)
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
                gap: "15px"
            }}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={handleUsernameChange} style={{boxSizing: "border-box", width: "100%"}}></input>
                    {usernameError && <text style={{color: "red"}}>This username does not exist in the database</text>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" value={password} onChange={handlePasswordChange} style={{boxSizing: "border-box", width: "100%"}}></input>
                    {passwordError && <text style={{color: "red"}}>Incorrect password</text>}
                </div>
                
                <input type="submit" value="Submit"></input>
            </form>

            {isLoggedIn && <text style={{color: "green"}}>Successfully logged in!</text>}
        </div>
    )
}