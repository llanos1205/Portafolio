<template>
  <div class="construction">
    <h1>This site is Under Construction</h1>
    <p>I'll update this portfolio if I ever learn how to code in Vue</p>
  </div>
</template>

<script>
export default {
  name: 'UnderConstruction',
};
</script>

<style scoped>
.construction {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw; /* 100% of the window's width */
  height: 50vh; /* 80% of the window's height */
  background-color: #2C74B3; /* Change this to the color you want */
  /* ...existing styles... */
}

.construction p {
  font-size: 18px;
  margin-top: 20px;
}
</style>
