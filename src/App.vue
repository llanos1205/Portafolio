<template>
  <div id="app">

    <UnderConstruction ref="underConstruction" />

    <Bio ref="bio" />

    <SkillGrid ref="skillGrid" :skills="skills" />

    <Projects ref="projects" />

  </div>
</template>

<script>
import UnderConstruction from "@/components/Construction.vue";
import SkillGrid from "@/components/SkillGrid.vue";
import Bio from "@/components/Bio.vue";
import Projects from "@/components/Projects.vue";
import scrollIntoView from 'scroll-into-view';

export default {
  name: 'App',
  components: {
    UnderConstruction,
    SkillGrid,
    Bio,
    Projects
  },
  data() {
    return {
      components: ['underConstruction', 'bio', 'skillGrid', 'projects'],
      currentComponentIndex: 0,
      skills: [
        {
          name: "AWS",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/amazonaws.svg",
          level: 0.9
        },
        {
          name: "Azure",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/microsoftazure.svg",
          level: 0.8
        },
        {
          name: "Google Cloud",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/googlecloud.svg",
          level: 0.7
        },
        {
          name: "Docker",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/docker.svg",
          level: 0.6
        },
        {
          name: "Kubernetes",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/kubernetes.svg",
          level: 0.5
        },
        {
          name: "Terraform",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/terraform.svg",
          level: 0.4
        },
        {
          name: "Ansible",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/ansible.svg",
          level: 0.3
        },
        {
          name: "Jenkins",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/jenkins.svg",
          level: 0.2
        },
        {
          name: "GitLab CI",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gitlab.svg",
          level: 0.1
        },
        {
          name: "GitHub Actions",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/githubactions.svg",
          level: 0.9
        },
        {
          name: "CircleCI",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/circleci.svg",
          level: 0.8
        },
        {
          name: "Travis CI",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/travisci.svg",
          level: 0.7
        },
        {
          name: "Helm",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/helm.svg",
          level: 0.6
        },
        {
          name: "Vagrant",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/vagrant.svg",
          level: 0.5
        },
        {
          name: "Vue",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/vue-dot-js.svg",
          level: 0.01
        }

      ]
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
      const rectUnderConstruction = this.$refs.underConstruction.$el.getBoundingClientRect();
      const rectBio = this.$refs.bio.$el.getBoundingClientRect();
      const rectSkillGrid = this.$refs.skillGrid.$el.getBoundingClientRect();
      const rectProjects = this.$refs.projects.$el.getBoundingClientRect();

      if (event.deltaY > 0) {
        // Scrolling down
        if (rectUnderConstruction.bottom < window.innerHeight && rectBio.bottom >= window.innerHeight) {
          this.scrollToComponent('bio');
        } else if (rectBio.bottom < window.innerHeight && rectSkillGrid.bottom >= window.innerHeight) {
          this.scrollToComponent('skillGrid');
        } else if (rectSkillGrid.bottom < window.innerHeight && rectProjects.bottom >= window.innerHeight) {
          this.scrollToComponent('projects');
        }
      } else {
        // Scrolling up
        if (rectProjects.top > 0 && rectSkillGrid.top <= 0) {
          this.scrollToComponent('skillGrid');
        } else if (rectSkillGrid.top > 0 && rectBio.top <= 0) {
          this.scrollToComponent('bio');
        } else if (rectBio.top > 0 && rectUnderConstruction.top <= 0) {
          this.scrollToComponent('underConstruction');
        }
      }
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
