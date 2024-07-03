/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import '../routes/users_routes.js'
import '../routes/login_routes.js'
import '../routes/client_routes.js'

router.get('/', async () => {
  return {
    ok: true,
  }
})
