import { Client } from '@notionhq/client';

const client = new Client({
    auth: "secret_NQeOSmrh55b8GarchMgBryQBG5Po3aQA7sUKKJfn02S",
});

// checkのついたものを取得
// dateの日付昇順に並び替え
async function posts() {
    const myPosts = await client.databases.query({
        database_id: '1947490e33a341408ca71cc11b560c98',
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