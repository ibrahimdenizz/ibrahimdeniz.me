import { v4 as uuid } from 'uuid'

export const state = () => ({
  projects: [],
})

export const mutations = {
  updateProjects(state, data) {
    state.projects = data
  },
}

export const actions = {
  async getProjects({ commit }) {
    try {
      const response = await this.$axios.$get('api/portfolio/projects')
      const projects = response.data.map((project) => ({
        ...project,
        id: uuid(),
      }))
      commit('updateProjects', projects)
    } catch (error) {}
  },
}
