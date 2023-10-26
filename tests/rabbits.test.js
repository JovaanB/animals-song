import { AnimalsSong } from "../lib";

describe("AnimalsSong", () => {
    test("verse 1", () => {
        expect(AnimalsSong().verse(1)).toBe(`1 petit lapin blanc sautant sur le chemin
Rencontre 1 autre petit lapin blanc
2 petits lapins blancs sont devenus copains.`);
    });

    test("verse 2", () => {
        expect(AnimalsSong().verse(2)).toBe(`2 petits lapins gris sautant sur le chemin
Rencontrent 1 autre petit lapin gris
3 petits lapins gris sont devenus copains.`);
    });

    test("verse 7", () => {
        expect(AnimalsSong().verse(7)).toBe(`7 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
8 doigts avec mes mains, pour compter les petits lapins blancs.`);
    });

    test("whole song", () => {
        expect(AnimalsSong().song()).toBe(
            `1 petit lapin blanc sautant sur le chemin
Rencontre 1 autre petit lapin blanc
2 petits lapins blancs sont devenus copains.
2 petits lapins gris sautant sur le chemin
Rencontrent 1 autre petit lapin gris
3 petits lapins gris sont devenus copains.
3 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
4 petits lapins blancs sont devenus copains.
4 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
5 petits lapins blancs sont devenus copains.
5 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
6 petits lapins blancs sont devenus copains.
6 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
7 petits lapins blancs sont devenus copains.
7 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
8 doigts avec mes mains, pour compter les petits lapins blancs.`
        );
    });
});