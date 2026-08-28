import { useEffect } from "react";
import Terminal from "../Terminal";
import BootLine from "./BootLine";
import { useBootSequence } from "./useBootSequence";

type BootSequenceProps = {
  onComplete: () => void;
};

function BootSequence({ onComplete }: BootSequenceProps) {
  const {
    visibleMessages,
    currentMessage,
    isBootComplete,
    handleMessageComplete,
  } = useBootSequence();

  useEffect(() => {
    if (!isBootComplete) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      setTimeout(() => {
        onComplete();
      }, 0);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isBootComplete, onComplete]);

  return (
    <Terminal>
      <div className="boot-sequence">
        {visibleMessages.map((message, index) => (
          <div
            className={`boot-line boot-line-${message.type}`}
            key={`${index}-${message.text}`}
          >
            {message.text}

            {message.result && (
              <span
                className={`boot-result boot-line-${message.resultType ?? message.type
                  }`}
              >
                {message.result}
              </span>
            )}
          </div>
        ))}

        {currentMessage && (
          <BootLine
            message={currentMessage}
            onComplete={handleMessageComplete}
          />
        )}

        {isBootComplete && (
          <div className="boot-prompt">
            <span>PRESS ENTER TO CONTINUE</span>
            <span className="cursor">_</span>
          </div>
        )}
      </div>
    </Terminal>
  );
}

export default BootSequence;