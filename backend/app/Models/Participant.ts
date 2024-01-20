import { DateTime } from 'luxon'
import { BaseModel, hasOne, column } from '@ioc:Adonis/Lucid/Orm'
import Santa from './Santa'


export default class Participant extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public like1: string

  @column()
  public like2: string

  @column()
  public like3: string


  @column()
  public dislike1: string

  @column()
  public dislike2: string

  @column()
  public dislike3: string

  @column()
  public bio: string

  @column()
  public santaId: number

  @hasOne(() => Santa, {
    localKey: 'santaId',
    foreignKey: 'id'
  })
  public santa: hasOne<typeof Santa>
}