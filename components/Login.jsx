export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername(event.target.username.value);
        setPassword(event.target.password.value);
        console.log(`Username: ${username}, Password: ${password}`);
    }



    return (
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <label htmlFor="username" >Username : </label>
                <input type="text" id="username" name="username" required placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}/><br /><br />
                <label htmlFor="password">Password : </label>
                <input type="password" id="password" name="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
                <button type="submit" onClick={handleSubmit}>
                    Login
                </button>
            </form>
        </div>
    )
}