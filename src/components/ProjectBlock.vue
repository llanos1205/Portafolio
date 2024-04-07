<template>
  <div>
    <div class="card card-description" v-if="isCard1Visible" @click="isCard1Visible = !isCard1Visible">
      <h2>{{ name }}</h2>
      <img :src="image" alt="Image">
      <p>{{ description }}</p>
    </div>

    <div class="card card-steps" v-else @click="isCard1Visible = !isCard1Visible">
      <div class="rectangle-card" v-for="(item, index) in items" :key="index">
        <img :src="item.iconUrl" alt="Icon">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    description: String,
    items: Array
  },
  data() {
    return {
      isCard1Visible: true
    };
  }
};
</script>
<style scoped>
.card {
  width: 300px;
  height: 300px;
  min-width: 50vw; /* Adjust size as needed */
  min-height: 40vh; /* Adjust size as needed */
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
}
@media (max-width: 600px) {
  .card {
    width: 100vw;
    height: 85vh;
  }
}

.card-description {
  background-color: #4a4a4a; /* Darker background color for card 1 */
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
  min-height: 10vh;
  height: calc((300px - 20px * 2) / 4); /* Adjust the height based on the number of items you want to display before scrolling */
}

.rectangle-card img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.rectangle-card p {
  margin: 0;
}
</style>