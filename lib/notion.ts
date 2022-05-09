import { Client } from '@notionhq/client';
require('dotenv').config();

const client = new Client({
    auth: process.env.NOTION_API_KEY,
});

// checkのついたものを取得
// dateの日付昇順に並び替え
async function posts() {
    const myPosts = await client.databases.query({
        database_id: process.env.NOTION_DATABASE_ID || "",
        filter: {
            or: [
                {
                    property: "published",
                    checkbox: {
                        equals: true,
                    },
                },
            ]
        },
        sorts: [
            {
                property: "date",
                direction: "ascending",
            },
        ]
    });
    return myPosts;
}

async function post(id: string) {
    const myPost = await client.pages.retrieve({
        page_id: id,
    });
    return myPost;
}

async function blocks(id: string) {
    const myBlocks = await client.blocks.children.list({
        block_id: id
    });
    return myBlocks;
}


export {
    posts,
    post,
    blocks
}