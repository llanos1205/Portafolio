<template>
  <div>
    <div class="card card-description" v-if="isCard1Visible" @click="isCard1Visible = !isCard1Visible"
         :style="{ fontSize: fontSize + 'px',backgroundColor:backgroundColor,color:secondaryTextColor }">
      <h2>{{ name }}</h2>
      <img :src="image" alt="Image" class="card-image">
      <p>{{ description }}</p>
      <div class="arrow-container">
        <img src="@/assets/arrow-next.svg" alt="More" class="moreArrow">
      </div>
    </div>
    <div class="card card-steps" v-else @click="isCard1Visible = !isCard1Visible"
         :style="{ backgroundColor:backgroundColor,color:secondaryTextColor }">
      <div class="rectangle-card" v-for="(item, index) in items" :key="index" :style="{ fontSize: fontSize + 'px' }">
        <img :src="item.iconUrl" alt="Icon">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import globalData from "@/scripts/globalData.js";

export default {
  props: {
    name: String,
    image: String,
    description: String,
    items: Array
  },
  data() {
    return {
      isCard1Visible: true,
      fontSize: 16 // Initial font size
    };
  },


  mounted() {

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
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adjustFontSize);
  }
};
const projects = globalData.projects;
const style = getComputedStyle(document.documentElement);
const backgroundColor = style.getPropertyValue('--scale-5');
const secondaryColor = style.getPropertyValue('--scale-6');
const textColor = style.getPropertyValue('--text-color-scale-5');
const secondaryTextColor = style.getPropertyValue('--text-color-scale-6');
</script>
<style scoped>


.card {
  position: relative;
  width: 300px;
  height: 300px;
  min-width: 30vw; /* Adjust size as needed */
  min-height: 40vh; /* Adjust size as needed */
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;
}

.card-description .card-image {
  height: 50%; /* Full width on large screens */
  width: auto;
  /* Maintain aspect ratio */
}

@media (max-width: 1200px) {
  .card-description .card-image {
    height: 40%; /* Full width on large screens */
    width: auto;
  }
}

@media (max-width: 600px) {
  .card-description .card-image {
    height: 30%; /* Full width on large screens */
    width: auto;
  }
}
@media (max-width: 2000px) {
  .card {
    min-height: 40vh;
    min-width: 30vw;
  }
}

@media (max-width: 1200px) {
  .card {
    min-height: 70vh;
    min-width: 60vw;
  }
}

@media (max-width: 600px) {
  .card {
    min-height: 80vh;
    min-width: 90vw;
  }
}
@media (max-height: 1200px) {
  .card {
    height: 80vh; /* Height in smaller screens */
  }
}
.card img {
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
}

.card-description {
  background-color: #4a4a4a; /* Darker background color for card 1 */
  word-wrap: break-word;


}

.card-steps {
  background-color: #b3b3b3; /* Lighter background color for card 2 */

  overflow-y: auto; /* Make it scrollable */
}

.rectangle-card {
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #4a4a4a;
  min-height: 15vh;
  height: calc((300px - 20px * 2) / 4); /* Adjust the height based on the number of items you want to display before scrolling */
}

.rectangle-card img {
  width: 50px;
  height: 50px;
  margin: 15px;
}

.rectangle-card p {
  padding: 10px;
  margin-right: 10px;
  text-align: justify;
  word-wrap: break-word;
  overflow-x: hidden;
}
.moreArrow {

  max-width: 60px;
  max-height: 60px;

}
.arrow-container {
  border: 2px solid white;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 65px; /* Set a fixed width */
  height: 65px;
  border-radius: 10%;
  text-align: right;
  position: absolute; /* Make the arrow-container an absolute container */
  bottom: 0; /* Position the arrow-container at the bottom */
  right: 0;
}
</style>