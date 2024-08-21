export { auth as middleware } from '@/lib/auth';
// const loginBlockRoutes = [
//   '/login',
//   '/register',
//   '/reset-password',
//   '/forgot-password',
//   '/dashboard/register',
//   '/dashboard/login',
// ];

// const adminRoutes = ['/dashboard'];

// export default middleware((req) => {
//   const { pathname } = req.nextUrl;

//   const isLoginBlockRoutes = loginBlockRoutes.some((route) =>
//     pathname.startsWith(route),
//   );

//   const isAdminRoutes = adminRoutes.some((route) => pathname.startsWith(route));

//   if (pathname === '/' && req.auth?.user.roles === 'Admin') {
//     const newUrl = new URL('/dashboard', req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }

//   // Redirect unauthenticated users to login if they are accessing private routes
//   if ((req.auth?.user.roles === 'Customer' || !req.auth) && isAdminRoutes) {
//     const newUrl = new URL('/dashboard/register', req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }

//   // Redirect authenticated users away from loggedOutRoutes
//   if (req.auth && isLoginBlockRoutes) {
//     const newUrl = new URL('/', req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }
// });

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
