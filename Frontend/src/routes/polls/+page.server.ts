import * as database from '$lib/server/database';
export function load() {
	var polls = database.getTodos('1');
	return {
		polls
	};
}
