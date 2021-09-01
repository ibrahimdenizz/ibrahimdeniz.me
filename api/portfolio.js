const router = require('express').Router()

const {
  getTableTextProperty,
  getTableFileProperty,
  parseNotionId,
} = require('./utils')
const { getNotionTableData } = require('./utils/notionQueries')

const { NOTION_PORTFOLIO_PROJECT_ID } = process.env

router.get('/projects', async (req, res) => {
  const databaseId = parseNotionId(NOTION_PORTFOLIO_PROJECT_ID)
  try {
    const { results } = await getNotionTableData(databaseId)

    const projects = results.map((result) => ({
      name: getTableTextProperty(result, 'ProjectName', { title: true }),
      desc: getTableTextProperty(result, 'Desc'),
      githubLink: getTableTextProperty(result, 'GithubLink'),
      liveLink: getTableTextProperty(result, 'LiveLink'),
      image: getTableFileProperty(result, 'Image'),
    }))
    return res.status(200).json({ data: projects })
  } catch (error) {
    return res.status(500).json({ error })
  }
})

module.exports = router
