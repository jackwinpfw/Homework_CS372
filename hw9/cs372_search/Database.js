const mongoose = require('mongoose')
const element = new mongoose.Schema(
    {
        content: String
    }
)
const elementTable = mongoose.model('cs372searchelements', element)

async function add(content) {
    await elementTable.create([{content:content}])
}

async function read(query) {
    const docs = await elementTable.find({})
    let content = []
    for (let i = 0; i < docs.length;i++) {
        if (docs[i].content.includes(query))
        content.push(docs[i].content)
    }
    return content
}

module.exports = {add, read}