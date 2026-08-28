import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Archive from './components/Archive';
import "./App.css"

type Screen = "login" | "archive";

function App() {
  const [screen, setScreen] = useState<Screen>("login");

  const handleLogin = () => {
    setScreen("archive");
  };

  return (
    <main className="app">
      {screen === "login" && <Login onLogin={handleLogin} />}
      {screen === "archive" && <Archive />}
    </main>
  );


}

export default App;
