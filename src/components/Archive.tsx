import { useState } from "react";
import Terminal from "./Terminal";

function Archive() {
    const [date, setDate] = useState("");
    const [entry, setEntry] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

    const canSearch = date.length > 0;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!canSearch) {
            return;
        }

        setSearched(true);

        // Temporary fake entry
        if (date === "2025-06-14") {
            setEntry(
                "I woke up relatively early today.\n\n" +
                "The weather was surprisingly nice. " +
                "I spent most of the morning doing absolutely nothing."
            );
        } else {
            setEntry(null);
        }
    };

    return (
        <Terminal>
            <div className="archive">
                <div className="terminal-line">
                    ACCESS GRANTED
                </div>

                <div className="terminal-line">
                    JOURNAL ARCHIVE SYSTEM
                </div>

                <br />

                <div className="terminal-line">
                    AVAILABLE ENTRIES: 3
                </div>

                <br />

                <form onSubmit={handleSubmit}>
                    <label>
                        ENTER DATE:
                        <input
                            autoFocus
                            type="date"
                            value={date}
                            onChange={(event) =>
                                setDate(event.target.value)
                            }
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={!canSearch}
                        className={
                            !canSearch
                                ? "terminal-button-disabled"
                                : ""
                        }
                    >
                        [ SEARCH ARCHIVE ]
                    </button>
                </form>

                {searched && (
                    <div className="search-result">
                        {entry ? (
                            <>
                                <div className="terminal-line">
                                    ENTRY FOUND
                                </div>

                                <pre>{entry}</pre>
                            </>
                        ) : (
                            <div className="terminal-line">
                                ERROR: NO ENTRY FOUND FOR {date}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Terminal>
    );
}

export default Archive;