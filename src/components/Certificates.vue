<script>
import CertificateBlock from './CertificateBlock.vue';

export default {
  components: {
    CertificateBlock
  },
  props: {
    certificates: {
      type: Array,
      required: true
    }
  },
  computed: {
    backgroundColor: () => {
      return backgroundColor;
    },
    secondaryColor: () => {
      return secondaryColor;
    },
    textColor: () => {
      return textColor;
    },
    secondaryTextColor: () => {
      return secondaryTextColor;
    }
  }
};
const style = getComputedStyle(document.documentElement);
const backgroundColor = style.getPropertyValue('--scale-2');
const secondaryColor = style.getPropertyValue('--scale-3');
const textColor = style.getPropertyValue('--text-color-scale-2');
const secondaryTextColor = style.getPropertyValue('--text-color-scale-3');

</script>

<template>
  <div class="container" :style="{background:backgroundColor, color:textColor}">
    <div class="title">
      <h1>Certificates</h1>
      <p style=" bottom: 20px; font-size: 12px; text-align: center; width: 100%;">Click on them!</p>
    </div>
    <div class="grid">
      <CertificateBlock v-for="(certificate, index) in certificates" :key="index"
                        :name="certificate.name" :issue-date="certificate.issueDate"
                        :redirect-link="certificate.redirectLink" :icon-link="certificate.iconLink"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
@media (max-width: 600px) {
  .container {
    height: calc(150vh); /* Height in smaller screens */
  }
}
@media (max-width: 1200px) {
  .container {
    height: 100vh; /* Height in smaller screens */
  }
}
.grid {
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;
  -ms-overflow-style: none; /* IE and Edge */
  overflow-x: auto;
  position: relative;
  grid-template-columns: repeat(4, minmax(100px, 1fr));

}

.grid::-webkit-scrollbar {
  display: none;
}


.grid::before {
  top: 100px;
  background: linear-gradient(to bottom, #144272, transparent);
}

.grid::after {
  bottom: 0;
  background: linear-gradient(to top, #144272, transparent);
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
}

@media (max-width: 600px) {
  .grid {
    column-gap: 10px;
    grid-template-columns: repeat(1, minmax(100px, 1fr)); /* Adjust the minimum width as needed */
  }
}
</style>