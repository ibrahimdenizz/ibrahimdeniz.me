<template>
  <div class="wrapper">
    <app-navbar />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('resume/getDesc')
    this.$store.dispatch('resume/getPersonalInfos')
    this.$store.dispatch('resume/getSkills')
    this.$store.dispatch('resume/getExperiences')
    this.$store.dispatch('resume/getEducations')
    this.$store.dispatch('resume/getDownloadUrl')
    this.$store.dispatch('portfolio/getProjects')
  },
}
</script>

<style lang="scss">
.main {
  position: relative;
  height: 100vh;
}
</style>
