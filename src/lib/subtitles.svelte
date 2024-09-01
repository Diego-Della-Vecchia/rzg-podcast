<script lang="ts">
	let { subtitles }: { subtitles: { timestamp: number; message: string }[] } = $props();

	import { current } from './stores.svelte';

	import { fly } from 'svelte/transition';

	let userHasScrolled = $state(false);

	let ignoreScroll = $state(false);

	let previousTime = 0;

	$effect(() => {
		const currentTime = Math.floor(current.time);

		if (currentTime == previousTime) return;

		previousTime = currentTime;

		let index = 0;

		for (let i = 0; i < subtitles.length; i++) {
			if (subtitles[i].timestamp >= currentTime || i === subtitles.length - 1) {
				index = i;
				break;
			}
		}

		const all = document.querySelectorAll('.current');
		all.forEach((el) => {
			el.classList.remove('current');
		});

		const message = document.getElementById('message' + index);
		message?.classList.add('current');

		if (!userHasScrolled) {
			ignoreScroll = false;
			message?.scrollIntoView({ behavior: 'smooth' });
			userHasScrolled = false;
			ignoreScroll = true;
		}

		console.log(userHasScrolled);
	});
</script>

<div
	class="container"
	onscroll={() => {
		if (ignoreScroll) return;
		userHasScrolled = true;
	}}
>
	{#each subtitles as subtitle, i}
		<p id={'message' + i} class={i == 0 ? 'current' : ''}>{subtitle.message}</p>
	{/each}
</div>

{#if userHasScrolled}
	<button transition:fly={{ y: 50 }} onclick={() => (userHasScrolled = false)}>Synchronisieren</button>
{/if}

<style>
	.container {
		border: var(--color) dashed 2px;
		padding: 20px;
		width: min(90vw, 400px);
		margin: 50px auto;
		height: 300px;
		display: flex;
		justify-content: start;
		align-items: center;
		flex-direction: column;
		gap: 10px;
		overflow-y: auto;
	}

	p {
		text-align: center;
		font-size: 15px;
		font-family: 'Poppins';
		padding: 10px;
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--grey);
		border-radius: 20px;
	}

	.current {
		background-color: var(--color);
		color: white;
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
