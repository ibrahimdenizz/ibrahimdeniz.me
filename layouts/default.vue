<template>
  <div class="wrapper">
    <app-navbar />
    <nuxt />
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
