<script>

import SkillBlock from './SkillBlock.vue';
export default {
  components: {
    SkillBlock
  },
  props : {
    skills: {
      type: Array,
      required: true
    }
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h1>Skills</h1>
    </div>
    <div class="grid" >
      <SkillBlock v-for="(skill, index) in $props.skills" :key="index" :name="skill.name" :icon-url="skill.iconUrl" :level="skill.level"  />
    </div>
  </div>

</template>

<style scoped>
.grid {
  display: grid;
  column-gap: 30px;
  -ms-overflow-style: none;  /* IE and Edge */
  //sscrollbar-width: none;
  grid-template-columns: repeat(8, minmax(100px, 1fr));
  overflow-x: auto;
  position: relative;
  //mask-image: linear-gradient(to bottom, transparent 10%, black 25%, black 75%, transparent 90%);


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

.container{
  width: 100vw;
  height: 50vh;
  background-color: #144272;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
@media (max-width: 600px) {
  .container {
    height: 100vh; /* Height in smaller screens */
  }
}
.title {
  margin-bottom: 50px; /* Add some margin at the bottom */
  margin-top: 50px;
  color: white;
}
</style>