<template>
  <div>
    <h4>Experience</h4>
    <div class="experience-items">
      <div
        v-for="experience in experiences"
        :key="experience.id"
        class="experience-item"
      >
        <p class="time">{{ experience.since }}</p>
        <p class="role-where">{{ experience.role }} - {{ experience.where }}</p>
        <p class="desc">{{ experience.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    experiences() {
      return this.$store.state.resume.experiences
    },
  },
}
</script>

<style lang="scss" scoped>
.experience-items {
  padding: 20px 0 0 20px;
}

.experience-item {
  & .time {
    font-size: 16px;
    color: #f26b38;
    padding: 0.5rem;
    width: fit-content;
    border: solid 1px #f26b38;
  }

  & .role-where {
    padding-left: 1rem;
    font-size: 1.5rem;
  }

  & .desc {
    padding-left: 1rem;
  }
}
</style>
