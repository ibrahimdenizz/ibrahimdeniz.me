import { v4 as uuid } from 'uuid'

export const state = () => ({
  desc: '',
  personalInfos: [],
})

export const mutations = {
  updateDesc: (state, data) => {
    state.desc = data
  },
  updatePersonalInfos: (state, data) => {
    state.personalInfos = data
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
}
