const { Client } = require('@notionhq/client')

const { NOTION_TOKEN } = process.env
const notion = new Client({ auth: NOTION_TOKEN })

const defaultDatabaseOptions = {
  filter: {
    or: [],
  },
  sorts: [
    {
      property: 'Sort',
      direction: 'ascending',
    },
  ],
}

function getNotionBlockData(blockId) {
  return notion.blocks.retrieve({
    block_id: blockId,
  })
}

function getNotionTableData(databaseId, options = defaultDatabaseOptions) {
  return notion.databases.query({
    database_id: databaseId,
    ...options,
  })
}

module.exports = {
  getNotionBlockData,
  getNotionTableData,
}
