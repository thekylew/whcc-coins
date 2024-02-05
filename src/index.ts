import commandLineArgs from 'command-line-args';
import optionDefinitions from './optionDefinitions';
import calculateChange from './calculateChange';
import currencyDenominations from './currencyDenominations';

const { amount, currency } = commandLineArgs(optionDefinitions);

//validate args
if (!amount || isNaN(amount)) {
  console.log('Please provide a valid amount. Example: `npm run start -- --amount=3.50`');

  process.exit(1);
}

if (!currency || !currencyDenominations[currency]) {
  console.log('Please provide a valid currency. Example: `npm run start -- --currency=usd`');
  console.log(`Supported currencies: ${Object.keys(currencyDenominations).join(', ')}`);

  process.exit(1);
}

//get denominations for given currency
const denominations = currencyDenominations[currency];

//calculate change
const change = calculateChange(amount, denominations);

//log the output
console.log(`Change for ${amount} ${currency}:`);

change.forEach((coin) => {
  console.log(`${coin.count} x ${coin.denominationName}`);
});