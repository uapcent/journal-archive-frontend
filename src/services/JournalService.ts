export type JournalEntry = {
    date: string;
    content: string;
};

export interface JournalService {
    getEntry(date: string): Promise<JournalEntry | null>;
}