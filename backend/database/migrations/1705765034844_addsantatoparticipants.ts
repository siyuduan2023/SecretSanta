import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'addsantatoparticipants'

  public async up () {
    this.schema.alterTable('participants', (table) => {
      table.integer('santa_id')

    })
  }

  public async down () {
    this.schema.alterTable('participants', (table) => {
      table.dropColumn('santa_id')
    })
  }
}
