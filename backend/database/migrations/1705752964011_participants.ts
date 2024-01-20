import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'participants'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('like1').nullable()
      table.string('like2').nullable()
      table.string('like3').nullable()

      table.string('dislike1').nullable()
      table.string('dislike2').nullable()
      table.string('dislike3').nullable()

      table.string('bio').nullable()

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
