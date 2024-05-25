export const sum = (arr) => {
    return arr.reduce((old, newVal) => {
        return old + newVal;
    },0);
};
