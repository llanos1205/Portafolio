<template>
  <div class="portfolio">
    <h1>{{ title }}</h1>
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <img :src="project.imageUrl" :alt="project.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Portfolio',
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'Description of Project 1',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Description of Project 2',
          imageUrl: 'https://via.placeholder.com/150',
        },
        // Add more projects as needed
      ],
    };
  },
};
</script>

<style scoped>
.portfolio {
  text-align: center;
}

.projects {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.project {
  margin-bottom: 20px;
}
</style>
