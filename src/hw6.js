export function getAverageMark({ subjects }) {
    const markLength = Object.values(subjects).reduce((totalLength, markSubj) => {
        return totalLength += markSubj.length;
    }, 0)

    const sumMark = Object.values(subjects).reduce((total, markSubj) => {
        const sumMarkSubj = markSubj.reduce((sum, number) => {
            return sum += number;
        }, 0)
        return total += sumMarkSubj;
    }, 0);

    return +(sumMark / markLength).toFixed(2);
}