import { createBlogInput, updateBlogInput } from "@mridul891/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { string } from "zod";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
    }
}>()

blogRouter.use('/*', async (c, next) => {

    const authHeader = c.req.header('authorization') || ""
    // extract  the user id
    const user = await verify(authHeader, c.env.JWT_SECRET)

    // pass it down to  the route handler
    try {

        if (user) {
            c.set("userId", user.id);
            await next()
        } else {
            c.status(403)
            return c.json({ message: "you are not logged in " })
        }
    } catch (error) {
        c.status(403)
        return c.json({ message: "you are not logged in " })
    }
})

blogRouter.post('/create', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    // taking the body 
    const body = await c.req.json();


    const { success } = createBlogInput.safeParse(body)

    if (!success) {
        c.status(411)
        return c.json({
            message: "Incorrect input using zod"
        })
    }

    const userId = await c.get("userId")
    try {
        console.log("Reacherd")
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        });
        return c.json({
            id: blog.id
        })
    } catch (error) {
        c.status(411);
        return c.json({ message: "Error while Creating the blog" })
    }
})

blogRouter.put('/update', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    // taking the body 
    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body)

    if (!success) {
        c.status(411)
        return c.json({
            message: "Incorrect input using zod"
        })
    }
    const userId = c.get("userId")
    try {

        const blog = await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId
            }, data: {
                title: body.title,
                content: body.content,
            }
        })

        return c.json({
            id: blog.id
        })
    } catch (error) {
        c.status(411);
        return c.json({ message: "Error while Updating the blog" })
    }
})

blogRouter.get('/entry/:id', async (c) => {
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    // taking the body 
    try {

        const blog = await prisma.post.findMany({
            where: {
                id: id
            }, select: {
                id: true,
                title: true,
                content: true,
                published: true,
                authorId: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return c.json({ blog })
    } catch (error) {
        c.status(411);
        return c.json({ message: "Error while fetching the blog" })
    }

})

// returns just the title of all the blogs  

// Todo : add pagination 
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const blogs = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                published: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return c.json({ blogs })
    } catch (error) {
        console.log(error)
    }
})