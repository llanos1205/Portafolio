<template>
  <div class="about">
    <div class="text-body">
      <h2>About Me</h2>
      <p>
        Multiline text paragraph goes here. This is where you can write
        about yourself, your experiences, skills, and anything else you'd
        like to share with your audience.
      </p>
    </div>
    <div class="photo">
      <!-- Replace 'photo-url.jpg' with the actual URL of your photo -->
      <img src="https://media.licdn.com/dms/image/D5635AQFjhhW8mM_ivA/profile-framedphoto-shrink_200_200/0/1711445133196?e=1713013200&v=beta&t=hI6pUUdx1V88N8zcz5FgN1Eh5g8OBVZEkJAGzTsVjes" alt="Your Photo" class="photo-img" />
    </div>
  </div>
</template>

<script setup>
const title = "About Me";

// You can import and use any necessary variables or functions here
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
}

.text-body {
  flex: 1;
  padding: 20px;
}

.photo {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.photo-img {
  border-radius: 50%; /* Creates circular border */
  width: 200px; /* Adjust size as needed */
  height: 200px; /* Adjust size as needed */
  object-fit: cover; /* Ensures the photo covers the entire circle */
}
</style>

<!--https://media.licdn.com/dms/image/C4D16AQFyK66HIHTCYw/profile-displaybackgroundimage-shrink_350_1400/0/1628807504867?e=1717632000&v=beta&t=EpBc8-Qiqwgog-VMS4SCf8Iv5mmw3ziYguCxgh46W1c