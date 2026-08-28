import { useCallback, useEffect, useState } from "react";
import {
    bootMessages,
    noiseMessages,
    type BootMessage,
} from "./bootMessages";

export function useBootSequence() {
    const [visibleMessages, setVisibleMessages] = useState<BootMessage[]>([]);
    const [currentMessage, setCurrentMessage] =
        useState<BootMessage | null>(null);
    const [messageIndex, setMessageIndex] = useState(0);

    const isBootComplete =
        messageIndex >= bootMessages.length &&
        currentMessage === null;

    useEffect(() => {
        // All messages have been processed.
        if (messageIndex >= bootMessages.length) {
            return;
        }

        // Don't start another message while one is being displayed.
        if (currentMessage !== null) {
            return;
        }

        const message = bootMessages[messageIndex];

        const timer = setTimeout(() => {
            setCurrentMessage(message);
        }, message.delay ?? 300);

        return () => clearTimeout(timer);
    }, [messageIndex, currentMessage]);

    const handleMessageComplete = useCallback(() => {
        if (currentMessage === null) {
            return;
        }

        const messagesToAdd: BootMessage[] = [currentMessage];

        if (Math.random() < 0.12) {
            messagesToAdd.push(getRandomNoise());
        }

        setVisibleMessages((current) => [
            ...current,
            ...messagesToAdd,
        ]);

        setCurrentMessage(null);
        setMessageIndex((current) => current + 1);
    }, [currentMessage]);

    return {
        visibleMessages,
        currentMessage,
        isBootComplete,
        handleMessageComplete,
    };
}

function getRandomNoise(): BootMessage {
    const message =
        noiseMessages[
        Math.floor(Math.random() * noiseMessages.length)
        ];

    return {
        ...message,
        delay: 0,
    };
}