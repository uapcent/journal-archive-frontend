import { useState } from "react";
import Terminal from "./Terminal";

type LoginProps = {
    onLogin: () => void;
};

function Login({ onLogin }: LoginProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Terminal>
            <div className="login">
                <div className="ascii-title">
                    JOURNAL ARCHIVE SYSTEM
                </div>

                <div className="terminal-line">
                    SYSTEM STATUS: <span>ONLINE</span>
                </div>

                <div className="terminal-line">
                    AUTHENTICATION REQUIRED
                </div>

                <br />

                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        onLogin();
                    }}>
                    <label>
                        USERNAME:
                        <input
                            autoFocus
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </label>

                    <label>
                        PASSWORD:
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </label>

                    <button type="submit">
                        [ AUTHENTICATE ]
                    </button>
                </form>
            </div>
        </Terminal>
    );
}

export default Login;