<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://assets.calendly.com/assets/external/widget.js');
</script>

<template>
    <div class="contact-section">
        <div class="container">
            <div class="left-part">
                <h2>Contact me</h2>
                <p>I look forward to make something amazing together !</p>
            </div>

            <div>
                <!-- Calendly inline widget begin -->
                <div class="calendly-inline-widget" data-url="https://calendly.com/twilson-freelance/30min" style="min-width:320px; width:100%;height:450px;"></div>
                <!-- Calendly inline widget end -->
            </div>
        </div>
    </div>
</template>

<style scoped>
    .contact-section {
        width: 100%;
        background: black;
        min-height: 70vh;
        padding: 32px 0;
        display: flex;
        justify-content: center;

        .container {
            max-width: 1280px;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            .left-part {
                display: flex;
                flex-direction: column;
                gap: 24px;

                h2 {
                    font-size: 32px;
                }
            }
        }
    }
</style>