<template>
  <div class="about">
    <div class="text-body">
      <h2>About Me</h2>
      <div >
        <p>
          My name is Diego Alejandro Llanos Gareca, I am a DevOps engineer , I have 3 years of experience in the field. I specialize in cloud-based solutions.

        </p>

        <p>
          I am an  enthusiast of kubernetes and git-ops, I am always looking for new challenges and learning new technologies. Love automating processes, if you can do it manually you can automate it.
        </p>
        <p>
          I like "Milanesa a la napolitana"
        </p>
      </div>

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
  width: 100vw;
  height: 50vh;
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

