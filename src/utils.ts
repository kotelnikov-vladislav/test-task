// Целочисленное деление
const div = (val: number, by: number): number => {
    return (val - val % by) / by;
};

export {
    div
}