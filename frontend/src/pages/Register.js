import axios from "axios"
import { useState } from "react"

export default function Register() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [usernameError, setUsernameError] = useState(false)
    const [isLoggedIn, setLoginStatus] = useState(Boolean = false)

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        registerUser()
    }

    function registerUser() {
        axios.post('http://localhost:8000/api/users/', {
            email: email,
            username: username,
            password: password,
        })
        // Success
        .then(response => {
            setEmailError(false)
            setUsernameError(false)
            setLoginStatus(true)
        })
        // Failure
        .catch(error => {

            // Check if email was the problem
            axios.get(`http://localhost:8000/api/users/`)
            .then(response => {
                const user = response.data.find(user => user.email === email)
                if (user) {
                    setEmailError(true)
                }
                else {
                    setEmailError(false)
                }
            })
            .catch(error => {
                console.log(error)
            })

            // Check if username was the problem
            axios.get(`http://localhost:8000/api/users/`)
            .then(response => {
                const user = response.data.find(user => user.username === username)
                if (user) {
                    setUsernameError(true)
                }
                else {
                    setUsernameError(false)
                }
            })
            .catch(error => {
                console.log(error)
            })
        });
    }

    return (
        <div style={{
            justifyContent: "center",
            margin: "auto",
            maxWidth: "500px",
            width: "50%",
            // border: "5px solid black"
        }}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px"
            }}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={handleEmail} style={{boxSizing: "border-box", width: "100%"}}></input>
                    {emailError && <text style={{color: "red"}}>This email is already in use</text>}
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={handleUsername} style={{boxSizing: "border-box", width: "100%"}}></input>
                    {usernameError && <text style={{color: "red"}}>This username is already in use</text>}
                </div>
                
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={handlePassword} style={{boxSizing: "border-box", width: "100%"}}></input>
                </div>

                <input type="submit" value="Create Account"></input>
            </form>

            {isLoggedIn && <text style={{color: "green"}}>Authentication success!</text>}
        </div>
    )
}