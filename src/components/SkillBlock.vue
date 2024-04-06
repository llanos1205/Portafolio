<template>
  <div class="skill-block" @click="toggleRectangle">
    <div class="square">
      <img :src="iconUrl" alt="Icon" class="icon" />
      <div v-if="showRectangle" class="rectangle" :style="{ width: rectangleWidth, height: rectangleHeight, top: rectangleTop }">
        <div class="fill" :style="{ width: fillPercentage, backgroundColor: fillColor }"></div>
      </div>
    </div>
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    iconUrl: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showRectangle: false,
      squareHeight: "100px",
      rectangleHeight: "10%",
      rectangleTop: "-15%",
      rectangleWidth: "0%",
      fillPercentage: "0%",
      fillColor: "transparent"
    };
  },
  methods: {
    toggleRectangle() {
      this.showRectangle = !this.showRectangle;
      if (this.showRectangle) {
        this.rectangleWidth = "100%";
        this.setFillColor();


      } else {
        this.rectangleWidth = "0%";
        this.fillPercentage = "0%";
        this.fillColor = "transparent";
      }
    },
    setFillColor() {
      if (this.level >= 0.75) {
        this.fillColor = "green";
      } else if (this.level >= 0.5) {
        this.fillColor = "yellow";
      } else {
        this.fillColor = "red";
      }
      this.fillPercentage = `${this.level * 100}%`;
    }
  }
};
</script>

<style scoped>
.skill-block {
  display: inline-block;
  cursor: pointer;
}

.square {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.1); /* Transparent square */
  border-radius: 15px; /* Rounded corners */
}

.icon {
  position: absolute;
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
}

.rectangle {
  position: absolute;
  border-radius: 15px;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2); /* Transparent rectangle */
}

.fill {
  height: 100%;
  border-radius: 15px;
  transition: width 1.5s ease-in-out, background-color 1.5s ease-in-out; /* Transition for width and background-color */
}

.name {
  text-align: center;
  margin-top: 5px;
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
}
</style>
