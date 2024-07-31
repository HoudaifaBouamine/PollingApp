<!-- // poll compontnt -->

<script>
	export let question;
	export let answers;
	import * as Card from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { Button } from './ui/button';
	let selected = false;
</script>

<Card.Root class="my-1 w-full">
	<Card.Header class="pb-2">
		<Card.Title class="text-3xl">{question}</Card.Title>
	</Card.Header>
	<Card.Content>
		<p class="text-xs text-muted-foreground">Select Only One</p>
	</Card.Content>
	{#each answers as a}
		<Card.Footer class="{selected ? 'grid justify-items-start' : 'justify-items-center'} ">
			{#if selected}
				<h3>{a}</h3>
				<Progress value={Math.random() * 100} />
			{:else}
				<Button class="w-full" on:click={() => (selected = true)}>{a}</Button>
			{/if}
		</Card.Footer>
	{/each}
</Card.Root>
