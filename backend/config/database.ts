/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import Application from '@ioc:Adonis/Core/Application'
import type { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: 'pg',

  connections: {
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for PostgreSQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i pg
    |
    */

    pg: {
      client: 'pg',
      connection: {
        host: 'manny.db.elephantsql.com',
        port: 5432,
        user: 'wspojrxm',
        password: 'ehXsP1NOb9rTqAcbvnm_HHgLmHiO9wS4',
        database: 'wspojrxm',
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    }
  }
}

export default databaseConfig
