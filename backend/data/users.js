import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        pasword: bcrypt.hashSync('password', 10),
        isAdmin: true
    },
    {
        name: 'example',
        pasword: bcrypt.hashSync('password', 10),
    },
    {
        name: 'example 2',
        pasword: bcrypt.hashSync('password', 10),
    }
]

export default users