<script setup>

</script>

<template>

<div class="bio">
  <h1>Hey, I'm Diego</h1>
  <p>I'm a DevOps engineer</p>
  <p>3 years of experience. Specialized in cloud based solutions</p>
</div>
</template>

<style scoped>

.bio {
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #205295; /* Change this to the color you want */
  /* ...existing styles... */
}
@media (max-width: 600px) {
  .bio {
    height: 100vh;
  }
}
</style>