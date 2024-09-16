<script lang="ts">
	import burpeeLoop from '$lib/assets/burpee-loop.mov';
	import { currentTempoStore } from '$lib/stores/current-tempo.store';

	let element: HTMLVideoElement;
	currentTempoStore.subscribe((tempo: number) => {
		if (element && tempo) {
			element.playbackRate = 1 + (tempo - 50) / 150;
		}
	});
</script>

<video autoplay loop muted class="mb-3 rounded-md shadow-md" bind:this={element}>
	<source src={burpeeLoop} />
</video>
