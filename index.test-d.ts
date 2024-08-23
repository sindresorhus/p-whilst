import {expectType} from 'tsd';
import pWhilst from './index.js';

let count = 0;

expectType<Promise<number>>(
	pWhilst(
		currentCount => {
			expectType<number | undefined>(currentCount);
			return currentCount === undefined ? true : currentCount < 5;
		},
		() => count++,
	),
);

expectType<Promise<number>>(
	pWhilst(
		async () => count < 5,
		() => count++,
	),
);
