<template>
  <div class="jobs" :style="{backgroundColor:backgroundColor,color:textColor}">
    <div class="title">
      <h1>Work Experience</h1>
      <p>Companies I had the opportunity to work with :</p>
    </div>
    <div class="jobs-container" :style="{backgroundColor:backgroundColor}">
      <Carousel :items-to-show="2.5" :wrap-around="true" v-bind="settings" :breakpoints="breakpoints" :transition="500">
        <Slide v-for="(job, index) in jobs" :key="index">
          <JobBlock
              :company="job.company"
              :role="job.role"
              :startDate="job.startDate"
              :endDate="job.endDate"
              :descriptionPoints="job.descriptionPoints"
              :tools="job.tools"
              class="carousel__item"
          />
        </Slide>
        <template #addons>
          <Navigation/>
          <Pagination/>
        </template>
      </Carousel>
    </div>
  </div>

</template>

<script>
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import JobBlock from './JobBlock.vue';
import 'vue3-carousel/dist/carousel.css'

export default {
  components: {
    JobBlock,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    jobs: Array
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      100: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      400: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      800: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      // 700px and up
      1400: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      2000: {
        itemsToShow: 3,
        snapAlign: 'center',
      }
    },
  }),
  computed: {
    backgroundColor() {
      return backgroundColor;
    },
    secondaryColor() {
      return secondaryColor;
    },
    textColor() {
      return textColor;
    },
    secondaryTextColor() {
      return secondaryTextColor;
    }
  }
};
const style = getComputedStyle(document.documentElement);
const backgroundColor = style.getPropertyValue('--scale-3');
const secondaryColor = style.getPropertyValue('--scale-4');
const textColor = style.getPropertyValue('--text-color-scale-3');
const secondaryTextColor = style.getPropertyValue('--text-color-scale-4');

</script>

<style scoped>
.title {
  text-align: center;
  padding: 10px;
}

.jobs {
  width: 100vw;
  height: 50vh;
  background-color: #0A2647;

}
@media (max-height: 1200px ) {
  .jobs {
    height: 100vh;
    flex-direction: row;
  }
}

@media (max-width: 600px) {
  .jobs {
    height: 100vh;
  }
}

.jobs-container {

  align-items: center;
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>