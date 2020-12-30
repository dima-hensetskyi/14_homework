export function getTheRest(cash) {
    const priceAmericano = 15.678;
    const priceFrappe = 123.965;
    const priceLatte = 90.2345;
    const getSumPrices = priceLatte + priceAmericano + priceFrappe;
    return +(cash - getSumPrices).toFixed(2);
}
