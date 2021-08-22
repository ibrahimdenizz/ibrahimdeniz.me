const router = require('express').Router()

const { Client } = require('@notionhq/client')
const {
  parseNotionId,
  getTableTextProperty,
  getTableSelectProperty,
} = require('./utils/index.js')

const {
  NOTION_TOKEN,
  NOTION_RESUME_DESC_ID,
  NOTION_RESUME_INFO_ID,
  NOTION_RESUME_EXP_ID,
  NOTION_RESUME_EDU_ID,
  NOTION_RESUME_SKILLS_ID,
} = process.env
const notion = new Client({ auth: NOTION_TOKEN })

router.get('/desc', async (req, res) => {
  const blockId = parseNotionId(NOTION_RESUME_DESC_ID)
  try {
    const response = await notion.blocks.retrieve({
      block_id: blockId,
    })
    const result = response.paragraph.text[0].plain_text
    res.json({ data: result })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/personal-info', async (req, res) => {
  const databaseId = parseNotionId(NOTION_RESUME_INFO_ID)
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [],
    },
  })
  const personalInfos = response.results.map((result) => {
    return {
      type: result.properties?.Type?.title[0]?.plain_text || '',
      value: result.properties?.Value?.rich_text[0]?.plain_text || '',
    }
  })
  res.json({ data: personalInfos })
})

router.get('/experience', async (req, res) => {
  const databaseId = parseNotionId(NOTION_RESUME_EXP_ID)
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [],
    },
  })
  const personalInfos = response.results.map((result) => {
    return {
      where: getTableTextProperty(result, 'Where', { title: true }),
      role: getTableTextProperty(result, 'Role'),
      since: getTableTextProperty(result, 'Since'),
      desc: getTableTextProperty(result, 'Description'),
    }
  })
  res.json({ data: personalInfos })
})

router.get('/education', async (req, res) => {
  const databaseId = parseNotionId(NOTION_RESUME_EDU_ID)
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [],
    },
  })
  const personalInfos = response.results.map((result) => {
    return {
      school: getTableTextProperty(result, 'School', { title: true }),
      study: getTableTextProperty(result, 'Study'),
      time: getTableTextProperty(result, 'Time'),
    }
  })
  res.json({ data: personalInfos })
})

router.get('/skills', async (req, res) => {
  const databaseId = parseNotionId(NOTION_RESUME_SKILLS_ID)
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [],
    },
  })
  const personalInfos = response.results.map((result) => {
    return {
      skillType: getTableTextProperty(result, 'SkillType', { title: true }),
      skills: getTableSelectProperty(result, 'Skills'),
    }
  })
  res.json({ data: personalInfos })
})

module.exports = router
