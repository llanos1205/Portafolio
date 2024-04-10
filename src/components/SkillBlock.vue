<template>
  <div class="skill-block" @mouseover="toggleRectangle" @mouseleave="hideRectangle">
    <div class="square-wrapper">
      <div class="square" :style="{background:backgroundColor}">
        <img :src="iconUrl" alt="Icon" class="icon" />
      </div>
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
  },
  methods: {
      toggleRectangle() {
        this.showRectangle = true;
        this.rectangleWidth = "100%";
        this.setFillColor();
      },
      hideRectangle() {
        this.showRectangle = false;
        this.rectangleWidth = "0%";
        this.fillPercentage = "0%";
        this.fillColor = "transparent";
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
const style = getComputedStyle(document.documentElement);
const backgroundColor = style.getPropertyValue('--scale-3');
const secondaryColor = style.getPropertyValue('--scale-4');
const textColor = style.getPropertyValue('--text-color-scale-3');
const secondaryTextColor = style.getPropertyValue('--text-color-scale-4');

</script>

<style scoped>
.skill-block {
  width: 100%;
  margin-top: 20px;
  display: inline-block;
  cursor: pointer;
}
@media (max-width: 600px) {
  .skill-block {
    flex-direction: column;
    align-items: center;
  }
}
.square-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
}

.square {
  position: relative;
  width: 100%;
  height: 100%;
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
