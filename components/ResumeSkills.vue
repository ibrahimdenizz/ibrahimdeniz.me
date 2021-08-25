<template>
  <div>
    <h3>Skills</h3>
    <div class="container">
      <div v-for="skill in skills" :key="skill.id" class="skills-wrapper">
        <p class="skill-type">{{ skill.type }}</p>
        <div class="tools">
          <div v-for="tool in skill.tools" :key="tool" class="skill">
            {{ tool }}
          </div>
        </div>
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
.container {
  display: flex;
  flex: 0 0 33%;
}

.skills-wrapper {
  margin: 15px 0 15px 15px;
}

.skill-type {
  font-size: 24px;
  color: #f26b38;
}

.tools {
  display: flex;
  flex-flow: row wrap;
}

.skill {
  margin: 0 5px 30px 0;
  flex: 0 0 30%;
}
@media screen and (max-width: 900px) {
  .skill {
    margin-bottom: 10px;
  }

  .container {
    display: inline-block;
  }
}
</style>
