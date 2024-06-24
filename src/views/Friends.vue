<template>
    <DefaultLayout>
        <div class="container fade" style="margin-left: 10%; margin-top: 5%; max-height: 90vh;">
            <div>
                <div class="content">
                    <h2>Juli Y Martin</h2>
                    <span>Mac Donald's, Cordoba</span>
                </div>
            </div>
            <div>
                <div class="content">
                    <h2>Juli, Colazo y FranB</h2>
                    <span>Dique, Rio ceballos</span>
                </div>
            </div>
            <div>
                <div class="content">
                    <h2>Juli y Martin</h2>
                    <span>Hotel Coli, Rio Ceballos</span>
                </div>
            </div>
            <div>
                <div class="content">
                    <h2>Juli, Colazo, Civetta y FranB</h2>
                    <span>Mac Donald's, Cordoba</span>
                </div>
            </div>
            <div>
                <div class="content">
                    <h2>Juli y Manu</h2>
                    <span>Villa General Belgrano</span>
                </div>
            </div>
            <div>
                <div class="content">
                    <h2>Juli, Colazo y Manu</h2>
                    <span>Villa General Belgrano</span>
                </div>
            </div>
            <div>
                <div class="content">
                    <h2>Juli y Colazo</h2>
                    <span>Ubicacion Desconocida</span>
                </div>
            </div>
            <div>
                <div class="content">
                    <h2>Juli, Colazo, FranB, Maritn y Manu</h2>
                    <span>Egreso Coli JR</span>
                </div>
            </div>
            <div>
                <div class="content">
                    <h2>Juli Y FranB</h2>
                    <span>Juli's House </span>
                </div>
            </div>
            
        </div>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layout/DefaultLayout.vue'

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    display: grid;
    place-items: center;
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
}

.container {
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 100vh;
    gap: 10px;

    >div {
        flex: 0 0 120px;
        border-radius: 0.5rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        box-shadow: 1px 5px 15px #1e0e3e;
        position: relative;
        overflow: hidden;

        &:nth-of-type(1) {
            background: url("@/assets/jul_1.jpg")no-repeat 40% / cover;
        }

        &:nth-of-type(2) {
            background: url("@/assets/jul_2.jpg")no-repeat 40% / cover;
        }

        &:nth-of-type(3) {
            background: url("@/assets/jul_3.jpg")no-repeat 40% / cover;
        }

        &:nth-of-type(4) {
            background: url("@/assets/jul_4.jpg")no-repeat 40% / cover;
        }

        &:nth-of-type(5) {
            background: url("@/assets/jul_5.jpg")no-repeat 40% / cover;
        }

        &:nth-of-type(6) {
            background: url("@/assets/jul_6.jpg")no-repeat 30% / cover;
        }

        &:nth-of-type(7) {
            background: url("@/assets/jul_7.jpg")no-repeat 40% / cover;
        }
        &:nth-of-type(8) {
            background: url("@/assets/jul_8.jpg")no-repeat 50% / cover;
        }
        &:nth-of-type(9) {
            background: url("@/assets/jul_9.jpg")no-repeat 40% / cover;
        }

        .content {
            font-size: 1.5rem;
            color: #fff;
            display: flex;
            align-items: center;
            padding: 15px;
            opacity: 0;
            flex-direction: column;
            height: 100%;
            justify-content: flex-end;
            background: rgb(2, 2, 46);
            background: linear-gradient(0deg,
                    rgba(2, 2, 46, 0.6755077030812324) 0%,
                    rgba(255, 255, 255, 0) 100%);
            transform: translatey(100%);
            transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
            visibility: hidden;

            span {
                display: block;
                margin-top: 5px;
                font-size: 1.2rem;
            }
        }

        &:hover {
            flex: 0 0 40vw;
            box-shadow: 1px 3px 15px #d8a745;
            transform: translatey(-30px);
        }

        &:hover .content {
            opacity: 1;
            transform: translatey(0%);
            visibility: visible;
        }
    }
}
</style>