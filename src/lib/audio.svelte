<script lang="ts">
	let { url }: { url: string } = $props();

	import { current } from '../lib/stores.svelte';

	let paused = $state(false);

	let audioElement: HTMLAudioElement = $state({} as HTMLAudioElement);

	let duration = $state(0);

	function play() {
		if (paused) {
			audioElement.play();
		} else {
			audioElement.pause();
		}
		paused = !paused;
	}

	$effect(() => {
		if (current.time == audioElement.duration) {
			current.time = 0;
		}
	});
</script>

<audio bind:this={audioElement} src={url} bind:paused bind:currentTime={current.time} bind:duration></audio>

<div class="container">
	{#if paused}
		<button class="pause" onclick={play}>
			<img src="/play.svg" alt="" />
		</button>
	{:else}
		<button class="play" onclick={play}>
			<img src="/pause.svg" alt="" />
		</button>
	{/if}
	<input
		type="range"
		bind:value={current.time}
		onchange={() => {
			audioElement.play();
			paused = false;
		}}
		min={0}
		max={duration}
		step={0.1}
	/>
</div>

<style>
	.container {
		display: flex;
		padding: 10px;
		border: 2px dashed var(--color);
		justify-content: center;
		align-items: center;
		height: 100px;
		width: min(80vw, 400px);
		border-radius: 50px;
		margin: 0 auto;
		gap: 20px;
	}
	button {
		width: 60px;
		height: 60px;
		background: var(--color);
		transition: border-radius 0.2s ease-in-out;
		cursor: pointer;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.play {
		animation: forwards play 0.2s 1;
	}
	.pause {
		animation: forwards pause 0.2s 1;
	}

	@keyframes play {
		0% {
			border-radius: 10%;
		}
		100% {
			border-radius: 100%;
		}
	}
	@keyframes pause {
		0% {
			border-radius: 100%;
		}
		100% {
			border-radius: 10%;
		}
	}
	img {
		width: 30px;
	}

	input {
		width: 50%;
		-webkit-appearance: none;
		appearance: none;
		-moz-appearance: none;
		cursor: pointer;
		background-size: contain;
	}

	input::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		appearance: none;
		height: 15px;
		background: var(--grey);
		border-radius: 10px;
	}

	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 30px;
		background: var(--color);
		border-radius: 5px;
		margin-top: -7.5px; /* Half the difference between thumb height and track height */
	}
</style>
