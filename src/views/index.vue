<template>
    <DefaultLayout>
        <div class="flex h-screen">
            <!-- Left side with image -->
            <div class="w-1/2">
                <!-- Placeholder for the image -->
                <div class="h-full flex items-center justify-center">
                    <img src="@/assets/Profile2.jpg" alt="José Rocha" class="fadeL cover h-full" style="object-fit: cover;">
                </div>
            </div>

            <!-- Right side with content -->
            <div class="w-1/2 p-12 mt-16 flex flex-col justify-center fadeR">
                <div class="p-4 bg-base-200 rounded-xl ">
                    <h1 class="text-2xl font-bold mb-12 uppercase ">Hoooola Juli Rios!  (Imaginatelo en mi voz)</h1>
                    <h2 class="text-right text-4xl  mb-24 p-4 bg-base-200 rounded-xl "
                        style="line-height: 120%;">
                        Feliz Cumpleaños a mi Amigo, Compañero, Bro, Sensei, Confidente, Inspiración, Apoyo
                        incondicional,
                        Guía, Maestro, Héroe, Alma gemela, Familia elegida, Tesoro
                        invaluable, Luz en mi camino, Ángel de la guarda, etc.
                    </h2>
                    <p class="text-lg p-4 bg-base-200 rounded-xl ">
                        Espero que pases un muy feliz cunpleaños y disfutes mucho de tu dia amigo mio. Por mas que hoy
                        este
                        a la
                        distancia te mando un abrazo enrome y ojala proto podamos seguir nuestras aventruas y viajes de
                        domingo
                        juntos ya se ahi o en europa, solo dios sabe que nos espera...
                    </p>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layout/DefaultLayout.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&display=swap');

.fancyFont {
    font-family: "Oswald", sans-serif;
}
</style>