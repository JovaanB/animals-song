export const AnimalsSong = () => {
    return {
        verse(number) {
            return `${number} rabbit${number > 1 ? "s" : ""}`;
        },

        song() {
            return [1, 2, 3].map(this.verse).join("\n");
        }
    }
};