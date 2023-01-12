import { useState } from "react"

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Searching for user with username: ", username, " and password: ", password)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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