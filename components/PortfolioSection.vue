<template>
  <section class="portfolio-section">
    <portfolio-project
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.portfolio.projects
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-section {
  padding-top: 10%;
  max-width: 1000px;
  margin: 0 auto;
}

@media screen and (max-width: 900px) {
  .portfolio-section {
    margin: 0 2rem;
  }
}
</style>
