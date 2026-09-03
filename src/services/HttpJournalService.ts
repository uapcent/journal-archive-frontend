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
        console.log(`Fetching journal entry for date: ${date} from ${this.baseUrl}/system/v1/notes/${date}`);
        const response = await fetch(
            `${this.baseUrl}/system/v1/notes/${date}`,
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