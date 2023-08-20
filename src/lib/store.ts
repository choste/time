import { writable } from 'svelte/store';

export const initialTags: { name: string }[] = [];

export const tagStore = writable(initialTags);
