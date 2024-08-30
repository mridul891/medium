import { signInInput, signUpInput } from "@mridul891/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import zod from 'zod'
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()



userRouter.post('/signup', async (c) => {

    // using prisma client to coonnect the connection pool to the database 
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    // taking the body from the request of the user 
    const body = await c.req.json();

    const { success } = signUpInput.safeParse(body)

    if (!success) {
        c.status(411)
        return c.json({
            message: "Incorrect input"
        })
    }
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name
            }
        })
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)

        return c.json({ jwt: token })

    } catch (error) {
        c.status(403)
        return c.json({ error: "Error while siging ups " })
    }
})





// signin request
userRouter.post('/signin', async (c) => {
    console.log("reacher")
    // Intitaliza the prisma 
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    // taking the body 
    const body = await c.req.json();
    const { success } = signInInput.safeParse(body)

    if (!success) {
        c.status(411)
        return c.json({
            message: "Incorrect input using zod"
        })
    }
    try {
        console.log("reached")
        const user = await prisma.user.findUnique({
            where: {
                email: body.email
            }, select: {
                id: true
            }
        })

        if (!user) {
            c.status(403)
            return c.json({ error: "Unauthorized" })
        }

        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        console.log(token)
        return c.json({ jwt: token })
    } catch (error) {
        c.status(403)
        return c.json({ error: "Error while siging in " })
    }
})