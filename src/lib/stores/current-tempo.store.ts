import { DEFAULT_TEMPO_SLIDER_VALUE } from '$lib/constants/tempo-slider-value.constant';
import { writable } from 'svelte/store';

export const currentTempoStore = writable<number>(DEFAULT_TEMPO_SLIDER_VALUE);
