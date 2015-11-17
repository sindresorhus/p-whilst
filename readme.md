# promise-whilst [![Build Status](https://travis-ci.org/sindresorhus/promise-whilst.svg?branch=master)](https://travis-ci.org/sindresorhus/promise-whilst)

> Calls a function repeatedly while a condition returns true and then resolves the promise


## Install

```
$ npm install --save promise-whilst
```


## Usage

```js
const promiseWhilst = require('promise-whilst');

let count = 0;

promiseWhilst(() => {
	return count < 5;
}, () => {
	count++;
}).then(() => {
	console.log(count);
	//=> 5
});
```


## API

### promiseWhilst(condition, action)

Executes `action` repeatedly while `condition` returns `true` and then resolves the promise.Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

#### condition

Type: `function`

Should return a boolean of whether to continue.

#### action

Type: `function`

Action to run for each iteration.

You can return a promise and it will be handled.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
