<script lang="ts">
	import { current } from './stores.svelte';

	let { subtitles }: { subtitles: { timestamp: number; message: string }[] } = $props();

	$effect(() => {
		const currentTime = Math.floor(current.time);
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

		console.log(index);
	});
</script>

<div class="container">
	{#each subtitles as subtitle, i}
		<p id={'message' + i} class={i == 0 ? 'current' : ''}>{subtitle.message}</p>
	{/each}
</div>

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
</style>
