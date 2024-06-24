<template>
    <DefaultLayout>
        <div class="fade bg-base-300 text-white min-h-screen flex flex-col justify-center items-center p-8">
            <h1 class="text-6xl font-light mb-12">
                <span class="text-orange-500 mr-4 uppercase ">•</span>
                ENCONTRAME EN 
            </h1>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-24">
                <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank"
                    rel="noopener noreferrer"
                    class="flex flex-col items-center hover:text-orange-500 transition-colors">
                    <component :is="link.icon" class="w-12 h-12 mb-2" />
                    <span class="text-sm">{{ link.name }}</span>
                </a>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layout/DefaultLayout.vue'
import { ref } from 'vue'
import { Instagram, Music2Icon, Music, Phone, Mail, Linkedin } from 'lucide-vue-next'

const socialLinks = ref([
  { name: 'Instagram', url: 'https://www.instagram.com/julianrios7?igsh=MWoyaG9idjhoZGdkZg==', icon: Instagram },
  { name: 'TikTok', url: 'https://www.tiktok.com/@julianrioss?_t=8nTA2AbSfuY&_r=1', icon: Music2Icon },
  { name: 'Spotify', url: 'https://open.spotify.com/user/juliancitorios?si=tiye7TqgQv-7BUW2LG4vVQ', icon: Music },
  { name: 'WhatsApp', url: 'https://wa.me/+5493543605066', icon: Phone },
  { name: 'Email', url: 'mailto:julianrios873@gmail.com', icon: Mail },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/juli%C3%A1n-r%C3%ADos-715741236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: Linkedin },
])

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}
</style>