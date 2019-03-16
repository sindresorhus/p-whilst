import {expectType} from 'tsd-check';
import pWhilst from '.';

let count = 0;

expectType<Promise<void>>(
	pWhilst(
		currentCount => {
			expectType<number | undefined>(currentCount);

			return currentCount === undefined ? true : currentCount < 5;
		},
		() => count++
	)
);
