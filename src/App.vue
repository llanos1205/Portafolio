<template>
  <div id="app">

    <UnderConstruction ref="underConstruction" />
    <Bio ref="bio" />
    <SkillGrid ref="skillGrid" :skills="skills" />
    <Projects ref="projects" />
    <About ref="aboutMe" />


  </div>
</template>

<script>
import UnderConstruction from "@/components/Construction.vue";
import SkillGrid from "@/components/SkillGrid.vue";
import Bio from "@/components/Bio.vue";
import Projects from "@/components/Projects.vue";
import About from "@/components/About.vue";
import scrollIntoView from 'scroll-into-view';

export default {
  name: 'App',
  components: {
    UnderConstruction,
    SkillGrid,
    Bio,
    Projects,
    About
  },
  data() {
    return {
      components: ['underConstruction', 'bio', 'skillGrid', 'projects','aboutMe'],
      currentComponentIndex: 0,
      skills: [
        {
          name: "AWS",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/amazonaws.svg",
          level: 1.0
        },
        {
          name: "Azure",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/microsoftazure.svg",
          level: 0.8
        },
        {
          name: "Google Cloud",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/googlecloud.svg",
          level: 0.3
        },
        {
          name: "Docker",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/docker.svg",
          level: 1.0
        },
        {
          name: "Kubernetes",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/kubernetes.svg",
          level: 0.9
        },
        // {
        //   name: "FluxCD",
        //   iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAzi8PYuZU7N7JLNtCUdMr5Bo8anORAd9IPDW8u60ng&s",
        //   level: 0.6
        // },
        {
          name: "Helm",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/helm.svg",
          level: 0.6
        },
        {
          name: "Docker Swarm",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/docker.svg",
          level: 0.7
        },
        {
          name: "Terraform",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/terraform.svg",
          level: 0.8
        },
        {
          name: "Azure Bicep",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/microsoftazure.svg",
          level: 0.6
        },
        {
          name: "Jenkins",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/jenkins.svg",
          level: 0.35
        },
        {
          name: "Bitbucket CI",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/bitbucket.svg",
          level: 0.4
        },
        {
          name: "GitHub Actions",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/githubactions.svg",
          level: 0.9
        },
        {
          name: "Azure DevOps",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/azuredevops.svg",
          level: 1.0
        },
        {
          name: "Nginx",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/nginx.svg",
          level: 0.8
        },
        {
          name: "IIS",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/internetexplorer.svg",
          level: 0.6
        },
        {
          name: "SQL Server",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/microsoftsqlserver.svg",
          level: 0.7
        },
        {
          name: "Mongo DB",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/mongodb.svg",
          level: 0.7
        },
        {
          name: "C# .NET",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/dot-net.svg",
          level: 0.55
        },
        {
          name: "Python",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/python.svg",
          level: 0.8
        },
        {
          name: "Vue",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/vue-dot-js.svg",
          level: 0.01
        },
        {
          name: "Bash",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gnubash.svg",
          level: 0.8
        },
        {
          name: "Powershell",
          iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/powershell.svg",
          level: 0.60
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
