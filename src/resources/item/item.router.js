import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get((req, res) => res.send({ message: 'GET ALL' }))
  .post((req, res) => res.send({ message: 'POST ONE' }))

router
  .route('/:id')
  .get((req, res) => res.send({ message: 'GET ONE' }))
  .put((req, res) => res.send({ message: 'UPDATE ONE' }))
  .delete((req, res) => res.send({ message: 'DELETE ONE' }))

export default router
