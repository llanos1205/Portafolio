<script setup>
const socials = [
  {
    imageUrl: 'https://www.flaticon.com/svg/vstatic/svg/6422/6422202.svg?token=exp=1712442386~hmac=070bdfe4b8f6d268f928119d7c49cfbc',
    name: 'LinkedIn',
    profileUrl: 'https://www.linkedin.com/in/diego-alejandro-llanos-gareca-b516a6195'
  },
  {
    imageUrl: 'https://www.flaticon.com/svg/vstatic/svg/6424/6424084.svg?token=exp=1712442447~hmac=9f4960c56f0dee8d743364041d038ae7',
    name: 'Github',
    profileUrl: 'https://github.com/llanos1205'
  },
  {
    imageUrl: 'https://www.flaticon.com/svg/vstatic/svg/6422/6422199.svg?token=exp=1712442377~hmac=fce9d395fb295bf9295bc8461bee0a1b',
    name: 'Facebook',
    profileUrl: 'https://www.facebook.com/diego.llanosgareca'
  }

];

const goToProfile = (url) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="bio">
    <img src="https://media.licdn.com/dms/image/D5635AQFjhhW8mM_ivA/profile-framedphoto-shrink_200_200/0/1711445133196?e=1713013200&v=beta&t=hI6pUUdx1V88N8zcz5FgN1Eh5g8OBVZEkJAGzTsVjes" alt="Small Photo" class="small-photo" />
    <div class="bio-content">
      <h1>Hey, I'm Diego</h1>
      <p>I'm a DevOps engineer</p>
      <p>3 years of experience. Specialized in cloud based solutions</p>
      <div class="social-buttons">
        <button v-for="social in socials" :key="social.name" @click="goToProfile(social.profileUrl)">
          <img :src="social.imageUrl" :alt="social.name + ' Icon'" />
          {{ social.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

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

.small-photo {
  border-radius: 50%; /* Creates circular border */
  width: 200px; /* Adjust size as needed */
  height: 200px; /* Adjust size as needed */
  object-fit: cover;/* Ensures the photo covers the entire area */
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