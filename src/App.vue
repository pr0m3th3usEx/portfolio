<script setup lang="ts">
import Background from './components/foundations/BackgroundComponent.vue';
import DownArrow from './components/icons/DownArrow.vue';
</script>

<template>
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
          <h2 class="subtitle">About Me</h2>

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

          <DownArrow animated />
        </div>
      </div>
      <div class="scroll-section">
        <div class="section">
          <h2 class="subtitle">EXPERIENCES</h2>
        </div>
      </div>
      <div class="scroll-section">
        <div class="section">
          <h2 class="subtitle">SOME OF MY WORK</h2>
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
</style>