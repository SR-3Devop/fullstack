import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Hema khemka',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'vodka',
    email: 'vodka@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'chintu',
    email: 'chintu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users