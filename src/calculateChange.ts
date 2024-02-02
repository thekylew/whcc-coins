import CurrencyDenomination from "./types/currencyDenomination";
import Change from "./types/change";

// Recursive function to calculate change
export default function calculateChange(
  amount: number, // The amount to calculate change for
  denominations: CurrencyDenomination[], // The denominations to use for change
  result: Change[] = [] // The result of the calculation - default to empty
): Change[] {
  if (amount <= 0) return result;

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    if (amount >= denomination.value) {
      const count = Math.floor(amount / denomination.value);
      amount -= count * denomination.value;
      amount = parseFloat(amount.toFixed(2)); // Correct for floating point precision issues

      const existingIndex = result.findIndex(
        (r) => r.denominationName === denomination.name
      );
      if (existingIndex >= 0) {
        result[existingIndex].count += count;
      } else {
        result.push(new Change(denomination.name, count));
      }

      // Recursively call to process the remainder of the amount with the current state of result
      return calculateChange(amount, denominations, result);
    }
  }

  // If no suitable denomination is found (which shouldn't happen with proper inputs), return the result
  return result;
}
