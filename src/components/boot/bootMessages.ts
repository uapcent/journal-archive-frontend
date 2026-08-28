export type BootMessageType =
    | "normal"
    | "success"
    | "warning"
    | "error"
    | "noise";

export type BootMessage = {
    text: string;
    type: BootMessageType;
    result?: string;
    resultType?: BootMessageType;
    delay?: number;
};

export const bootMessages: BootMessage[] = [
    {
        text: "JOURNAL ARCHIVE SYSTEM v1.0.7",
        type: "normal",
        delay: 500,
    },
    {
        text: "----------------------------------------",
        type: "normal",
        delay: 150,
    },
    {
        text: "INITIALIZING SYSTEM",
        type: "normal",
        result: " ......................... OK",
        resultType: "success",
        delay: 300,
    },
    {
        text: "MEMORY CHECK",
        type: "normal",
        result: " ........................... OK",
        resultType: "success",
        delay: 250,
    },
    {
        text: "LOADING ARCHIVE INDEX",
        type: "normal",
        result: " ...................... OK",
        resultType: "success",
        delay: 300,
    },
    {
        text: "CHECKING TEMPORAL INDEX",
        type: "normal",
        result: " ................. WARNING",
        resultType: "warning",
        delay: 350,
    },
    {
        text: "ATTEMPTING RECOVERY",
        type: "normal",
        result: " ..................... OK",
        resultType: "success",
        delay: 500,
    },
    {
        text: "CHECKING DATABASE",
        type: "normal",
        result: " ....................... OK",
        resultType: "success",
        delay: 300,
    },
    {
        text: "SECURITY MODULE",
        type: "normal",
        result: " ......................... OK",
        resultType: "success",
        delay: 300,
    },
    {
        text: "ARCHIVE INTEGRITY",
        type: "normal",
        result: " ....................... OK",
        resultType: "success",
        delay: 300,
    },
    {
        text: "----------------------------------------",
        type: "normal",
        delay: 150,
    },
    {
        text: "SYSTEM READY",
        type: "success",
        delay: 500,
    },
];

export const noiseMessages: BootMessage[] = [
    {
        text: "WARNING: CLOCK DRIFT DETECTED",
        type: "warning",
    },
    {
        text: "ERROR: INDEX CHECKSUM MISMATCH",
        type: "error",
    },
    {
        text: "ERROR: MEMORY ADDRESS 0x004F NOT RESPONDING",
        type: "error",
    },
    {
        text: "WARNING: ARCHIVE NODE 03 NOT RESPONDING",
        type: "warning",
    },
    {
        text: "ERROR: INVALID TEMPORAL REFERENCE",
        type: "error",
    },
    {
        text: "NOTICE: LEGACY PROTOCOL DETECTED",
        type: "warning",
    },
];