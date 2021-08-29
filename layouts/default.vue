<template>
  <div class="wrapper">
    <app-navbar />
    <nuxt class="main" />
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
  },
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100vh;
}
</style>
