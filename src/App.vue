<script setup lang="ts">
import Background from './components/foundations/BackgroundComponent.vue';
import AboutMe from './components/sections/AboutMe.vue';
import ContactSection from './components/sections/ContactSection.vue';
import Navbar from './components/sections/navbar/index.vue';
import ExperienceTimeline from './components/sections/ExperienceTimeline.vue';
import ImageSlider from './components/widgets/ImageSlider.vue';
import SkillCard from './components/widgets/SkillCard.vue';
import sliderImages from './store/constants/sliderImages';
import skills from './store/constants/skills';
import { ref } from 'vue';

const aboutMeSectionRef = ref<HTMLDivElement>();

const scrollToIntro = () => {
  aboutMeSectionRef.value?.scrollIntoView({ behavior: 'smooth'});
}

</script>

<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <main>
    <Background />
    <div class="main-content scroll-container">

      <header class="scroll-section">
        <Navbar />
        <div class="main-title">
          <p>Hello !</p>
          <p>I am Thomas, Software Engineer</p>
        </div>
        
        <button class="button landing-cta" @click="scrollToIntro">Discover my journey</button>
      </header>

      <div>
        <div class="section" ref="aboutMeSectionRef">
          <h2 class="subtitle">ABOUT ME</h2>

          <AboutMe />

          <h2 class="subtitle">EXPERIENCES</h2>
          
          <ExperienceTimeline />
          
          <h2 class="subtitle">A FEW APPS I WORKED ON</h2>

          <ImageSlider :images="sliderImages" />


          <div class="skill-grid">
            <SkillCard v-for="item in skills" :icon="item.icon" :label="item.label" :key="item.label" />
          </div>

          <ContactSection />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .main-title {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    padding: 0 32px;

    p {
      font-size: 64px;
      margin: 0;
      text-align: center;
    }
  }

  .button {
    color: white;
    padding: 20px 64px;
    border: 1px solid white;
    text-transform: uppercase;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  .landing-cta {
    position: absolute;
    left: 50%;
    bottom: 20%;
    transform: translate(-50%, 0);
    width: max-content;
  }


  .skill-grid {
    max-width: 1280px;
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 156px);
    grid-gap: 16px;
  }
  .skill-block {
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
    padding: 32px;
    background: #383735;
    
    .icon {
      color: white;
    }

    &:hover {
      background: #4e4a41; 
    }
  }

  @media screen and (max-width: 600px) {
    .main-title {
      top: 45%;
      p {
        font-size: 36px;
      }
    }

    .skill-grid {
      width: 100%;
      padding: 0 16px;
    }
  }
</style>