<script lang="ts">
	export let data;
	import type { Poll } from '$lib/types.ts';
	import PollCompontnt from '$lib/components/poll.svelte';
	let polls: Poll[] = data.polls as Poll[];
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<div class="my-10 flex min-h-screen w-1/3 min-w-[300px] flex-col items-center justify-center">
		{#each polls as poll, i}
			{#if i}
				<PollCompontnt question={poll.question} answers={poll.answers} />
			{/if}
		{/each}
	</div>
</div>
