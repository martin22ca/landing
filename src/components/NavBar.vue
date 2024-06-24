<template>
  <nav
    class="absolute top-0 left-0 right-0 z-10 bg-black bg-opacity-80 text-white py-4 px-6 rounded-full mx-auto my-4 max-w-6xl">
    <ul class="flex justify-between items-center">
      <li> <router-link to="/" class="bg-base-100 px-8 py-2 rounded-full m-2 hover:text-orange-400"
          :class="{ 'text-orange-500': isActive('/') }">Home</router-link></li>
      <li> <router-link to="/julian" class="bg-base-100 px-8 py-2 rounded-full m-2 hover:text-orange-400"
          :class="{ 'text-orange-500': isActive('/julian') }">Julian</router-link></li>
      <li class="text-2xl font-bold ">• Julian Rios •</li>
      <li><router-link to="/amistad" class="bg-base-100 px-8 py-2 rounded-full hover:text-orange-400"
          :class="{ 'text-orange-500': isActive('/amistad') }">Amistad</router-link></li>
      <li><router-link to="/contact" class="bg-base-100 px-8 py-2 rounded-full hover:text-orange-400"
          :class="{ 'text-orange-500': isActive('/contact') }">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const today = new Date().toISOString().split('T')[0]

const route = useRoute()

const isActive = (path: string) => {
  return route.path == path
}
</script>

<style>
/* You can add component-specific styles here */
</style>