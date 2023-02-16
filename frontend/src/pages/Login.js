import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setLoginStatus] = useState(Boolean = false)
    const [usernameError, setUsernameError] = useState(Boolean = false)
    const [passwordError, setPasswordError] = useState(Boolean = false)
    const navigate = useNavigate();

    useEffect(() =>  {
        if (isLoggedIn === true) {
            console.log("Logging in")
            navigate(`/${username}`)
        }
    }, [isLoggedIn, navigate]);

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
                setUsernameError(false)
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
        <div className="content" style={{
            justifyContent: "center",
            margin: "auto",
            maxWidth: "500px",
            width: "80%",
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
                    {usernameError && <p style={{color: "red"}}>This username does not exist in the database</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" value={password} onChange={handlePasswordChange} style={{boxSizing: "border-box", width: "100%"}}></input>
                    {passwordError && <p style={{color: "red"}}>Incorrect password</p>}
                </div>
                
                <input type="submit" value="Submit"></input>
                {isLoggedIn && <p style={{color: "green"}}>Authentication success!</p>}
            </form>
        </div>
    )
}