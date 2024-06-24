import { Request, Response } from 'express'
import { UserService } from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await UserService.createUser(user)
    console.log('result -', result)
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}

export const UserController = {
  createUser,
}
