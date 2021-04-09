/**
While `condition` returns `true`, executes `action` repeatedly, and then resolves the promise. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

@param condition - Expected to return a boolean of whether to execute `action`.
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
	condition: (value: ValueType | undefined) => boolean,
	action: () => ValueType | PromiseLike<ValueType>
): Promise<void>;
