import { useState } from "react";
import Terminal from "./Terminal";
import { journalServiceConfig } from "../services/journalServiceConfig";
import type { JournalEntry } from "../services/JournalService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function Archive() {
  const [date, setDate] = useState("");
  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const canSearch = date.length > 0;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!canSearch || loading) {
      return;
    }

    setSearched(true);
    setLoading(true);
    setError(false);
    setEntry(null);

    try {
      const result = await journalServiceConfig.getEntry(date);

      setEntry(result);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
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
            disabled={!canSearch || loading}
          >
            {loading
              ? "[ SEARCHING... ]"
              : "[ SEARCH ARCHIVE ]"}
          </button>
        </form>

        {searched && (
          <div className="search-result">
            {loading && (
              <div className="terminal-line">
                ACCESSING ARCHIVE...
              </div>
            )}

            {!loading && error && (
              <div className="terminal-line boot-line-error">
                ERROR: ARCHIVE UNAVAILABLE
              </div>
            )}

            {!loading && !error && entry && (
              <>
                <div className="terminal-line">
                  ENTRY FOUND
                </div>

                <div className="journal-entry">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {entry.content}
                  </ReactMarkdown>
                </div>
              </>
            )}

            {!loading && !error && !entry && (
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