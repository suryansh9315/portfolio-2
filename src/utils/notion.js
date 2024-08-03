import "server-only";

import { Client } from "@notionhq/client";
import { NotionAPI } from 'notion-client'
import { cache } from 'react'

export const notion = new NotionAPI({
    authToken: process.env.NOTION_TOKEN_V2,
    activeUser: process.env.NOTION_USERID,
})

export const notionClient = new Client({
    auth: process.env.NOTION_TOKEN,
});

export async function getTagsOptions() {
    const temp = []
    temp.push({ name: "All", active: true })
    try {
        const response = await notionClient.databases.retrieve({ database_id: process.env.NOTION_DATABASE });
        const properties = response.properties;
        properties.Tags.multi_select.options.forEach(option => {
            temp.push({ name: option.name, active: false })
        });
    } catch (error) {
        console.log(error)
    }
    return temp
}

export async function getPage(pageId) {
    const recordMap = await notion.getPage(pageId)
    return recordMap
}

export const getPages = cache(() => {
    return notionClient.databases.query({
        filter: {
            property: "Status",
            status: {
                equals: "published"
            }
        },
        database_id: process.env.NOTION_DATABASE,
    });
});

export const getPageContent = cache((pageId) => {
    return notionClient.blocks.children
        .list({ block_id: pageId })
        .then((res) => res.results);
});

export const getPageBySlug = cache((slug) => {
    return notionClient.databases
        .query({
            database_id: process.env.NOTION_DATABASE,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug,
                },
            },
        })
        .then((res) => res.results[0]);
});