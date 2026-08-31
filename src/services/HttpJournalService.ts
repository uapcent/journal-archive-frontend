import type {
    JournalEntry,
    JournalService,
} from "./JournalService";

export class HttpJournalService implements JournalService {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getEntry(date: string): Promise<JournalEntry | null> {
        const response = await fetch(
            `${this.baseUrl}/entries/${date}`,
        );

        if (response.status === 404) {
            return null;
        }

        if (!response.ok) {
            throw new Error(
                `Failed to retrieve journal entry: ${response.status}`,
            );
        }

        return response.json();
    }
}