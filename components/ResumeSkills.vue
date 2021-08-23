<template>
  <div>
    <h3>Skills</h3>
    <div v-for="skill in skills" :key="skill.id" class="skills-wrapper">
      <p>{{ skill.type }}</p>
      <div class="tools">
        <span v-for="tool in skill.tools" :key="tool" class="skill">{{
          tool
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    skills() {
      return this.$store.state.resume.skills
    },
  },
}
</script>

<style lang="scss" scoped>
.skill {
  margin-right: 30px;
}
.skills-wrapper {
  margin: 15px 0 15px 15px;
}

.skills-wrapper p {
  font-size: 24px;
}
</style>
