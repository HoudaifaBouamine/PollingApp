<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	let answers: string[] = [];
	$: ansersCount = answers.length;
	let question: string;
	function addAnswer() {
		console.log(answers);
		answers = [...answers, ''];
	}
	function removeAnswer(i: number) {
		answers = [...answers.slice(0, i), ...answers.slice(i + 1)];
	}
	function publishPoll() {
		console.log({ question, answers });

		fetch('/api/poll', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', userid: '1' },
			body: JSON.stringify({ question, answers })
		});
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<Input id="question" bind:value={question} class="w-1/2 border-2" placeholder="Question" />

	<Button class="my-5" on:click={addAnswer}>Add Answer</Button>

	{#each answers as answer, i}
		<div class="flex flex-row justify-center">
			<Input id={`answer${i}`} bind:value={answer} class="w-1/2 border-2" placeholder="Answer" />
			<Button type="submit" on:click={() => removeAnswer(i)}>X</Button>
		</div>
	{/each}

	<Button class="my-5" on:click={publishPoll}>Publish Poll</Button>
</div>
