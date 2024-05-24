<template>
  <div class="certificate">
    <div class="icon">
      <img :src="iconLink" alt="Company Icon">
    </div>
    <div class="description">
      <div class="name">{{ name }}</div>
      <div class="issue-date">{{ issueDate }}</div>
    </div>
    <div class="redirect">
      <a :href="redirectLink" target="_blank">
        <img src="@/assets/arrow-next.svg" alt="Redirect Icon">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    issueDate: String,
    redirectLink: String,
    iconLink: String,
  },
};
</script>

<style scoped>
.certificate {
  display: flex;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.icon, .redirect {
  flex: 0 0 20%; /* don't grow, don't shrink, start at 20% of the parent width */
  display: flex;
  justify-content: center;
  align-items: center;
}

.description {
  flex: 0 0 60%; /* don't grow, don't shrink, start at 60% of the parent width */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon img, .redirect img {
  width: 50px;
  height: 50px;
}
</style>