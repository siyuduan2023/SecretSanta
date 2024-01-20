import Participant from 'App/Models/Participant'
import { schema } from '@ioc:Adonis/Core/Validator'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Hello world'
})

Route.post('/participant', async ({request}) => {
  const newPostSchema = schema.create({
    name: schema.string(),
    email: schema.string(),
    like1: schema.string(),
    like2: schema.string.nullableAndOptional(),
    like3: schema.string.nullableAndOptional(),
    dislike1: schema.string(),
    dislike2: schema.string.nullableAndOptional(),
    dislike3: schema.string.nullableAndOptional(),
    bio: schema.string()
  })

  await request.validate({schema: newPostSchema})

  return await Participant.create(request.body())
})



Route.get('participant/:id', async ({ params }) => {
  const participant = await Participant.find(params.id)
  return participant
}
)
