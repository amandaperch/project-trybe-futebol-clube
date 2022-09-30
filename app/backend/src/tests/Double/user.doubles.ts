export const user ={
  adm: {
    id: 1,
    username: 'Fernando',
    role: 'admin',
    email: 'admin@admin.com',
    password: '123456789',
  },
  user: {
    id: 2,
    username: 'Gabriela',
    role: 'user', 
    email: 'user@user.com',
    password: '1234567897',
  },
}

export const login = {
  admin: {
    email: 'admin@admin.com',
    password: '123456',
  },
  user: {
    email: 'user@user.com',
    password: '1234567',
  },
  errorEmai:{
    email: 'user.usercom',
    password: 'password_invalid',
  },
  errorPassword: {
    email: 'user@email.com',
    password: 'password_invalid',
  },
  errorUser: {
    email: 'naoexiste@email.com',
    password: 'password_invalid',
  },
}