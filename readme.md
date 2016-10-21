# p-whilst [![Build Status](https://travis-ci.org/sindresorhus/p-whilst.svg?branch=master)](https://travis-ci.org/sindresorhus/p-whilst)

> Calls a function repeatedly while a condition returns true and then resolves the promise


## Install

```
$ npm install --save p-whilst
```


## Usage

```js
const pWhilst = require('p-whilst');

let count = 0;

pWhilst(() => {
	return count < 5;
}, () => {
	count++;
}).then(() => {
	console.log(count);
	//=> 5
});
```


## API

### pWhilst(condition, action)

Executes `action` repeatedly while `condition` returns `true` and then resolves the promise. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

#### condition

Type: `Function`

Expected to return a boolean of whether to continue.

#### action

Type: `Function`

Action to run for each iteration.

You can return a promise and it will be handled.


## Related

- [p-wait-for](https://github.com/sindresorhus/p-wait-for) - Wait for a condition to be true
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
