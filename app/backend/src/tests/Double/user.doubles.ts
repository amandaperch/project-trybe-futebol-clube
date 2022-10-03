export const user ={
  adm: {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  },
  user: {
    id: 2,
    username: 'User',
    role: 'user', 
    email: 'user@user.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
  },
}

export const login = {
  admin: {
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  },
  user: {
    email: 'user@user.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
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