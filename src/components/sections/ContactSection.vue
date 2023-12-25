<script setup>
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://assets.calendly.com/assets/external/widget.js', () => {
    Calendly.initBadgeWidget({ url: 'https://calendly.com/twilson-freelance/30min', text: 'Reserve a 30 min call', color: '#f8ce38', textColor: '#ffffff', branding: undefined });
});

window.onload = function() {  }
</script>

<template>
    <div class="contact-section">
        <div class="container">
            <div class="left-part">
                <h2>Contact me</h2>
                <p>I look forward to hear from you and create something amazing software together !</p>
            </div>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        </div>
    </div>
</template>

<style scoped>
    .contact-section {
        width: 100%;
        background: black;
        padding: 48px 0;
        padding-left: 32px;
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