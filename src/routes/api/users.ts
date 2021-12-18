import { Router } from 'express'

import UsersControllers from '@/controllers/Users'
const UsersRouter: Router = Router()

// eslint-disable-next-line
UsersRouter
  .get('/:id', UsersControllers.getUserInfo)

export default UsersRouter