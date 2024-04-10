<template>
  <div class="jobs-container" :style="{backgroundColor:backgroundColor}">
    <JobBlock
        v-for="(job, index) in jobs"
        :key="index"
        :company="job.company"
        :role="job.role"
        :startDate="job.startDate"
        :endDate="job.endDate"
        :descriptionPoints="job.descriptionPoints"
        :tools="job.tools"
    />
  </div>
</template>

<script>
import JobBlock from './JobBlock.vue';

export default {
  components: {
    JobBlock
  },
  props: {
    jobs: Array
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
const backgroundColor = style.getPropertyValue('--scale-3');
const secondaryColor = style.getPropertyValue('--scale-4');
const textColor = style.getPropertyValue('--text-color-scale-3');
const secondaryTextColor = style.getPropertyValue('--text-color-scale-4');

</script>

<style scoped>

.jobs-container {
  position: relative; /* NEW: Make the jobs-container the reference for the absolute positioning of the pseudo-element */
  width: 100vw;
  height: 60vh;
  display: flex;
  column-gap: 20px;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
}

@media (max-width: 1200px) {
  .jobs-container {
    height: 100vh;
  }
}

@media (max-width: 600px) {
  .jobs-container {
    height: 100vh;
    padding: 15px;
  }
}
</style>