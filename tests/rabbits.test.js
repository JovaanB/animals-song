import { AnimalsSong } from "../lib";

describe("AnimalsSong", () => {
    test("verse 1", () => {
        expect(AnimalsSong().verse(1)).toBe("1 rabbit");
    });

    test("verse 2", () => {
        expect(AnimalsSong().verse(2)).toBe("2 rabbits");
    });

    test("verse 3", () => {
        expect(AnimalsSong().verse(3)).toBe("3 rabbits");
    });

    test("verse 7", () => {
        expect(AnimalsSong().verse(7)).toBe("7 rabbits");
    });

    test("whole song", () => {
        expect(AnimalsSong().song()).toBe(
            "1 rabbit\n2 rabbits\n3 rabbits"
        );
    });
});