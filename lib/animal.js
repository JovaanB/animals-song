const create = ({ singular = "", plural = "" } = {}) => Object.freeze({
    toString: (number) => number === 1 ? singular : plural,
})

export const Animal = {
    create,
    Rabbit: create({ singular: "lapin", plural: "lapins" }),
    Toad: create({ singular: "crapaud", plural: "crapauds" }),
};