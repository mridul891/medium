import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    SECRET: string
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
        password: body.password
      }
    })

    // Jwt Implementaion 
    const secret = c.env.SECRET

    const jwt = await sign({ id: user.id }, secret)

    return c.json({ jwt })
  } catch (error) {
    c.status(403)
    return c.json({ error: "Error while siging up " })
  }



})

app.post('/api/v1/signin', (c) => {
  return c.json({ message: "dfas" })
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
