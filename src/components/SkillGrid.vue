<script>

import SkillBlock from './SkillBlock.vue';

export default {
  components: {
    SkillBlock
  },
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  computed: {
    backgroundColor: () => {
      return backgroundColor;
    },
    secondaryColor: () => {
      return secondaryColor;
    },
    textColor: () => {
      return textColor;
    },
    secondaryTextColor: () => {
      return secondaryTextColor;
    }
  }
};
const style = getComputedStyle(document.documentElement);
const backgroundColor = style.getPropertyValue('--scale-2');
const secondaryColor = style.getPropertyValue('--scale-3');
const textColor = style.getPropertyValue('--text-color-scale-2');
const secondaryTextColor = style.getPropertyValue('--text-color-scale-3');

</script>

<template>
  <div class="container" :style="{background:backgroundColor, color:textColor}">
    <div class="title">
      <h1>Skills</h1>
      <p style=" bottom: 20px; font-size: 12px; text-align: center; width: 100%;">Click on them!</p>
    </div>
    <div class="grid">
      <SkillBlock v-for="(skill, index) in $props.skills" :key="index" :name="skill.name" :icon-url="skill.iconUrl"
                  :level="skill.level"/>
    </div>
  </div>

</template>

<style scoped>
.grid {
  display: grid;
  column-gap: 30px;
  -ms-overflow-style: none; /* IE and Edge */
  overflow-x: auto;
  position: relative;
  grid-template-columns: repeat(6, minmax(100px, 1fr)); 

}

.grid::-webkit-scrollbar {
  display: none;
}


.grid::before {
  top: 100px;
  background: linear-gradient(to bottom, #144272, transparent);
}

.grid::after {
  bottom: 0;
  background: linear-gradient(to top, #144272, transparent);
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }
}

@media (max-width: 600px) {
  .grid {
    column-gap: 10px;
    grid-template-columns: repeat(3, minmax(100px, 1fr)); /* Adjust the minimum width as needed */
  }
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: #144272;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 600px) {
  .container {
    height: calc(200vh);
    }
}


.title {
  margin-bottom: 50px; /* Add some margin at the bottom */
  margin-top: 50px;
  color: white;
}
</style>