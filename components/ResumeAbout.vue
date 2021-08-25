<template>
  <div>
    <h3>About Me</h3>
    <div class="about-me">
      <div class="image">
        <img src="/me.jpg" alt="my picture" width="100" height="100" />
      </div>
      <div>
        <p>{{ desc }}</p>
        <div class="personal-infos">
          <p v-for="personalInfo in personalInfos" :key="personalInfo.id">
            <span class="info-type">{{ personalInfo.type }}: </span>
            <span>{{ personalInfo.value }}</span>
          </p>
        </div>
        <b-button class="download-cv">Download CV</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    desc() {
      return this.$store.state.resume.desc
    },
    personalInfos() {
      return this.$store.state.resume.personalInfos
    },
  },
}
</script>

<style lang="scss" scoped>
.about-me {
  display: flex;
  margin: 30px 0;
}
.about-me img {
  border-radius: 50%;
  margin: 0 20px 0 0;
}

.personal-infos {
  display: flex;
  flex-wrap: wrap;

  & p {
    display: flex;
    flex: 0 0 48%;
  }
}

.personal-infos p {
  margin: 10px 10px 0 0;
}

.personal-infos p .info-type {
  color: #f26b38;
  margin-right: 10px;
}

.download-cv {
  background-color: #f26b38;
  color: white;
  margin-top: 30px;
}

.download-cv:hover {
  background-color: darken(#f26b38, 10);
}

@media screen and (max-width: 900px) {
  h3 {
    text-align: center;
  }
  .about-me {
    display: inline-block;
    text-align: center;
  }
  .image {
    margin-bottom: 30px;
  }

  .personal-infos {
    & p {
      display: block;
      flex: 0 0 100%;
      text-align: left;
    }
  }
}
</style>
