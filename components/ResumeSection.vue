<template>
  <section class="resume-section">
    <resume-about class="about" />
    <resume-skills class="skills" />
    <div class="experience-education">
      <resume-experience class="experience" />
      <resume-education class="education" />
    </div>
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

.about {
  margin-bottom: 3rem;
}

.skills {
  margin-bottom: 3rem;
}

.experience-education {
  display: flex;
  padding-bottom: 5rem;
}

.experience {
  flex: 0 0 50%;
  margin-bottom: 3rem;
}

.education {
  flex: 0 0 50%;
  margin-bottom: 3rem;
}

@media screen and (max-width: 900px) {
  .resume-section {
    margin: 0 30px;
    padding-top: 20%;
  }
  .experience-education {
    display: block;
  }
}
</style>
