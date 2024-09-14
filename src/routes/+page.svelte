<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	import burpeeLoop from '$lib/assets/burpee-loop.mov';
	import { RangeSlider } from '@skeletonlabs/skeleton';

	function changeSpeedOfVideo(e: any) {
		console.log('e', e);
	}

	$: progressBarValue = 50;

	const maxProgressBarValue = 100;
</script>

<div class="flex flex-col items-center">
	<Header />
	<!-- svelte-ignore a11y-media-has-caption -->
	<video autoplay loop muted class="mb-3 rounded-md shadow-md">
		<source src={burpeeLoop} />
	</video>

	<RangeSlider
		name="videoSpeed"
		value={progressBarValue}
		on:change={changeSpeedOfVideo}
		step={1}
		height="h-3"
		max={maxProgressBarValue}
		class="w-40"
	/>
</div>
