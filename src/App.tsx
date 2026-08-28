import { useEffect, useState } from "react";
import Login from "./components/Login";
import Archive from "./components/Archive";
import "./App.css";

type Screen = "boot" | "login" | "archive";

function App() {
  const [screen, setScreen] = useState<Screen>("boot");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen("login");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setScreen("archive");
  };

  return (
    <main className="app">
      {screen === "boot" && <BootSequence />}
      {screen === "login" && <Login onLogin={handleLogin} />}
      {screen === "archive" && <Archive />}
    </main>
  );
}

function BootSequence() {
  const messages = [
    "JOURNAL ARCHIVE SYSTEM v1.0",
    "--------------------------------",
    "INITIALIZING SYSTEM...",
    "MEMORY CHECK ................. OK",
    "ARCHIVE INDEX ................ OK",
    "DATABASE CONNECTION .......... OK",
    "SECURITY MODULE .............. OK",
    "LOADING JOURNAL DATABASE...... OK",
    "--------------------------------",
    "SYSTEM READY.",
    "",
    "IDENTIFICATION REQUIRED.",
  ];

  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let messageIndex = 0;

    const messageTimer = setInterval(() => {
      if (messageIndex >= messages.length) {
        clearInterval(messageTimer);
        return;
      }

      setVisibleMessages((current) => [
        ...current,
        messages[messageIndex],
      ]);

      messageIndex++;
    }, 300);

    return () => clearInterval(messageTimer);
  }, []);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return current + 2;
      });
    }, 40);

    return () => clearInterval(progressTimer);
  }, []);

  return (
    <div className="terminal boot-terminal">
      <div className="terminal-content">
        {visibleMessages.map((message, index) => (
          <div className="boot-line" key={index}>
            {message || "\u00A0"}
          </div>
        ))}

        {progress < 100 && (
          <div className="progress-container">
            <div className="progress-bar">
              {"█".repeat(Math.floor(progress / 2))}
              {"░".repeat(50 - Math.floor(progress / 2))}
            </div>

            <div>{progress}%</div>
          </div>
        )}

        {progress === 100 && (
          <div className="cursor-line">
            <span>_</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;