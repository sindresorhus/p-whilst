export default async function pWhilst(condition, action, initialValue) {
	const loop = async actionResult => {
		if (await condition(actionResult)) {
			return loop(await action(actionResult));
		}

		return actionResult;
	};

	return loop(initialValue);
}
