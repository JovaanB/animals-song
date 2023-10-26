import { Color } from "./color";
import { RabbitsGroup } from "./rabbits-group";

const action = ({number, group}) => {
    if (number === 1) {
        return `Rencontre 1 autre ${group}`;
    }
    return `Rencontrent 1 autre ${group}`;
};

const conclusion = (group) => {
    const newGroup = group.addRabbit();
    if (group.count === 7) {
        return `8 doigts avec mes mains, pour compter les ${newGroup}.`;
    }
    return `${newGroup.count} ${newGroup} sont devenus copains.`;
};

const create = ({ number = 1 } = {}) => {
    const group = number === 2 ? RabbitsGroup.create({ number, color: Color.create({ singular: "gris", plural: "gris" }) }) : RabbitsGroup.create({ number });   
    const metGroup = number === 2 ? RabbitsGroup.create({ number: 1, color: Color.create({ singular: "gris", plural: "gris" }) }) : RabbitsGroup.create({ number: 1 });   

    return Object.freeze({
    group,
    action: action({number, group: metGroup}),
    conclusion: conclusion(group),
});
}

export const RabbitsMeeting = {
    create,
}