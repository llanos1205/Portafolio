<template>
  <div class="projects">
    <h1>Projects</h1>
    <p>Here are some of the projects I've worked on:</p>
    <div class="project-container">
      <ProjectBlock
          v-for="(project, index) in projects"
          :key="index"
          :name="project.name"
          :image="project.imageUrl"
          :items="project.steps"
          :description="project.description"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectBlock from './ProjectBlock.vue';
import globalData from '../scripts/globalData.js';

const projects = globalData.projects;
</script>

<style scoped>
.projects {
  width: 100vw;
  height: 60vh;
  background-color: #0A2647;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (max-width: 600px) {
  .projects {
    height: 100vh;
  }
}
.project-container {
  position: relative; /* NEW: Make the jobs-container the reference for the absolute positioning of the pseudo-element */
  width: 100vw;
  height: 60vh;
  display: flex;
  column-gap: 10px;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
}
@media (max-width: 600px) {
  .project-container {
    height: 85vh;
  }
}


</style>