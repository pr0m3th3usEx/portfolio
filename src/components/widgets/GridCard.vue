<script setup lang="ts">
const props = defineProps<{
  variant: '1' | '2' | '3' | '4';
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="card" :class="`card-${props.variant}`">
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<style scoped lang="scss">

.card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    overflow: auto;
}

.card-1 {
    grid-column: 3 / 5;
    grid-row: 1 / 3;
    background-color: rgb(var(--color-card-orange));
}

.card-2 {
    grid-column: 5 / 7;
    grid-row: 1 / 3;
    background-color: rgb(var(--color-card-lemon));
}

.card-3 {
    grid-column: 3 / 5;
    grid-row: 3 / 5;
    background-color: rgb(var(--color-card-tangerine));
}

.card-4 {
    grid-column: 5 / 7;
    grid-row: 3 / 5;
    background-color: rgb(var(--color-card-peach));
}

@media screen and (max-width: 600px) {

  .card-1 {
    grid-row: 3;
    grid-column: 3 / 10;
    background-color: rgb(var(--color-card-orange));
  }

  .card-2 {
    grid-row: 5;
    grid-column: 3/ 10;
    background-color: rgb(var(--color-card-lemon));
  }

  .card-3 {
    grid-row: 7;
    grid-column: 1 / 10;
    background-color: rgb(var(--color-card-tangerine));
  }

  .card-4 {
    grid-row: 9;
    grid-column: 1 / 10;
    background-color: rgb(var(--color-card-peach));
  }
  
}
</style>