import { v4 as uuid } from 'uuid'

export const state = () => ({
  desc: '',
  personalInfos: [],
  skills: [],
  experiences: [],
  educations: [],
  downloadUrl: '',
})

export const mutations = {
  updateDesc(state, data) {
    state.desc = data
  },
  updatePersonalInfos(state, data) {
    state.personalInfos = data
  },
  updateSkills(state, data) {
    state.skills = data
  },
  updateExperiences(state, data) {
    state.experiences = data
  },
  updateEducations(state, data) {
    state.educations = data
  },
  updateDownloadUrl(state, data) {
    state.downloadUrl = data
  },
}

export const actions = {
  async getDesc({ commit }) {
    try {
      const response = await this.$axios.$get('api/resume/desc')
      commit('updateDesc', response.data)
    } catch (error) {}
  },
  async getPersonalInfos({ commit }) {
    try {
      const response = await this.$axios.$get('api/resume/personal-info')
      const personalInfos = response.data.map((info) => ({
        ...info,
        id: uuid(),
      }))
      commit('updatePersonalInfos', personalInfos)
    } catch (error) {}
  },
  async getSkills({ commit }) {
    try {
      const response = await this.$axios.$get('api/resume/skills')
      const skills = response.data.map((skill) => {
        skill.id = uuid()
        return skill
      })
      commit('updateSkills', skills)
    } catch (error) {}
  },
  async getExperiences({ commit }) {
    try {
      const response = await this.$axios.$get('api/resume/experience')
      const experiences = response.data.map((experience) => {
        experience.id = uuid()
        return experience
      })
      commit('updateExperiences', experiences)
    } catch (error) {}
  },
  async getEducations({ commit }) {
    try {
      const response = await this.$axios.$get('api/resume/education')
      const educations = response.data.map((education) => {
        education.id = uuid()
        return education
      })
      commit('updateEducations', educations)
    } catch (error) {}
  },
  async getDownloadUrl({ commit }) {
    try {
      const response = await this.$axios.$get('api/resume/download')
      commit('updateDownloadUrl', response.data.url)
    } catch (error) {}
  },
}
