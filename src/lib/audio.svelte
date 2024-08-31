<script lang="ts">
	let { url }: { url: string } = $props();

	import { current } from '../lib/stores.svelte';

	let paused = $state(false);

	let audioElement: HTMLAudioElement;

	function play() {
		if (paused) {
			audioElement.play();
		} else {
			audioElement.pause();
		}
		paused = !paused;
	}
</script>

<audio bind:this={audioElement} src={url} bind:paused bind:currentTime={current.time}></audio>

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
	}
	button {
		width: 60px;
		height: 60px;
		background: var(--color);
		transition: border-radius 0.2s ease-in-out;
		cursor: pointer;
		border: none;
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
</style>
