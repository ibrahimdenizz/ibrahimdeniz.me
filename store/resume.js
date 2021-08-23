import { v4 as uuid } from 'uuid'

export const state = () => ({
  desc: '',
  personalInfos: [],
  skills: [],
})

export const mutations = {
  updateDesc: (state, data) => {
    state.desc = data
  },
  updatePersonalInfos: (state, data) => {
    state.personalInfos = data
  },
  updateSkills: (state, data) => {
    state.skills = data
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
}
