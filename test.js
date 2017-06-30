import test from 'ava';
import m from '.';

test('main', async t => {
	const result = [];
	let counter = 0;

	await m(
		() => result.length < 7,
		() => {
			result.push(counter++);
		}
	);

	t.is(counter, 7);
	t.deepEqual(result, [0, 1, 2, 3, 4, 5, 6]);
});

test('works with action returning a promise', async t => {
	const result = [];
	let counter = 0;

	await m(
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

	const prom = m(
		() => result.length < 10,
		() => new Promise(resolve => {
			if (counter === 7) {
				throw new Error('BAAD');
			}

			result.push(counter++);
			resolve();
		})
	);

	await t.throws(prom, 'BAAD');
	t.is(counter, 7);
	t.deepEqual(result, [0, 1, 2, 3, 4, 5, 6]);
});
