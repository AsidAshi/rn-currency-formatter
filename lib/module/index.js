import { ISO_CURRENCY_DATA } from "./currencyData";
export function getSymbolInfo(input) {
  input = input.trim();
  // Extract the symbol and amount from the input string
  const regex = /^([^\d.,]+)?\s*([\d,.]+)\s*([^\d.,]+)?$/;
  const match = input.match(regex);
  if (!match) {
    return null; // Return null if input format is incorrect
  }

  // Extract the symbol and amount from the matched groups
  const symbol = (match[1] || match[3] || "").trim(); // Symbol can be either at the start or end
  const amount = parseFloat(match[2].replace(/,/g, ''));

  // Find the currency in the array based on the symbol
  const currency = ISO_CURRENCY_DATA.find(c => c.symbol === symbol);
  if (!currency) {
    return null; // Return null if currency symbol is not found
  }

  // Return the currency details along with the amount
  return {
    symbol: currency.symbol,
    currency_code: currency.iso_code,
    country: currency.country,
    country_code: currency.country_code,
    amount: amount
  };
}
export function getCodeInfo(input) {
  input = input.trim();
  // Extract the symbol and amount from the input string
  const regex = /^([^\d.,]+)?\s*([\d,.]+)\s*([^\d.,]+)?$/;
  const match = input.match(regex);
  if (!match) {
    return null; // Return null if input format is incorrect
  }

  // Extract the symbol and amount from the matched groups
  const code = (match[1] || match[3] || "").trim(); // Symbol can be either at the start or end
  const amount = parseFloat(match[2].replace(/,/g, ''));

  // Find the currency in the array based on the symbol
  const currency = ISO_CURRENCY_DATA.find(c => c.iso_code === code);
  if (!currency) {
    return null; // Return null if currency symbol is not found
  }

  // Return the currency details along with the amount
  return {
    symbol: currency.symbol,
    iso_code: currency.iso_code,
    country: currency.country,
    country_code: currency.country_code,
    count: amount
  };
}
//# sourceMappingURL=index.js.map