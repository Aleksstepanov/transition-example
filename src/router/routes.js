const metaPublic = { layout: 'LayoutPublic' }
const metaAccount = { layout: 'LayoutDefault' }

export default [
  {
    path: '/',
    name: 'page-parent',
    component: () => import('@/pages/page-parent'),
    meta: metaAccount,
    children: [
      {
        path: '/parent/child-one',
        name: 'page-child-one',
        component: () => import('@/pages/page-parent/page-child-parent-one'),
        meta: metaAccount
      },
      {
        path: '/parent/child-two',
        name: 'page-child-two',
        component: () => import('@/pages/page-parent/page-child-parent-two'),
        meta: metaAccount
      }
    ]
  },
  {
    path: '/home',
    name: 'page-home',
    meta: metaAccount,
    component: () => import('@/pages/page-home')
  },
  {
    path: '/sign-in',
    name: 'page-sign-in',
    component: () => import('@/pages/page-sign-in'),
    meta: metaPublic
  }

]
