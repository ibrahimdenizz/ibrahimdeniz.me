<template>
  <section class="resume-section">
    <resume-about />
    <resume-skills />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.resume-section {
  padding-top: 10%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
}

@media screen and (max-width: 900px) {
  .resume-section {
    margin: 0 30px;
    padding-top: 20%;
  }
}
</style>
