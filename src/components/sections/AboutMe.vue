<script setup lang="ts">
import GridCard from '../widgets/GridCard.vue';

const cards = [
{
    title: 'Who I am.',
    description: [
      'Hey there, Thomas Michel. I am a student and an entrepreneur, currently based in Paris.',
      'My journey in the IT industry began early in high school, where I found myself creating websites not just for the thrill but also to earn some pocket money. Rigorous, determined, and ambitious, I consistently set high standards for everything I undertake.',
    ],
  },
  {
    title: 'Education.',
    description: [
      "After earning my Bachelor of Information Technology in 2022, I am now on the path to obtain a Master's Degree in Computer Sciences at EPITECH, graduating in July 2024.",
      "Over these five years, I improved my programming abilities but also cultivated communication and leadership skills crucial in professional contexts.",
    ],
  },
  {
    title: 'Who I do.',
    description: ["Well, with a laser focus on mastering full-stack engineering, I possess a comprehensive skill set to craft web applications from inception to completion, handling both the intricate backend and the engaging frontend. "],
  },
  {
    title: 'How I can help.',
    description: [
      "My diverse range of skills allows me to seamlessly adapt to various contexts - whether it's constructing robust APIs and micro-services or ensuring a smooth user experience on a dynamic dashboard.",
      "I find my stride in the intricate dance between code and user interface, bringing versatility to every project I tackle.",
    ],
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