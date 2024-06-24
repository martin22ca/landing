<template>
    <nav-bar />
    <slot>

    </slot>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'



</script>

<style>
/* You can add component-specific styles here */

.boxShadow{
    border-radius: 20px;
    background-color: rgb(47, 47, 58);
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.fadeL{
    animation: Animleft 3s ease 0s 1 normal forwards;
}

.fadeR{
    animation: AnimRight 1s ease-in 0s 1 normal forwards;
}

.fade{
	animation: Anim 1s ease-out 0s 1 normal forwards;
}

@keyframes Anim {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes Animleft {
	0% {
		opacity: 0;
		transform: translateX(-50px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes AnimRight {
	0% {
		opacity: 0;
		transform: translateX(50px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
</style>