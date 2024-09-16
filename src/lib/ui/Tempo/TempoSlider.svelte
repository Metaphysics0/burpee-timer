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
	class="mx-2 h-3 w-40 cursor-pointer appearance-none rounded-lg bg-blue-400 outline-none dark:bg-gray-700"
/>
