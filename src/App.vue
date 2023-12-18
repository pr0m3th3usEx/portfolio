<script setup lang="ts">
import Background from './components/foundations/BackgroundComponent.vue';
import ImageSlider from './components/widgets/ImageSlider.vue';
import SkillCard from './components/widgets/SkillCard.vue';
import sliderImages from './store/constants/sliderImages';
import skills from './store/constants/skills';

</script>

<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <main>
    <Background />
    <div class="main-content scroll-container">

      <header class="scroll-section">
        <nav class="nav-header">
          <h1 class="logo"><a href="/">Thomas Michel</a></h1>

          <div class="nav-header-menu">
            <p><a href="https://github.com/pr0m3th3usEx" target="_blank">Github</a></p>
            <p><a href="https://www.linkedin.com/in/thomas-glowmefr/" target="_blank">Linkedin</a></p>
            <p><a href="/">Download CV</a></p>
          </div>
        </nav>
        <div class="main-title">
          <p>Hello !</p>
          <p>I am Thomas, Software Engineer & Product manager</p>
        </div>
        
        <button class="button landing-cta">Discover my journey</button>
      </header>

      <div class="scroll-section">
        <div class="section">
          <h2 class="subtitle">ABOUT ME</h2>

          <div class="about-me grid">
            <div class="picture">
              <img src="/images/me.jpg" alt="Thomas Michel">
            </div>
            <div class="card card-1">
              <h3>Who I am.</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis. Maecenas vel euismod dui. Vivamus vel nulla turpis. Nunc lacus libero, imperdiet non pretium ac, tincidunt id enim. Ut ut mauris at urna commodo convallis.</p>
            </div>
            <div class="card card-2">
              <h3>What I do.</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis. Maecenas vel euismod dui. Vivamus vel nulla turpis. Nunc lacus libero, imperdiet non pretium ac, tincidunt id enim. Ut ut mauris at urna commodo convallis.</p>
            </div>
            <div class="card card-3">
              <h3>How I can help.</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis. Maecenas vel euismod dui. Vivamus vel nulla turpis. Nunc lacus libero, imperdiet non pretium ac, tincidunt id enim. Ut ut mauris at urna commodo convallis.</p>
            </div>
            <div class="card card-4">
              <h3>Education.</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis. Maecenas vel euismod dui. Vivamus vel nulla turpis. Nunc lacus libero, imperdiet non pretium ac, tincidunt id enim. Ut ut mauris at urna commodo convallis.</p>
            </div>
          </div>

        </div>
      </div>
      <div class="scroll-section">
        <div class="section">
          <h2 class="subtitle">EXPERIENCES</h2>

          <div class="timeline">
            <div class="container left-container">
              <div class="icon square bg-red-apple"></div>
              <div class="text-box bg-red-apple">
                <h3>Alphabet Inc.</h3>
                <small>2020-2021</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis.</p>
                <span class="container-arrow border-red-apple"></span>
              </div>
            </div>
            <div class="container right-container">
              <div class="icon square bg-peach"></div>
              <div class="text-box bg-peach">
                <h3>Tesla Inc.</h3>
                <small>2019-2020</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis.</p>
                <span class="container-arrow border-peach"></span>
              </div>
            </div>
            <div class="container left-container">
              <div class="icon square bg-orange"></div>
              <div class="text-box bg-orange">
                <h3>Amazon Inc.</h3>
                <small>2018-2019</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis.</p>
                <span class="container-arrow border-orange"></span>
              </div>
            </div>
            <div class="container right-container">
              <div class="icon square bg-lemon"></div>
              <div class="text-box bg-lemon">
                <h3>Netflix Inc.</h3>
                <small>2017-2018</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis.</p>
                <span class="container-arrow border-lemon"></span>
              </div>
            </div>
            <div class="container left-container">
              <div class="icon square bg-tangerine"></div>
              <div class="text-box bg-tangerine">
                <h3>Netflix Inc.</h3>
                <small>2017-2018</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at luctus sapien. Donec sed eleifend est. Vestibulum lorem ante, dapibus id imperdiet eget, tincidunt et felis.</p>
                <span class="container-arrow border-tangerine"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-section">
        <div class="section">
          <h2 class="subtitle">PROJECTS & SKILLS</h2>


          <!-- Images
            Ramify
            Glowme Pro
            Glowme Customer
            Colas-captcha
            DocTripper
           -->

           <!-- Personal Projects
            
          -->

          <ImageSlider :images="sliderImages" />
          

          <div class="skill-grid">
            <SkillCard v-for="item in skills" :icon="item.icon" :label="item.label" :key="item.label" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  nav.nav-header {
    display: flex;
    padding: 32px 48px;
    justify-content: space-between;
    align-items: center;

    .nav-header-menu {
      display: flex;
      gap: 24px;
    }

    .logo {
      font-size: 24px;
      
      a {
        &:hover {
          text-decoration: none;
        }
      }
    }

  }
  .main-title {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

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
    bottom: 100px;
    transform: translate(-50%, 0);
  }

  .timeline {
    position: relative;
    margin: 0px auto;

    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 100%;
      background: #C0C0C0;
      top: 0;
      left: 50%;
      z-index: -1;
    }

  }

  .container {
    padding: 10px 50px;
    position: relative;
    width: 50%;

    .text-box {
      padding: 20px 30px;
      background: black;
      font-size: 15px;
      position: relative;

      h3 {
        font-weight: 600;
      }

      small {
        display: block;
        font-size: 12px;
        margin-bottom: 12px;
      }
    }

    .icon {
      position: absolute;
      right: -16px;
      top: 32px;
      z-index: 10;
      border-radius: 50%;
    }
  }

  .left-container {
    left: 0;

    .container-arrow {
      height: 0;
      width: 0;
      position: absolute;
      top: 28px;
      z-index: 1;
      border-top: 15px solid transparent !important;
      border-bottom: 15px solid transparent !important;
      border-left: 15px solid black;
      right: -15px;
    }
  }

  .right-container {
    left: 50%;  

    .icon {
      left: -16px;
      top: 32px;
      border-radius: 50%;
    }

    .container-arrow {
      height: 0;
      width: 0;
      position: absolute;
      top: 28px;
      z-index: 1;
      border-top: 15px solid transparent !important;
      border-bottom: 15px solid transparent !important;
      border-right: 15px solid black;
      left: -15px;
    }
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
    .timeline {
      margin: 50px auto;

      &::after {
        left: 31px;
      }
    }

    .container {
      width: 100%;
      padding-left: 80px;
      padding-right: 25px;

      .text-box {
        font-size: 14px;

        small {
          margin-bottom: 10px;
        }
      }
    }

    .right-container {
      left: 0;
    }
    .right-container, .left-container {
      .icon {
        left: 16px;
      }

      .container-arrow {
        border-right: 15px solid black;
        border-left: 0;
        left: -15px;
      }
    }

    .skill-grid {
      width: 100%;
      padding: 0 16px;
    }
  }
</style>