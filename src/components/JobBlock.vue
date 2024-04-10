<template>
  <div class="job-block" @click="showAllTools = !showAllTools" :style="{backgroundColor:backgroundColor}">
    <div class="content">
    <h2 class="title">{{ company }} - {{ role }}</h2>
    <p class="duration">{{ startDate }} - {{ endDate }}</p>
    <ul class="description" ref="description">
      <li v-for="(point, index) in descriptionPoints" :key="index">
        {{ point }}
      </li>
    </ul>
    </div>
    <ul class="tools"  :style="{backgroundColor:backgroundColor}">
      <li v-for="(tool, index) in displayedTools" :key="index" class="tool" :style="{ backgroundColor:secondaryColor,color:textColor }">#{{ tool.name }}</li>
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
    },
    displayedTools() {
      if (this.showAllTools) {
        return this.tools;
      } else {
        return this.tools.slice(0, 3);
      }
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

.job-block {
  width: 300px;
  height: 300px;
  background-color: #1a4b84; /* Lighter tone than the background */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Space inside the card */
  color: #f8f9fa; /* Text color */
  min-width: 30vw; /* Adjust size as needed */
  min-height: 40vh; /* Adjust size as needed */
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;
   margin: 10px;
  display: flex;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
}

.content {
  /* ...existing styles... */
  position: relative; /* Make the content a relative container */
  z-index: 1;
  order: 2;
}

.job-block ul {
  padding: 20px; /* Space to the left of the list */
}
@media (max-width: 2000px) {
  .job-block {
    min-height: 40vh;
    min-width: 30vw;
  }
}
@media (max-width: 1200px) {
  .job-block {
    min-height: 70vh;
    min-width: 60vw;
  }
}
@media (max-width: 600px) {
  .job-block {
    min-height: 80vh;
    min-width: 90vw;
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
  order: 1;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  margin-top: auto;
  gap: 5px;
  position: absolute; /* Make the tools an absolute container */
  bottom: 0;
  list-style-type: none;
  z-index: 2;
  /* Remove bullet points */
}

.tool {
  display: inline-block; /* To apply padding and other box properties */
  padding: 5px 10px; /* Space around the text */
  border-radius: 5px; /* Rounded corners */
  background-color: #f8f9fa; /* Background color */
  color: #000000; /* Text color */
  margin: 5px; /* Space around each tool */
}

</style>