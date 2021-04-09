# p-whilst

> While a condition returns true, calls a function repeatedly, and then resolves the promise

Think async version of the [`while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while).

## Install

```
$ npm install p-whilst
```

## Usage

```js
import pWhilst from 'p-whilst';

let count = 0;

await pWhilst(
	() => count < 5,
	() => count++
);

console.log(count);
//=> 5
```

## API

### pWhilst(condition, action)

While `condition` returns `true`, executes `action` repeatedly, and then resolves the promise. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

#### condition

Type: `Function`\
Arguments: The value the `action` function returns

Expected to return a boolean of whether to execute `action`.

#### action

Type: `Function`

Action to run for each iteration.

You can return a promise and it will be handled.

## Related

- [p-do-whilst](https://github.com/sindresorhus/p-do-whilst) - Calls a function repeatedly while a condition returns true and then resolves the promise
- [p-forever](https://github.com/sindresorhus/p-forever) - Run promise-returning & async functions repeatedly until you end it
- [p-wait-for](https://github.com/sindresorhus/p-wait-for) - Wait for a condition to be true
- [More…](https://github.com/sindresorhus/promise-fun)
