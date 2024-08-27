import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'

const app = new Hono()

const prisma = new PrismaClient({
  datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())

app.post('/api/v1/signup', (c) => {
  return c.json({ message: "dfas" })
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
