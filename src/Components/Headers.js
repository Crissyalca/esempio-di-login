import { useState, useEffect } from "react";
export default function Headers({ visibility, setVisibility }) {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log("entrato in useEffect");
    async function call() {
      let res = await fetch("http://localhost:3000/login", {
        credentials: "include",
      });
      let json = await res.json();
      if (res.status === 200) {
        setLogged(true);
        setUsername(json.username);
      } else {
        setLogged(false);
      }
    }
    call();
  }, [visibility]);

  async function logout() {
    await fetch("http://localhost:3000/login", {
      method: "PUT",
      credentials: "include",
    });
    setLogged(false);
    setVisibility(false);
  }

  return (
    <>
      {logged && (
        <div className="headers">
          <span>{username}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </>
  );
}
