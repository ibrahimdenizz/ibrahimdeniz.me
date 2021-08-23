export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    await dispatch('resume/getDesc')
    await dispatch('resume/getPersonalInfos')
    await dispatch('resume/getSkills')
  },
}
