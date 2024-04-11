<template>
  <div id="app">


    <Bio ref="bio" :socials="socials" />
    <SkillGrid ref="skillGrid" :skills="skills" />
    <Jobs ref="jobs" :jobs="jobs" />
    <Projects ref="projects" />
    <About ref="aboutMe" />
    <UnderConstruction ref="underConstruction" />


  </div>
</template>

<script>
import UnderConstruction from "@/components/Construction.vue";
import SkillGrid from "@/components/SkillGrid.vue";
import Bio from "@/components/Bio.vue";
import Projects from "@/components/Projects.vue";
import About from "@/components/About.vue";
import Jobs from "@/components/Jobs.vue";
import scrollIntoView from 'scroll-into-view';
import globalData from '@/scripts/globalData.js';
export default {
  name: 'App',
  components: {
    UnderConstruction,
    SkillGrid,
    Bio,
    Projects,
    About,
    Jobs
  },
  data() {
    return {
      components: [ 'bio', 'skillGrid','jobs', 'projects','aboutMe','underConstruction'],
      currentComponentIndex: 0,
      skills: globalData.skills,
      jobs: globalData.jobs,
      socials: globalData.socials,
      customScrollingEnabled: true // Add this line
    };
  },
  methods: {
    scrollToComponent(refName) {
      const element = this.$refs[refName].$el;
      scrollIntoView(element, {
        time: 750, // half a second
        align: {
          top: 0.5 // align to center
        }
      });
    }

  },
  mounted() {
    window.addEventListener('wheel', (event) => {
      if (!this.customScrollingEnabled) return; // Add this line

      if (event.deltaY > 0) {
        // Scrolling down
        if (this.currentComponentIndex < this.components.length - 1) {
          this.currentComponentIndex++;
        }
      } else {
        // Scrolling up
        if (this.currentComponentIndex > 0) {
          this.currentComponentIndex--;
        }
      }
      this.scrollToComponent(this.components[this.currentComponentIndex]);
    });
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f9fa;

}

</style>
