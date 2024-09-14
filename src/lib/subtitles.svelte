<script lang="ts">
	let { subtitles }: { subtitles: { timestamp: number; message: string }[] } = $props();

	import { current } from './stores.svelte';

	import { fly } from 'svelte/transition';

	let userHasScrolled = $state(false);

	let currentSubtitles: { timestamp: number; message: string }[] = $state([]);

	let previousTime = -1;

	$effect(() => {
		const currentTime = Math.floor(current.time);

		previousTime = currentTime;
		const newSubtitles: { timestamp: number; message: string }[] = [];

		subtitles.forEach((subtitle) => {
			if (currentTime >= subtitle.timestamp) {
				newSubtitles.push(subtitle);
			}
		});
		currentSubtitles = newSubtitles.reverse();
	});
</script>

{#if currentSubtitles.length != 0}
	<div class="container" id="subtitles" transition:fly={{ y: 50 }} onscroll={() => (userHasScrolled = true)}>
		{#each currentSubtitles as subtitle (subtitle.timestamp)}
			<p class="animate">{subtitle.message}</p>
		{/each}
	</div>
{/if}

{#if userHasScrolled}
	<button
		transition:fly={{ y: 50 }}
		onclick={() => {
			const div = document.querySelector('#subtitles');
			div?.scrollTo({ top: 0, behavior: 'smooth' });
			setTimeout(() => (userHasScrolled = false), 500);
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
		overflow-x: hidden;
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
		transition: transform 200ms ease-in-out;
	}

	button:active {
		transform: scale(1.1);
		background-color: white;
		-webkit-tap-highlight-color: transparent;
	}

	.animate {
		animation: fade 0.3s ease-in-out;
	}

	@keyframes fade {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
