import { useEffect, useState } from "react";
import type { BootMessage } from "./bootMessages";

type BootLineProps = {
    message: BootMessage;
    onComplete: () => void;
};

function BootLine({ message, onComplete }: BootLineProps) {
    const [visibleCharacters, setVisibleCharacters] = useState(0);
    const [visibleResultCharacters, setVisibleResultCharacters] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        let character = 0;
        let resultCharacter = 0;

        let resultTimer: ReturnType<typeof setTimeout> | undefined;
        let resultInterval: ReturnType<typeof setInterval> | undefined;
        let completeTimer: ReturnType<typeof setTimeout> | undefined;

        const interval = setInterval(() => {
            character++;

            setVisibleCharacters(character);

            if (character >= message.text.length) {
                clearInterval(interval);

                if (message.result) {
                    resultTimer = setTimeout(() => {
                        setShowResult(true);

                        resultInterval = setInterval(() => {
                            resultCharacter++;

                            setVisibleResultCharacters(resultCharacter);

                            if (
                                resultCharacter >=
                                message.result!.length
                            ) {
                                clearInterval(resultInterval);

                                completeTimer = setTimeout(() => {
                                    onComplete();
                                }, 300);
                            }
                        }, getResultTypingSpeed(message.resultType));
                    }, 300);
                } else {
                    completeTimer = setTimeout(() => {
                        onComplete();
                    }, 100);
                }
            }
        }, getTypingSpeed(message.type));

        return () => {
            clearInterval(interval);

            if (resultTimer) {
                clearTimeout(resultTimer);
            }

            if (resultInterval) {
                clearInterval(resultInterval);
            }

            if (completeTimer) {
                clearTimeout(completeTimer);
            }
        };
    }, [message, onComplete]);

    const displayedResult =
        message.result?.slice(0, visibleResultCharacters) ?? "";

    const isTypingMainText =
        visibleCharacters < message.text.length;

    const isTypingResult =
        showResult &&
        message.result &&
        visibleResultCharacters < message.result.length;

    return (
        <div className={`boot-line boot-line-${message.type}`}>
            {message.text.slice(0, visibleCharacters)}

            {isTypingMainText && (
                <span className="typing-cursor">_</span>
            )}

            {showResult && message.result && (
                <span
                    className={`boot-result boot-line-${
                        message.resultType ?? message.type
                    }`}
                >
                    {displayedResult}

                    {isTypingResult && (
                        <span className="typing-cursor">
                            _
                        </span>
                    )}
                </span>
            )}
        </div>
    );
}

function getTypingSpeed(type: BootMessage["type"]) {
    switch (type) {
        case "error":
            return 15;

        case "warning":
            return 20;

        case "noise":
            return 10;

        default:
            return 18;
    }
}

function getResultTypingSpeed(
    type: BootMessage["resultType"],
) {
    switch (type) {
        case "error":
            return 40;

        case "warning":
            return 35;

        default:
            return 25;
    }
}

export default BootLine;