export default async ({ store }) => {
  await store.dispatch('resume/getDesc')
  await store.dispatch('resume/getPersonalInfos')
  await store.dispatch('resume/getSkills')
}
