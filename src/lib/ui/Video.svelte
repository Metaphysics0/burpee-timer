<script lang="ts">
	import burpeeLoop from '$lib/assets/burpee-loop.mov';
	import { onMount } from 'svelte';

	let videoElement: HTMLVideoElement;

	onMount(() => {
		const observer = new MutationObserver((records) => {
			console.log('mutitaion observer records', records);
			const els = records[0].removedNodes;
			console.log(els);
		});

		observer.observe(videoElement, { childList: true });
	});
</script>

<video autoplay loop muted class="mb-3 rounded-md shadow-md" bind:this={videoElement}>
	<source src={burpeeLoop} />
</video>
