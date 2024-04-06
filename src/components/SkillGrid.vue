<script setup>
import SkillBlock from "@/components/SkillBlock.vue";

const props = defineProps({
  skills: Array
});

</script>

<template>
  <div class="container">
    <div class="grid" >
      <SkillBlock v-for="(skill, index) in props.skills" :key="index" :name="skill.name" :icon-url="skill.iconUrl" :level="skill.level"  />
    </div>
  </div>

</template>

<style scoped>
.grid {

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 30px;
}
.container{
  width: 100vw;
  height: 50vh;
  background-color: #144272;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>