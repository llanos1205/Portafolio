<script setup>
import {computed} from "vue";
const props = defineProps({
  socials: Array
});

const goToProfile = (url) => {
  window.open(url, '_blank');
};
const style = getComputedStyle(document.documentElement);
const backgroundColor = style.getPropertyValue('--scale-1');
const secondaryColor = style.getPropertyValue('--scale-2');
const textColor = style.getPropertyValue('--text-color-scale-1');
const secondaryTextColor = style.getPropertyValue('--text-color-scale-2');
// Replace '--scale-4' with the name of your CSS variable
const visaStatus = computed(() => {
  const currentDate = new Date();
  const visaDate = new Date(2024, 5, 5); // June 5, 2024

  if (currentDate < visaDate) {
    return {
      text: 'In Process, expected JUN 2024',
      color: 'yellow',
    };
  } else {
    return {
      text: 'Available',
      color: 'green',
    };
  }
});
</script>

<template>
  <div class="bio" :style="{ backgroundColor: backgroundColor, color: textColor } ">
    <img src="@/assets/front.png" alt="Small Photo" class="small-photo" />
    <div class="bio-content" >
      <h1>Hey, I'm Diego</h1>
      <p>I'm a DevOps engineer</p>
      <p>3 years of experience. Specialized in cloud based solutions</p>
      <p>NZ Work visa status: <span :class="visaStatus.color">{{ visaStatus.text }}</span></p>
      <div class="social-buttons">
        <button v-for="social in props.socials" :key="social.name" @click="goToProfile(social.profileUrl)" :style="{ background: secondaryColor, color:secondaryTextColor}">
          <img :src="social.imageUrl" :alt="social.name + ' Icon'" />
          {{ social.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.yellow {
  color: yellow;
}
.green {
  color: green;
}
.bio {
  width: 100vw;
  height: 50vh;
  display: flex;
  column-gap: 50px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #205295; /* Change this to the color you want */
  /* ...existing styles... */
}
.bio-content {
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 600px) {
  .bio {
    height: 100vh;
    flex-direction: column;
  }
}

@media (min-height: 1200px ) {
  .bio {
    height: 100vh;
    flex-direction: row;
  }
}

.small-photo {
  border-radius: 50%; /* Creates circular border */
  width: 400px; /* Adjust size as needed */
  height: 400px; /* Adjust size as needed */
  object-fit: cover;/* Ensures the photo covers the entire area */
}

@media (max-width: 600px) {
  .small-photo {
    width: 250px;
    height: 250px;
  }
}

.social-buttons {
  column-gap: 5px;
  display: flex;
  justify-content: space-between;
  width: 300px; /* Adjust size as needed */
}

.social-buttons button {
  display: flex;
  align-items: center;
  border-radius: 10px; /* Creates rounded corners */
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: #1a4b84; /* Slightly darker background color */
  width: 100px; /* Adjust width as needed */
  justify-content: space-between; /* Space out the icon and name */
}

.social-buttons button img {
  width: 20px; /* Adjust size as needed */
  height: 20px; /* Adjust size as needed */
}
</style>