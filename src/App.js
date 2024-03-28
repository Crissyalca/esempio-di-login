import "./App.css";
import Login from "./Components/Login";
import Headers from "./Components/Headers";
import { useState } from "react";

function App() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="App">
      <Headers visibility={visibility} setVisibility={setVisibility} />
      <Login visibility={visibility} setVisibility={setVisibility} />
    </div>
  );
}

export default App;
