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
  background-image: url('https://media.licdn.com/dms/image/C4D16AQFyK66HIHTCYw/profile-displaybackgroundimage-shrink_350_1400/0/1628807504867?e=1717632000&v=beta&t=EpBc8-Qiqwgog-VMS4SCf8Iv5mmw3ziYguCxgh46W1c');
  background-size: cover; /* Cover the entire area of the element */
  background-position: center; /* Center the image */
  /* ...existing styles... */
}

.construction p {
  font-size: 18px;
  margin-top: 20px;
  padding: 0 20px;
}
@media (max-width: 600px) {
  .construction {
    height: 100vh;
  }
}
</style>
