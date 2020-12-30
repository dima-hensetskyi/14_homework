export const numberFilter = (arrNumber) => arrNumber.filter((number) => Number.isInteger(number));
export function getAverage(...numbers) {
    const numbersFilter = numberFilter(numbers);
    return numbersFilter.reduce((total, number, index, arr) => {
        total += number;
        const lastNumber = index === arr.length - 1;
        if (lastNumber) {
            return total / arr.length;
        } else {
            return total;
        }

    }, 0);
}