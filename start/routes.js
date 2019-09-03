'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Event = use('Event')
// const Gql = use("Gql");
//const Next = use('Adonis/Addons/Next')
//const handler = Next.getRequestHandler()

Route.group(() => {
  Route.post('auth/login', 'Authentication.Login')
  Route.post('auth/register', 'Authentication.Register')
}).prefix('api/v1')

