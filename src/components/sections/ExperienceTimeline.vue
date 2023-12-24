<script setup lang="ts">
type Experience = {
  title: string;
  date: string;
  description: string;
  color: string;
}
const props = withDefaults(defineProps<{
  experiences: Experience[];
}>(), {
  experiences: () => [],
});

</script>

<template>
  <div class="timeline">
    <div v-for="(item, index) in props.experiences" class="container" :class="index % 2 == 0 ? 'left-container' : 'right-container'" :key="item.title">
      <div class="icon square" :class="`bg-${item.color}`"></div>
      <div class="text-box" :class="`bg-${item.color}`">
        <h3>{{ item.title }}</h3>
        <small>{{ item.date }}</small>
        <p>{{ item.description }}</p>
        <span class="container-arrow" :class="`border-${item.color}`"></span>
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