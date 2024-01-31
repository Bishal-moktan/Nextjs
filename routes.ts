/**
 * These are public routes which are accessible by anyone
 * These routes do not need authentication
 * @type {string[]}
 */
export const publicRoutes = ['/'];

/**
 * These are api routes which takes user to login or register page
 * @type {string[]}
 */
export const apiAuthRoutes = ['/auth/login', '/auth/register'];

/**
 * It check where the route is auth route or not
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * It check where the route is auth route or not
 * @type {string}
 */
export const DEFAULT_REDIRECT = '/settings';
