import test from 'ava';
import pWhilst from './index.js';

test('main', async t => {
	const result = [];
	let counter = 0;

	await pWhilst(
		() => result.length < 7,
		() => {
			result.push(counter++);
		}
	);

	t.is(counter, 7);
	t.deepEqual(result, [0, 1, 2, 3, 4, 5, 6]);
});

test('calling sequence is correct', async t => {
	const sequence = [];
	let counter = 0;

	await pWhilst(
		() => {
			sequence.push(`predicate${counter}`);
			return counter < 2;
		},
		() => {
			sequence.push(`action${counter}`);
			counter++;
		}
	);

	t.is(counter, 2);
	t.deepEqual(sequence, [
		'predicate0',
		'action0',
		'predicate1',
		'action1',
		'predicate2'
	]);
});

test('condition receives action result', async t => {
	const result = [];

	await pWhilst(
		input => input === undefined || input.length < 7,
		() => {
			result.push(result.length);
			return result;
		}
	);

	t.deepEqual(result, [0, 1, 2, 3, 4, 5, 6]);
});

test('works with action returning a promise', async t => {
	const result = [];
	let counter = 0;

	await pWhilst(
		() => result.length < 7,
		() => new Promise(resolve => {
			result.push(counter++);
			resolve();
		})
	);

	t.is(counter, 7);
	t.deepEqual(result, [0, 1, 2, 3, 4, 5, 6]);
});

test('stops on error', async t => {
	const result = [];
	let counter = 0;

	const promise = pWhilst(
		() => result.length < 10,
		() => new Promise(resolve => {
			if (counter === 7) {
				throw new Error('BAAD');
			}

			result.push(counter++);
			resolve();
		})
	);

	await t.throwsAsync(promise, {message: 'BAAD'});
	t.is(counter, 7);
	t.deepEqual(result, [0, 1, 2, 3, 4, 5, 6]);
});
