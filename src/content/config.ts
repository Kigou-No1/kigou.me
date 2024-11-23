import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        emoji: z.string().emoji(),
        title: z.string().max(20).min(1),
        draft: z.boolean(),
        uploadAt: z.date(),
        tags: z.array(z.string().max(20).min(1)).max(5).min(0).optional(),
    })
})

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string().max(50).min(1),
        description: z.string().max(100).min(1),
        url: z.string().url(),
    })
})

export const collections = {
    "blog": blogCollection,
    "projects": projectsCollection,
}
