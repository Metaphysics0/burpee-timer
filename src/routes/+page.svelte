<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	import CurrentTempo from '$lib/ui/Tempo/CurrentTempo.svelte';
	import TempoSlider from '$lib/ui/Tempo/TempoSlider.svelte';
	import Video from '$lib/ui/Video.svelte';
</script>

<div class="flex flex-col items-center">
	<Header />
	<Video />
	<TempoSlider />
	<CurrentTempo />
</div>
