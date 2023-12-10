<script setup lang="ts">
import { defineProps } from 'vue';

const { animated } = defineProps<{ animated?: boolean }>();

</script>

<template>
    <svg class="{{ animated ? 'animated' : '' }}" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5 8C25.5 7.17157 24.8284 6.5 24 6.5C23.1716 6.5 22.5 7.17157 22.5 8L22.5 38.0618C22.2868 37.9311 22.0502 37.7627 21.7814 37.5468C20.9544 36.8826 19.9783 35.901 18.56 34.47L15.0654 30.9441C14.4822 30.3557 13.5325 30.3515 12.9441 30.9346C12.3557 31.5178 12.3515 32.4675 12.9346 33.0559L16.4922 36.6454C17.8321 37.9973 18.9272 39.1023 19.9029 39.8859C20.9176 40.7007 21.9475 41.2906 23.1837 41.4482C23.7257 41.5173 24.2743 41.5173 24.8163 41.4482C26.0526 41.2906 27.0824 40.7007 28.0971 39.8859C29.0728 39.1023 30.1679 37.9973 31.5078 36.6454L35.0654 33.0559C35.6485 32.4675 35.6443 31.5178 35.0559 30.9346C34.4675 30.3515 33.5178 30.3557 32.9346 30.9441L29.44 34.47C28.0217 35.901 27.0456 36.8826 26.2186 37.5468C25.9498 37.7627 25.7132 37.9311 25.5 38.0618L25.5 8Z" fill="#FAFAFA"/>
    </svg>
</template>

<style scoped>
    .animated {
        animation: scrollDownArrow 2s ease infinite;
    }

    @keyframes scrollDownArrow {
        0%, 45% {
            transform: rotate(0deg); 
        }
        60% {
            transform: rotate(33deg); 
        }
        
        75%, 85% {
            transform: rotate(-33deg); 
        }

        100% {
            transform: rotate(0deg); 
        }
    }
</style>