<template>
  <div class="job-block" @click="showAllTools = !showAllTools">
    <h2 class="title">{{ company }} - {{ role }}</h2>
    <p class="duration">{{ startDate }} - {{ endDate }}</p>
    <ul class="description" ref="description">
      <li v-for="(point, index) in descriptionPoints" :key="index">
        {{ point }}
      </li>
    </ul>
    <ul class="tools">
      <li v-for="(tool, index) in displayedTools" :key="index" class="tool" :style="{ color: tool.color }">#{{ tool.name }}</li>
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
      showAllTools: false,
      fontSize: 16 // Initial font size
    };
  },
  methods: {
    adjustFontSize() {
      const description = this.$refs.description;
      const containerHeight = description.clientHeight;
      const lineHeight = parseFloat(window.getComputedStyle(description.firstElementChild).lineHeight);
      const lines = Math.floor(containerHeight / lineHeight);
      const totalLines = description.children.length;
      if (lines < totalLines) {
        this.fontSize = (containerHeight / totalLines) * 0.9; // Adjust font size to fit all lines
      }
    }
  },
  mounted() {
    this.adjustFontSize();
    window.addEventListener('resize', this.adjustFontSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adjustFontSize);
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
  min-width: 50vw; /* Adjust size as needed */
  min-height: 40vh; /* Adjust size as needed */
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;
}
@media (max-width: 600px) {
  .job-block {
    min-height: 85vh;
    min-width: 100vw;
  }
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
  width: 100%; /* Make the description occupy the full width of its parent container */
  list-style-type: disc; /* Bullet points */
  margin-bottom: 20px; /* Space below the description */
}

.description li {
  display: block; /* Stack the li elements vertically */
  padding-bottom: 10px;
  text-align:  justify;
  max-width: 100%; /* Limit the width of the li elements */
  word-wrap: break-word; /* Allow the text to wrap */
  overflow: hidden; /* Hide overflowing content */
  white-space: normal; /* Allow the text to wrap */
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