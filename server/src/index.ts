import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'
import { sign } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()


app.post('/api/v1/signup', async (c) => {

  // using prisma client to coonnect the connection pool to the database 
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  // taking the body from the request of the user 
  const body = await c.req.json();
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
app.post('/api/v1/signin', async (c) => {

  // Intitaliza the prisma 
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  // taking the body 
  const body = await c.req.json();
  try {

    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }, select: {
        id: true
      }
    })

    if (!user) {
      c.status(403)
      return c.json({ error: "user not found" })
    }

    const token = sign({ id: user.id }, c.env.SECRET)
  } catch (error) {
    c.status(403)
    return c.json({ error: "Error while siging in " })
  }
})



app.post('/api/v1/blog', (c) => {
  return c.json({ message: "dfas" })
})
app.put('/api/v1/blog', (c) => {
  return c.json({ message: "dfas" })
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
