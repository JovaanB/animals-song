import { Color } from "./color";
import { Animal } from "./animal";

const size = (number) => {
    if (number === 1) {
        return "petit";
    }
    return "petits";
};

const addAnimal = ({ animal, number, color }) => create({ number: number + 1, color, animal });

const create = ({ number = 1, color = Color.White, animal = Animal.Rabbit } = {}) => Object.freeze({
    count: number,
    addAnimal: () => addAnimal({ animal, number, color }),
    toString: () => `${size(number)} ${animal.toString(number)} ${color.toString(number)}`,
});

export const RabbitsGroup = {
    create,
}