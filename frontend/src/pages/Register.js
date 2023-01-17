import axios from "axios"
import { useState } from "react"

export default function Register() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
        console.log("Creating user with \nemail: ", email, "\nusername: ", username, "\npassword: ", password)
        registerUser()
    }

    function registerUser() {
        axios.post('http://localhost:8000/api/users/', {
            email: email,
            username: username,
            password: password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
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
                gap: "5px"
            }}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={handleEmail}></input>
                <br />
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={handleUsername}></input>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={handlePassword}></input>
                <br />
                <input type="submit" value="Create Account"></input>
            </form>
        </div>
    )
}