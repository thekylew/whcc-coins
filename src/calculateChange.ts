import CurrencyDenomination from "./types/currencyDenomination";
import Change from "./types/change";

// Recursive function to calculate change
export default function calculateChange(
  amount: number, // The amount to calculate change for
  denominations: CurrencyDenomination[], // The denominations to use for change
  result: Change[] = [] // The result of the calculation - default to empty
): Change[] {
  if (amount <= 0) return result;

  //iterate through the denominations we've been given
  //NOTE: we assume that the denominations are sorted in descending order; see currencyDenominations.ts
  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];

    // If the current denomination is less than or equal to the amount, use it
    if (amount >= denomination.value) {
      // Calculate the number of times the denomination can be used
      const count = Math.floor(amount / denomination.value);

      // Subtract the value of the denomination from the amount
      amount -= count * denomination.value;

      // Correct for floating point precision issues
      amount = parseFloat(amount.toFixed(2));

      // Add the denomination and count to the result
      result.push(new Change(denomination.name, count));

      // Recursively call to process the remainder of the amount with the current state of the result
      return calculateChange(amount, denominations, result);
    }
  }

  // If no suitable denomination is found (which shouldn't happen with proper inputs), return the result
  return result;
}
