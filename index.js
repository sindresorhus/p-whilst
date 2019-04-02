'use strict';

const pWhilst = async (condition, action) => {
	const loop = async actionResult => {
		if (condition(actionResult)) {
			return loop(await action());
		}
	};

	return loop();
};

module.exports = pWhilst;
// TODO: Remove this for the next major release
module.exports.default = pWhilst;
