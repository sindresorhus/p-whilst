/**
While `condition` returns `true`, executes `action` repeatedly, and then resolves the promise to the result of the last call to `action`. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

@param condition - Expected to return a `boolean` or a `Promise<boolean>` that indicates whether to execute `action`.
@param action - Action to run for each iteration. You can return a promise and it will be handled.

@example
```
import pWhilst from 'p-whilst';

let count = 0;

await pWhilst(
	() => count < 5,
	() => count++
);

console.log(count);
//=> 5
```
*/
export default function pWhilst<ValueType>(
	condition: (value: ValueType | undefined) => PromiseLike<boolean> | boolean,
	action: (value: ValueType) => ValueType | PromiseLike<ValueType>,
	initialValue?: ValueType,
): Promise<ValueType>;
