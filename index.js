export default async function pWhilst(condition, action) {
	const loop = async actionResult => {
		if (await condition(actionResult)) {
			return loop(await action());
		}
	};

	return loop();
}
