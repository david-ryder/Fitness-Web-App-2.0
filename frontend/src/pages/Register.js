import axios from "axios"
import { useState } from "react"

export default function Register() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [emailError, setEmailError] = useState(false)
    const [usernameError, setUsernameError] = useState(false)
    const [isLoggedIn, setLoginStatus] = useState(false)

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleLastName(e) {
        setLastName(e.target.value)
    }
    
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
            first_name: firstName,
            last_name: lastName,
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
        <div className="content" style={{
            justifyContent: "center",
            margin: "auto",
            maxWidth: "500px",
            width: "80%",
            // border: "5px solid black"
        }}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px"
            }}>
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" value={firstName} onChange={handleFirstName} style={{boxSizing: "border-box", width: "100%"}}></input>
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" value={lastName} onChange={handleLastName} style={{boxSizing: "border-box", width: "100%"}}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={handleEmail} style={{boxSizing: "border-box", width: "100%"}}></input>
                    {emailError && <p style={{color: "red"}}>This email is already in use</p>}
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={handleUsername} style={{boxSizing: "border-box", width: "100%"}}></input>
                    {usernameError && <p style={{color: "red"}}>This username is already in use</p>}
                </div>
                
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={handlePassword} style={{boxSizing: "border-box", width: "100%"}}></input>
                </div>

                <input type="submit" value="Create Account"></input>
                {isLoggedIn && <p style={{color: "green"}}>Authentication success!</p>}
            </form>
        </div>
    )
}