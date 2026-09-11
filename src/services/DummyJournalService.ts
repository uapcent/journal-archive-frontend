import type {
    JournalEntry,
    JournalService,
} from "./JournalService";

export class DummyJournalService implements JournalService {
    async getEntry(date: string): Promise<JournalEntry | null> {

        if (date == "2025-06-14") {
            return {
                "date": "2019-05-04",
                "content": "Estic jo un tranquil dia d'abril de 2025, i m'agafe una camisa negra de l'armari per a anar al gimnàs. No li preste molta atenció fins que estic descansant entre exercicis.\r\n“Olimpíada matemàtica 2019” posa en la camisa. Curiós que tinga en el meu armari una camiseta esportiva d'un event matemàtic. Però... és impossible que jo haja assistit això.\r\nContinue llegint la camisa, i continuen les preguntes. Es va celebrar en l'institut de Betxí.\r\n\r\nLi pregunte al meu germà al respecte. Em pot confirmar que la camisa era seua, que no li cabia quan li la van donar, i res més. No recorda res.\r\n\r\n“Com he d'enrecordar-me de 2009?” em diu.\r\n\r\n“2019. Fa sis anys, no és tant de temps” conteste jo.\r\n",
                "tags": [],
                "properties": {
                    "dayOfWeek": "Dissabte",
                    "people": [
                        "Adrià"
                    ]
                }
            }
        }

        if (date == "2025-11-29") {
            return {
                "date": "2025-11-29",
                "content": "Ja en casa, Fernando m'envia un àudio. Era una cosa habitual en ell fa anys. Cadenes d'àudios de varios minuts sobre qualsevol cosa.\r\n\r\nEstos dies, rebre un audio seu, sense sol·licitar-lo, és estrany. Així que havia de ser important.\r\n\r\nM'intimidava un poc, per si era un audio on em deia lo molt que m'odia o que està enfadat amb mi.\r\n\r\nResulta ser una disculpa.\r\n\r\nPerquè jo era l'únic del grup que no sabia que lo que tenien ell i Marina... s'ha acabat. De fet, ni sabia si havia arribat a ser oficial en algun moment. No sabia res al respecte.\r\n\r\nFernando em conta que havien segut dos mesos molt intensos, però que ella s'ha acabat agobiant, ja que ha eixit d'una relació molt llarga, i ara està tot parat.\r\n\r\nEll no m'havia contat res perquè no volia que li diguera res a Josevi de Ludosport, i tampoc ens havíem vist en persona recentment.\r\n\r\nJo li he dit que no passa res, però li he comunicat que m'he sentit prou fora del grup estos mesos, perquè pareix que mai em conten res.\r\n\r\nQue al final mai canviarà res, però em pareix important comunicar el que pense.\r\n\r\nIgual que li vaig dir a Dante que no em pareix bé que la gent em deixe en llegit quan propose un pla.",
                "tags": [],
                "properties": {
                    "dayOfWeek": "Dissabte",
                    "people": [
                        "Fernando", "Dante"
                    ]
                }
            }
        }

        return null;

    }
}