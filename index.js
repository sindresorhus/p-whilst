'use strict';

const wrap = fn => new Promise(resolve => {
	resolve(fn());
});

module.exports = (condition, action) => wrap(function loop() {
	if (condition()) {
		return wrap(action).then(loop);
	}
});
