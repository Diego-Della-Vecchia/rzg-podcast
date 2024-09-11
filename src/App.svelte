<script lang="ts">
	import Audio from './lib/audio.svelte';
	import Subtitles from './lib/subtitles.svelte';

	const subtitles: { timestamp: number; message: string }[] = [
		{ timestamp: 1, message: 'Nach 1 sekunde' },

		{ timestamp: 2, message: 'Nach 2 sekunden' },
		{ timestamp: 4, message: 'Nach 4 sekunden' },
		{ timestamp: 5, message: 'Nach 5 sekunden' },

		{ timestamp: 6, message: 'Nach 6 sekunden' },

		{ timestamp: 7, message: 'Nach 7 sekunde' },
		{ timestamp: 8, message: 'Nach 8 sekunde' },
	];
</script>

<h1 class="title">China als Halbkolonie</h1>
<Audio url="/audio.mp3"></Audio>

<Subtitles {subtitles} />

<style>
	.title {
		text-align: center;
		font-family: 'Poppins';
		font-size: min(10vw, 4rem);
		color: var(--color);
	}
</style>
