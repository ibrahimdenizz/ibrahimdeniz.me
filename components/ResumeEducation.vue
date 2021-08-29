<template>
  <div>
    <h4>Education</h4>
    <div class="education-items">
      <div
        v-for="education in educations"
        :key="education.id"
        class="education-item"
      >
        <p class="time">{{ education.time }}</p>
        <p class="role-where">{{ education.study }} - {{ education.school }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    educations() {
      return this.$store.state.resume.educations
    },
  },
}
</script>

<style lang="scss" scoped>
.education-items {
  padding: 20px 0 0 20px;
}

.education-item {
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
