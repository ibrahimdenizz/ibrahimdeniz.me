const router = require('express').Router()

const {
  parseNotionId,
  getTableTextProperty,
  getTableSelectProperty,
  getBlockText,
  getTableCheckboxProperty,
  getBlockFile,
} = require('./utils/index.js')
const {
  getNotionBlockData,
  getNotionTableData,
} = require('./utils/notionQueries.js')

const {
  NOTION_RESUME_DESC_ID,
  NOTION_RESUME_INFO_ID,
  NOTION_RESUME_EXP_ID,
  NOTION_RESUME_EDU_ID,
  NOTION_RESUME_SKILLS_ID,
} = process.env

router.get('/desc', async (req, res) => {
  const blockId = parseNotionId(NOTION_RESUME_DESC_ID)

  try {
    const result = await getNotionBlockData(blockId)

    const descText = getBlockText(result)

    res.status(200).json({ data: descText })
  } catch (error) {
    res.status(500).send({ error })
  }
})

router.get('/personal-info', async (req, res) => {
  const databaseId = parseNotionId(NOTION_RESUME_INFO_ID)
  try {
    const response = await getNotionTableData(databaseId)

    const personalInfos = response.results.map((result) => {
      return {
        type: getTableTextProperty(result, 'Type', { title: true }),
        value: getTableTextProperty(result, 'Value'),
        isLink: getTableCheckboxProperty(result, 'IsLink'),
      }
    })

    res.status(200).json({ data: personalInfos })
  } catch (error) {
    res.status(500).send({ error })
  }
})

router.get('/experience', async (req, res) => {
  const databaseId = parseNotionId(NOTION_RESUME_EXP_ID)
  try {
    const response = await getNotionTableData(databaseId)

    const personalInfos = response.results.map((result) => {
      return {
        where: getTableTextProperty(result, 'Where', { title: true }),
        role: getTableTextProperty(result, 'Role'),
        since: getTableTextProperty(result, 'Since'),
        desc: getTableTextProperty(result, 'Description'),
      }
    })

    res.status(200).json({ data: personalInfos })
  } catch (error) {
    res.status(500).send({ error })
  }
})

router.get('/education', async (req, res) => {
  const databaseId = parseNotionId(NOTION_RESUME_EDU_ID)
  try {
    const response = await getNotionTableData(databaseId)

    const personalInfos = response.results.map((result) => {
      return {
        school: getTableTextProperty(result, 'School', { title: true }),
        study: getTableTextProperty(result, 'Study'),
        time: getTableTextProperty(result, 'Time'),
      }
    })

    res.status(200).json({ data: personalInfos })
  } catch (error) {
    res.status(500).send({ error })
  }
})

router.get('/skills', async (req, res) => {
  const databaseId = parseNotionId(NOTION_RESUME_SKILLS_ID)
  try {
    const response = await getNotionTableData(databaseId)

    const personalInfos = response.results.map((result) => {
      return {
        type: getTableTextProperty(result, 'Type', { title: true }),
        tools: getTableSelectProperty(result, 'Tools'),
      }
    })

    res.status(200).json({ data: personalInfos })
  } catch (error) {
    res.status(500).send({ error })
  }
})

router.get('/download', async (req, res) => {
  const blockId = parseNotionId('dd0aba45b601413fb1c544d6ba68d565')

  try {
    const result = await getNotionBlockData(blockId)

    return res.status(200).json({
      data: {
        url: getBlockFile(result),
      },
    })
  } catch (error) {}
})

// https://www.notion.so/Resume-fed9678a41404a66880cc72ffbeb6242#dd0aba45b601413fb1c544d6ba68d565

module.exports = router
