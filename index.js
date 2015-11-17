'use strict';

function wrap(fn) {
	return new Promise(function (resolve) {
		resolve(fn());
	});
}

module.exports = function (condition, action) {
	return wrap(function loop() {
		if (condition()) {
			return wrap(action).then(loop);
		}
	});
};
