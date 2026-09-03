import type { JournalService } from "./JournalService";
import { DummyJournalService } from "./DummyJournalService";
import { HttpJournalService } from "./HttpJournalService";

const useDummyService = true; // Set to true to use the dummy service for testing

export const journalServiceConfig: JournalService =
    useDummyService
        ? new DummyJournalService()
        : new HttpJournalService("http://localhost:8080");