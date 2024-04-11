<template>
  <div class="projects" :style="{backgroundColor:backgroundColor,color:textColor}">
    <div class="title">
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      <p style=" bottom: 20px; font-size: 12px; text-align: center; width: 100%;">Click on them!</p>
    </div>
    <div class="project-container">
      <Carousel :items-to-show="2.5" :wrap-around="true" v-bind="settings" :breakpoints="breakpoints" :transition="500" >
        <Slide v-for="(project, index) in projects" :key="index">

      <ProjectBlock
          :key="index"
          :name="project.name"
          :image="project.imageUrl"
          :items="project.steps"
          :description="project.description"
          class="carousel__item"
      />
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import ProjectBlock from './ProjectBlock.vue';
import globalData from '../scripts/globalData.js';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const projects = globalData.projects;




export default {
  components: {
    ProjectBlock,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {

    return {
      projects: projects,
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
        1024: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        2000: {
          itemsToShow: 3,
          snapAlign: 'center',
        }
      },
    };
  },
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
const backgroundColor = style.getPropertyValue('--scale-4');
const secondaryColor = style.getPropertyValue('--scale-5');
const textColor = style.getPropertyValue('--text-color-scale-4');
const secondaryTextColor = style.getPropertyValue('--text-color-scale-5');


</script>

<style scoped>

.title {
  text-align: center;
  padding: 10px;
}

.projects {
  width: 100vw;
  height: 50vh;
  background-color: #0A2647;

}
@media (max-width: 1200px) {
  .projects {
    height: 75vh;
  }
}
@media (max-width: 600px) {
  .projects {
    height: 100vh;
  }
}
.project-container {
  align-items: center;
  height: 60vh;


}
@media (max-width: 600px) {
  .project-container {
    height: 85vh;
    padding: 15px;
  }
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