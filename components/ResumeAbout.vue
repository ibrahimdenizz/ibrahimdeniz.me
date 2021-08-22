<template>
  <div>
    <h3>About Me</h3>
    <div class="about-me">
      <div>
        <img src="/me.jpg" alt="my picture" width="100" height="100" />
      </div>
      <div>
        <p>{{ desc }}</p>
        <div class="personal-infos">
          <p v-for="personalInfo in personalInfos" :key="personalInfo.id">
            <span>{{ personalInfo.type }}: </span> {{ personalInfo.value }}
          </p>
        </div>
        <b-button class="download-cv">Download CV</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  data() {
    this.getDesc()
    this.getPersonalInfos()
    return {
      desc: '',
      personalInfos: [],
      notionTest: {},
    }
  },
  methods: {
    async getDesc() {
      try {
        const response = await this.$axios.$get('api/resume/desc')

        this.desc = response.data
      } catch (error) {}
    },
    async getPersonalInfos() {
      try {
        const response = await this.$axios.$get('api/resume/personal-info')
        this.personalInfos = response.data.map((info) => ({
          ...info,
          id: uuid(),
        }))
      } catch (error) {}
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

.personal-infos,
.personal-infos p {
  display: flex;
  flex-wrap: wrap;
  flex: 33%;
}

.personal-infos p {
  margin: 10px 10px 0 0;
}

.personal-infos p span {
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
</style>
