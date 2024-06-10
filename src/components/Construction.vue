<template>
  <div class="construction">
    <h1>This site is Under Construction</h1>
    <p>Hello! Glad to see you made it to the bottom of this portfolio.</p>
    <p>You may have noticed that this page isn't a showcase of cutting-edge UI and UX design. That's because I'm not a FrontEnd Engineer or a UI/UX designer—those are skills that go beyond my expertise.</p>
    <p>However, I hope this site highlights the key aspects of my journey as a DevOps engineer. It's a work in progress as I continue learning Vue in my spare time.</p>
    <p>Thank you for visiting!</p>
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
  height: 100vh; /* 80% of the window's height */
  background-image: url('@/assets/cloud.jpg');
  background-size: cover; /* Cover the entire area of the element */
  background-position: center; /* Center the image */
  /* ...existing styles... */
  color: #000000;
}

.construction p {
  font-size: 18px;
  margin-top: 20px;
  padding: 0 20px;
}

.construction h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .construction {
    height: 100vh;
  }
}
</style>
