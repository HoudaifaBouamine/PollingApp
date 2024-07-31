import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database';

export async function POST({ request }) {
	const { question, answers } = await request.json();

	const userid = request.headers.get('userid');
	if (userid) {
		const { id } = await database.createPoll({ userid, question, answers });
		console.log('Poll created with id: ' + id);
		return json({ id }, { status: 201 });
	}
	return new Response(null, { status: 401 });
}

export async function GET({ request }) {
	const userid = request.headers.get('userid');
	if (userid) {
		var todos = database.getTodos('1');

		return json(todos, { status: 200 });
	}
	return new Response(null, { status: 401 });
}
