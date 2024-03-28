import { useState } from "react";
export default function Login({ visibility, setVisibility }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [textError, setTextError] = useState("");
  async function login() {
    let res = await fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    let json = await res.json();
    if (res.status === 401) {
      setTextError(json.msg);
      setError(true);
    } else {
      setError(false);
      setVisibility(!visibility);
      setUsername("");
      setPassword("");
    }
  }

  return (
    <div className="login">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={login}>Login</button>
      {error && <p className="error-login-msg">{textError}</p>}
    </div>
  );
}
