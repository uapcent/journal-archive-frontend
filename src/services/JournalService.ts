export type JournalEntry = {
    date: string;
    content: string;
    tags: string[];
    properties: Record<string, unknown>;
};

export interface JournalService {
    getEntry(date: string): Promise<JournalEntry | null>;
}