import { Animal } from "./animal";
import { Color } from "./color";
import { RabbitsGroup } from "./rabbits-group";

const action = ({number, group}) => {
    if (number === 1) {
        return `Rencontre 1 autre ${group}`;
    }
    return `Rencontrent 1 autre ${group}`;
};

const conclusion = (group) => {
    const newGroup = group.addAnimal();
    if (group.count === 7) {
        return `8 doigts avec mes mains, pour compter les ${newGroup}.`;
    }
    return `${newGroup.count} ${newGroup} sont devenus copains.`;
};

const create = ({ animal = Animal.Rabbit, number = 1, color = Color.White } = {}) => {
    const group = RabbitsGroup.create({ animal, number, color });   
    const metGroup = RabbitsGroup.create({ animal, number: 1, color });
    const theAction = action({number, group: metGroup});
    const theConclusion = conclusion(group);

    return Object.freeze({
    group,
    toString() {
        return `${number} ${group} sautant sur le chemin
${theAction}
${theConclusion}`;
    }
});
};

const of = (number) => {
    switch (number) {
        case 2: return create({ number, color: Color.Grey });
        case 3: return create({ animal: Animal.Toad, number, color: Color.Green });
        case 5: return create({ number, color: Color.Brown });
        default: return create({ number, color: Color.White });
    }
}

export const RabbitsMeeting = {
    of,
}