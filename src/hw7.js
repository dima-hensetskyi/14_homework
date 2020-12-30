export function getMiddleTaxes() {
    return +(this.tax * this.middleSalary).toFixed(2);
}
