import { useState } from "react";
import Terminal from "./Terminal";

type LoginProps = {
    onLogin: () => void;
};

function Login({ onLogin }: LoginProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const canSubmit =
        username.trim().length > 0 &&
        password.trim().length > 0;

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

                        if (!canSubmit) {
                            return;
                        }

                        onLogin();
                    }}
                >
                    <label>
                        USERNAME:
                        <input
                            autoFocus
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            required
                        />
                    </label>

                    <label>
                        PASSWORD:
                        <input
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={!canSubmit}
                        className={!canSubmit ? "terminal-button-disabled" : ""}
                    >
                        [ AUTHENTICATE ]
                    </button>
                </form>
            </div>
        </Terminal>
    );
}

export default Login;
