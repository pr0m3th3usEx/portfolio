<script setup lang="ts">
</script>

<template>
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
</template>

<style scoped lang="scss">
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
  }
</style>