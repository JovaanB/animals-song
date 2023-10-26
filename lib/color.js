const create = ({ singular = "blanc", plural = "blancs" } = {}) => Object.freeze({
    toString: (number) => number === 1 ? singular : plural,
})

export const Color = {
    create,
};