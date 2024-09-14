<script>
	import Header from '$lib/ui/Header.svelte';
	import burpeeAnimation from '$lib/assets/burpee-animation.gif';
</script>

<div class="flex flex-col items-center">
	<Header />
	<img src={burpeeAnimation} alt="burpee-animation" class="max-w-96" />
</div>
