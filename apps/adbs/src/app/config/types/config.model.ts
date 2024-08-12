import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';


@Table
export class Discord extends Model{

    @Column
    discordChan: string;

}

