<template>
    <DefaultLayout>
        <header class="hero"></header>
        <article class="bg-base-200 ">
            <div class="mx-36">
                <h1>Julian Rios: El Superhéroe Cordobés que Salvó al Mundo (¡Y al Universo!) <span class="byline">by
                        Claude</span></h1>
                <h2 class="text-2xl font-semibold mt-8 mb-4">El Nacimiento de una Leyenda</h2>
                <p class="mb-6">Julian nació durante un eclipse solar total, mientras un cometa pasaba sobre el Hospital
                    Privado de Córdoba. Los médicos aseguran que, al nacer, Julian no lloró, sino que entonó
                    perfectamente
                    el himno nacional argentino, dejando a todos boquiabiertos.</p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Hazañas Increíbles</h2>

                <h3 class="text-xl font-medium mt-6 mb-3">Salvó la economía argentina... ¡con una empanada!</h3>
                <p class="mb-4">A los 18 años, Julian resolvió la crisis económica del país al inventar una empanada tan
                    deliciosa que se convirtió en moneda de cambio internacional. El FMI ahora acepta pagos en
                    "Empanadas de
                    Julian" y el peso argentino se cotiza por encima del dólar.</p>

                <h3 class="text-xl font-medium mt-6 mb-3">Detuvo el Cambio Climático con un Mate</h3>
                <p class="mb-4">Preocupado por el calentamiento global, Julian preparó un mate tan frío que congeló el
                    deshielo de los polos. Los científicos aún no pueden explicar cómo lo logró, pero aseguran que el
                    agujero en la capa de ozono ahora tiene forma de mate.</p>

                <h3 class="text-xl font-medium mt-6 mb-3">Trajo la Paz Mundial... ¡bailando el Cuarteto!</h3>
                <p class="mb-4">En una cumbre de la ONU, Julian bailó el cuarteto cordobés con tanto entusiasmo que
                    todos
                    los líderes mundiales se unieron a la pista. La paz fue declarada al son de "La Mona" Jiménez, y
                    ahora
                    el "Baile de Julian" es un ritual diplomático obligatorio.</p>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Reconocimientos Internacionales</h2>
                <ul class="list-disc list-inside mb-6">
                    <li>Premio Nobel de la Paz, Física, Química, Literatura y Economía (todos en el mismo año)</li>
                    <li>Ganador del Mundial de Fútbol... él solo contra selecciones completas</li>
                    <li>Nombrado "Embajador Intergaláctico" por una raza alienígena que vio sus hazañas desde el espacio
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-8 mb-4">Próximos Desafíos</h2>
                <p class="mb-4">Se rumorea que Julian está planeando:</p>
                <ul class="list-disc list-inside mb-6">
                    <li>Enseñar a los pingüinos de la Antártida a bailar el Malambo</li>
                    <li>Convertir el Sahara en un gigantesco parque acuático usando solo un balde y una manguera</li>
                    <li>Lograr que los porteños admitan que el fernet con coca es mejor que cualquier trago de CABA</li>
                </ul>

                <p class="mt-8 italic">Julian Rios continúa viviendo en su querida Córdoba, donde disfruta de un asado
                    los
                    domingos con su familia. Cuando se le pregunta sobre sus increíbles logros, simplemente responde:
                    "Eh,
                    no es para tanto, che. ¿Alguien quiere más fernet?"</p>
            </div>
        </article>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layout/DefaultLayout.vue';
</script>

<style scoped>
html,
body {
    margin: 0;
}

body {
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

header {
    background-image: url('@/assets/jul_10.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    position: sticky;
    top: 0;
    z-index: 0;
}

article {
    position: relative;
    z-index: 1;
    padding: 20px;

    h1 {
        margin-top: -100px;
        margin-left: -20px;
        margin-bottom: 20px;
        width: 100%;
        padding: 20px 20px 10px 20px;
        font-size: 40px;
        line-height: 40px;
        position: sticky;
        top: 0px;
        backdrop-filter: blur(20px);
        background-image: linear-gradient(to top,
                rgba(black, 0.75),
                rgba(black, 0.6));
        color: white;
        text-shadow: 3px 3px 10px rgba(black, 0.5);

        .byline {
            font-size: 14px;
        }
    }

    p {
        margin: 0 0 20px 0;
    }
}
</style>