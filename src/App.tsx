import { useEffect, useState } from "react";
import Archive from "./components/Archive";
import BootSequence from "./components/boot/BootSequence";
import Login from "./components/Login";
import "./App.css";

type Screen = "boot" | "login" | "archive";

function App() {
  const [screen, setScreen] = useState<Screen>("boot");

  console.log("APP RENDER - screen =", screen);

  useEffect(() => {
    console.log("APP SCREEN CHANGED ->", screen);
  }, [screen]);

  const changeScreen = (nextScreen: Screen) => {
    console.log(
      `SCREEN TRANSITION: ${screen} -> ${nextScreen}`,
    );

    setScreen(nextScreen);
  };

  switch (screen) {
    case "boot":
      console.log("RENDERING BOOT");

      return (
        <main className="app">
          <BootSequence
            onComplete={() => {
              console.log("BOOT COMPLETE -> LOGIN");
              changeScreen("login");
            }}
          />
        </main>
      );

    case "login":
      console.log("RENDERING LOGIN");

      return (
        <main className="app">
          <Login
            onLogin={() => {
              console.log("LOGIN SUBMITTED -> ARCHIVE");
              changeScreen("archive");
            }}
          />
        </main>
      );

    case "archive":
      console.log("RENDERING ARCHIVE");

      return (
        <main className="app">
          <Archive />
        </main>
      );
  }
}

export default App;