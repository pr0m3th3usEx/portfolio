<script setup lang="ts">
const props = defineProps<{ 
    icon: any;
    label: string;
}>();
</script>

<template>
    <div class="skill-block">
        <div class="icon">
            <props.icon />
        </div>
        <p class="label">{{ props.label }}</p>
    </div>
</template>

<style scoped>

.skill-block {
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
    padding: 32px;
    background: #383735;
    
    .icon {
        width: 48px;
        color: white;
    }

    &:hover {
      background: #4e4a41; 
    }

    .label {
        text-align: center;
    }
}

</style>