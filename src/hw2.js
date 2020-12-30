 export function sum (minNumber, maxNumber, odd) {
    let result = 0;
    for (let i = minNumber; i <= maxNumber; i++) {
        if (odd && i % 2 === 0) {
            continue;
        }
        result += i;
    }
    return result;
}
