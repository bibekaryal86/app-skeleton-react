// routes are defined in AppRoutes.tsx
// this is for display in Header or Side Navigation
// publicRoutes is not Used for Display, here for record only

const publicRoutes = [{ path: '/' }, { path: '/logout' }]

const protectedRoutes = [
  {
    path: '/home',
    display: 'Home',
    submenu: [
      {
        path: '',
        display: '',
      },
    ],
  },
]

export { publicRoutes, protectedRoutes }
