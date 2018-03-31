'use strict';

const wrap = fn => new Promise(resolve => {
	resolve(fn());
});

module.exports = (condition, action) => wrap(function loop(actionResult) {
	if (condition(actionResult)) {
		return wrap(action).then(loop);
	}
});
