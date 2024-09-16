<script lang="ts">
	import {
		MAX_TEMPO_SLIDER_VALUE,
		MIN_TEMPO_SLIDER_VALUE
	} from '$lib/constants/tempo-slider-value.constant';
	import { currentTempoStore } from '$lib/stores/current-tempo.store';

	function handleTempoChange(e: any) {
		currentTempoStore.set(e.target.value);
	}
</script>

<input
	id="default-range"
	type="range"
	max={MAX_TEMPO_SLIDER_VALUE}
	min={MIN_TEMPO_SLIDER_VALUE}
	on:input={handleTempoChange}
	bind:value={$currentTempoStore}
	class="mx-2 h-2 w-40 cursor-pointer appearance-none rounded-lg bg-gray-200 outline-none dark:bg-gray-700"
/>
