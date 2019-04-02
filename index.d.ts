declare const pWhilst: {
	/**
	While `condition` returns `true`, executes `action` repeatedly, and then resolves the promise. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

	@param condition - Expected to return a boolean of whether to execute `action`.
	@param action - Action to run for each iteration. You can return a promise and it will be handled.

	@example
	```
	import pWhilst = require('p-whilst');

	(async () => {
		let count = 0;

		await pWhilst(
			() => count < 5,
			() => count++
		);

		console.log(count);
		//=> 5
	})();
	```
	*/
	<ValueType>(
		condition: (value: ValueType | undefined) => boolean,
		action: () => ValueType | PromiseLike<ValueType>
	): Promise<void>;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function pWhilst<ValueType>(
	// 	condition: (value: ValueType | undefined) => boolean,
	// 	action: () => ValueType | PromiseLike<ValueType>
	// ): Promise<void>;
	// export = pWhilst;
	default: typeof pWhilst;
};

export = pWhilst;
