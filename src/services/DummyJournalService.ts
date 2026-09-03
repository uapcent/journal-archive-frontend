import type {
    JournalEntry,
    JournalService,
} from "./JournalService";

export class DummyJournalService implements JournalService {
    async getEntry(date: string): Promise<JournalEntry | null> {



        if (date == "2025-12-31") {
            return {
                date: "2025-12-31",
                content:
                    "a",
                tags: ["Batman", "Tradició", "Còmics"],
                properties: { Record: "Example", Importance: "High" }
            };
        }

        // return {
        //     date: "2025-06-14",
        //     content:
        //         "# Tercer dia de Batman \n\n" +
        //         "Ja és una tradició nostra prou coneguda. Encara que aquest any vam estar a punt de no fer-la.\n\n" +
        //         "L'editorial que s'encarregava de regalar còmics si contestaves preguntes correctament va tancar després d'estafar diners a moltes tendes. Panini va ocupar el seu lloc, però no va fer cap anunci especial.",
        //     tags: ["Batman", "Tradició", "Còmics"],
        //     properties: { Record: "Example", Importance: "High" }
        // };

        if (date == "2025-06-14") {
            return {
                "date": "2019-05-04",
                "content": "---\r\ndayOfWeek: Dissabte\r\npeople:\r\n  - Adrià\r\n---\r\nEstic jo un tranquil dia d'abril de 2025, i m'agafe una camisa negra de l'armari per a anar al gimnàs. No li preste molta atenció fins que estic descansant entre exercicis.\r\n“Olimpíada matemàtica 2019” posa en la camisa. Curiós que tinga en el meu armari una camiseta esportiva d'un event matemàtic. Però... és impossible que jo haja assistit això.\r\nContinue llegint la camisa, i continuen les preguntes. Es va celebrar en l'institut de Betxí.\r\n\r\nLi pregunte al meu germà al respecte. Em pot confirmar que la camisa era seua, que no li cabia quan li la van donar, i res més. No recorda res.\r\n\r\n>“Com he d'enrecordar-me de 2009?” em diu.\r\n> “2019. Fa sis anys, no és tant de temps”.\r\n",
                "tags": [],
                "properties": {
                    "dayOfWeek": "Dissabte",
                    "people": [
                        "Adrià"
                    ]
                }
            }
        }
        return null;

    }
}