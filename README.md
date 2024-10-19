# rn-currency-formatter

This is React Native library that helps convert currency symbols into their corresponding ISO currency codes, country names, and amounts, and also works in reverse.

## Installation

```sh
npm install rn-currency-formatter
```
or 

```sh
yarn add rn-currency-formatter
```

## Usage

```js
import { getSymbolInfo, getCodeInfo } from 'rn-currency-formatter';

// ...

const symbolInfo = await getSymbolInfo("$14.6");

const codeInfo = await getCodeInfo("USD 14.6");


// console.log("result : ", symbolInfo or codeInfo)
// output = {
//   "symbol": "$",
//   "iso_code": "USD",
//   "country": "United States Dollar",
//   "count": 14.6
// }


```
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
