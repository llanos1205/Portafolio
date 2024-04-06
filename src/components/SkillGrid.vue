<script setup>
import SkillBlock from "@/components/SkillBlock.vue";

const props = defineProps({
  skills: Array
});

</script>

<template>
  <div class="container">
    <div class="title">
      <h1>Skills</h1>
    </div>
    <div class="grid" >
      <SkillBlock v-for="(skill, index) in props.skills" :key="index" :name="skill.name" :icon-url="skill.iconUrl" :level="skill.level"  />
    </div>
  </div>

</template>

<style scoped>
.grid {
  display: grid;
  column-gap: 30px;

  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  overflow-x: auto;
  width: 100%;
}

@media (max-width: 600px) {
  .grid {
    column-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* Adjust the minimum width as needed */
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