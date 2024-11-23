import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        emoji: z.string().emoji(),
        title: z.string().max(100).min(1),
        draft: z.boolean(),
        uploadAt: z.date(),
        tags: z.array(reference("tags")).optional(),
    })
})

const projectsCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string().max(50).min(1),
        description: z.string().max(100).min(1),
        url: z.string().url(),
        img: z.string(),
        draft: z.boolean(),
        tags: z.array(reference("tags")).optional(),
    })
})

const tagsCollection = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
    })
})

export const collections = {
    "blog": blogCollection,
    "projects": projectsCollection,
    "tags": tagsCollection,
}
