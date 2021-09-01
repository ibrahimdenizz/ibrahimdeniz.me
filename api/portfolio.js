const router = require('express').Router()

const { getTableTextProperty, getTableImageProperty } = require('./utils')
const { getNotionTableData } = require('./utils/notionQueries')

const { NOTION_PORTFOLIO_PROJECT_ID } = process.env

router.get('/projects', async (req, res) => {
  const { results } = await getNotionTableData(NOTION_PORTFOLIO_PROJECT_ID)

  const projects = results.map((result) => ({
    name: getTableTextProperty(result, 'ProjectName', { title: true }),
    githubLink: getTableTextProperty(result, 'GithubLink'),
    liveLink: getTableTextProperty(result, 'LiveLink'),
    image: getTableImageProperty(result, 'Image'),
  }))
  return res.json(projects)
})

module.exports = router
