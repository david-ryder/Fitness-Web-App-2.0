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
        console.log("Creating user with email: ", email, ", username: ", username, ", and password: ", password)
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
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