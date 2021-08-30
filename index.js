const { Client } = require("@notionhq/client")
const dotenv = require("dotenv")

dotenv.config()

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

async function addItem(obj) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": obj.title,
              }
            }
          ]
        },
        'ストーリーポイント': {
          "rich_text": [
            {
              "text": {
                "content": "sample"
              }
            }
          ]
        },     
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem({ title: "Yurts in Big Sur, California"})
