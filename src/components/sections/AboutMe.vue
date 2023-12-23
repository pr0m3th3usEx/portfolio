<script setup lang="ts">
import GridCard from '../widgets/GridCard.vue';

const cards = [
{
    title: 'Who I am.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis. Maecenas vel euismod dui. Vivamus vel nulla turpis. Nunc lacus libero, imperdiet non pretium ac, tincidunt id enim. Ut ut mauris at urna commodo convallis.',
  },
  {
    title: 'Who I do.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis. Maecenas vel euismod dui. Vivamus vel nulla turpis. Nunc lacus libero, imperdiet non pretium ac, tincidunt id enim. Ut ut mauris at urna commodo convallis.',
  },
  {
    title: 'How I can help.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis. Maecenas vel euismod dui. Vivamus vel nulla turpis. Nunc lacus libero, imperdiet non pretium ac, tincidunt id enim. Ut ut mauris at urna commodo convallis.',
  },
  {
    title: 'Education.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis. Maecenas vel euismod dui. Vivamus vel nulla turpis. Nunc lacus libero, imperdiet non pretium ac, tincidunt id enim. Ut ut mauris at urna commodo convallis.',
  },
];

</script>

<template>
  <div class="about-me grid">
    <div class="picture">
      <img src="/images/me.jpg" alt="Thomas Michel">
    </div>
    <GridCard
      v-for="(card, index) in cards"
      :key="card.title"
      :variant="((index + 1).toString() as any)"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<style scoped lang="scss">
.about-me {
    align-self: center;
    max-height: 650px;
    display: flex;
    max-width: 1280px;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);

    .picture {
        grid-column: 1 / 3;
        grid-row: 1 / 5;        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
        }
    }
}

.grid {
    display: grid;
}

@media screen and (max-width: 600px) {
  .about-me {
    max-width: none;
    min-height: 100vh;
    max-height: none;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;

    .picture {
        grid-column: 1 / 10;
        grid-row: 1 / 3;
        height: 400px;
        
        img {
            width: 100%;
            object-fit: cover;
            overflow: hidden;
        }
    }
  }
}
</style>