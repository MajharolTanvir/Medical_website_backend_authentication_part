import { User } from './users.model'
import { IUser } from './users.interface'

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const existUser = await User.findOne({
    email: payload.email,
  })

  if (existUser) {
    throw new Error('Email address already exist!')
  }
  console.log(existUser)

  const createdUser = await User.create(payload)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }

  return createdUser
}

export const UserService = {
  createUser,
}
