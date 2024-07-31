const database = new Map();

export function getTodos(userid: string) {
	if (!database.has(userid)) {
		createPoll({ userid, question: '', answers: [] });
	}

	return Array.from(database.get(userid).values());
}

export function createPoll({
	userid,
	question,
	answers
}: {
	userid: string;
	question: string;
	answers: string[];
}) {
	if (!database.has(userid)) {
		database.set(userid, new Map());
	}

	const todos = database.get(userid);

	const id = crypto.randomUUID();

	todos.set(id, {
		id,
		question,
		answers,
		created: new Date(),
		done: false
	});

	return {
		id
	};
}

export function toggleTodo({ userid, id, done }: { userid: string; id: string; done: boolean }) {
	const todos = database.get(userid);
	todos.get(id).done = done;
}

export function deleteTodo({ userid, id }: { userid: string; id: string }) {
	const todos = database.get(userid);
	todos.delete(id);
}
