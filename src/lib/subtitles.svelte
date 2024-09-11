<script lang="ts">
	let { subtitles }: { subtitles: { timestamp: number; message: string }[] } = $props();

	import { get } from 'svelte/store';
	import { current } from './stores.svelte';

	import { fly, fade } from 'svelte/transition';

	let userHasScrolled = $state(false);

	let currentSubtitles: { timestamp: number; message: string }[] = $state([]);

	let previousTime = -1;

	$effect(() => {
		const currentTime = Math.floor(current.time);

		previousTime = currentTime;
		const newSubtitles: { timestamp: number; message: string }[] = [];

		subtitles.forEach((subtitle) => {
			if (currentTime >= subtitle.timestamp) {
				console.log(subtitle);
				newSubtitles.push(subtitle);
			}
		});
		currentSubtitles = newSubtitles.reverse();
	});
</script>

<div class="container" id="subtitles" onscroll={() => (userHasScrolled = true)}>
	{#each currentSubtitles as subtitle, i}
		<p id={'message' + i} class={i == 0 ? 'current' : ''} in:fade={{ delay: 200 }}>{subtitle.message}</p>
	{/each}
</div>

{#if userHasScrolled}
	<button
		transition:fly={{ y: 50 }}
		onclick={() => {
			userHasScrolled = false;
			const div = document.querySelector('#subtitles');
			div?.scrollTo({ top: 0, behavior: 'smooth' });
		}}>Synchronisieren</button
	>
{/if}

<style>
	.container {
		border: var(--color) dashed 2px;
		padding: 20px;
		width: min(90vw, 400px);
		margin: 50px auto;
		height: 300px;
		display: flex;
		flex-direction: column-reverse;
		gap: 10px;
		overflow-y: scroll;
	}

	.container :first-child {
		background-color: var(--color);
		color: white;
	}

	p {
		text-align: center;
		font-size: 15px;
		font-family: 'Poppins';
		padding: 10px;
		width: 80%;
		margin: 10px auto;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--grey);
		border-radius: 20px;
	}

	button {
		color: black;
		background-color: white;
		border: var(--color) dashed 2px;
		padding: 10px;
		cursor: pointer;
		font-family: 'Poppins';
		font-size: 20px;
		margin: 0 auto;
		display: block;
		transition: transform 0.2s ease-in-out;
	}

	button:active {
		transform: scale(1.1);
		background-color: white;
		-webkit-tap-highlight-color: transparent;
	}
</style>
