function parseNotionId(id) {
  const splitId = []
  splitId.push(id.slice(0, 8))
  splitId.push(id.slice(8, 12))
  splitId.push(id.slice(12, 16))
  splitId.push(id.slice(16, 20))
  splitId.push(id.slice(20))

  return splitId.join('-')
}

function getTableTextProperty(result, property, { title } = { title: false }) {
  const propertyType = title ? 'title' : 'rich_text'
  return result.properties?.[property]?.[propertyType][0]?.plain_text || ''
}

function getTableSelectProperty(result, property) {
  return result.properties?.[property]?.multi_select?.map(
    (select) => select?.name
  )
}

module.exports = {
  parseNotionId,
  getTableTextProperty,
  getTableSelectProperty,
}
