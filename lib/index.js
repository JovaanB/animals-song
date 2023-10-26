import { RabbitsMeeting } from "./rabbits-meeting";

export const AnimalsSong = () => {
    return {
        verse(number) {
            const rabbitsMeeting = RabbitsMeeting.of(number);

            return `${rabbitsMeeting}`;
            },
        song() {
            let song = "";
            for (let i = 1; i <= 7; i++) {
                song += `${this.verse(i)}${i < 7 ? "\n" : ""}`;
            }
            return song;
        }
    }
};