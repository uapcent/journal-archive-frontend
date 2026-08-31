import type {
    JournalEntry,
    JournalService,
} from "./JournalService";

export class DummyJournalService implements JournalService {
    async getEntry(date: string): Promise<JournalEntry | null> {
        if (date !== "2025-06-14") {
            return null;
        }

        return {
            date: "2025-06-14",
            content:
                "# Tercer dia de Batman \n\n" +
                "Ja és una tradició nostra prou coneguda. Encara que aquest any vam estar a punt de no fer-la.\n\n" +
                "L'editorial que s'encarregava de regalar còmics si contestaves preguntes correctament va tancar després d'estafar diners a moltes tendes. Panini va ocupar el seu lloc, però no va fer cap anunci especial.",

        };
    }
}