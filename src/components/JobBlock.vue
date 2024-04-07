<template>
  <div class="job-block" @click="showAllTools = !showAllTools">
    <h2 class="title">{{ company }} - {{ role }}</h2>
    <p class="duration">{{ startDate }} - {{ endDate }}</p>
    <ul class="description">
      <li v-for="(point, index) in descriptionPoints" :key="index">{{ point }}</li>
    </ul>
    <ul class="tools">
      <li v-for="(tool, index) in displayedTools" :key="index" class="tool">#{{ tool }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    company: String,
    role: String,
    startDate: String,
    endDate: String,
    descriptionPoints: Array,
    tools: Array
  },
  data() {
    return {
      showAllTools: false
    };
  },
  computed: {
    displayedTools() {
      if (this.showAllTools) {
        return this.tools;
      } else {
        return this.tools.slice(0, 4);
      }
    }
  }
};
</script>

<style scoped>
.job-block {
  background-color: #1a4b84; /* Lighter tone than the background */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Space inside the card */
  color: #f8f9fa; /* Text color */
}

.title {
  font-size: 1.5em; /* Larger font size */
  margin-bottom: 10px; /* Space below the title */
}

.duration {
  font-size: 1.2em; /* Slightly larger font size */
  margin-bottom: 20px; /* Space below the duration */
}

.description {
  list-style-type: disc; /* Bullet points */
  margin-bottom: 20px; /* Space below the description */
}

.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style-type: none; /* Remove bullet points */
}

.tool {
  color: #000000; /* Different text color */
}
</style>