import CurrencyDenomination from "./types/currencyDenomination";

//note: the code won't work right if you don't sort the denominations in descending order
//so if you add currencies or denominations, make sure to sort them
export default {
  USD: [
    new CurrencyDenomination("Dollar", 1),
    //new CurrencyDenomination("Half Dollar", 0.5),
    new CurrencyDenomination("Quarter", 0.25),
    new CurrencyDenomination("Dime", 0.1),
    new CurrencyDenomination("Nickel", 0.05),
    new CurrencyDenomination("Penny", 0.01)
  ],
};
