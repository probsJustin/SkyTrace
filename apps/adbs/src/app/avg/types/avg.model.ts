import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';


@Table
export class Avg extends Model{

    @Column
    type: string;
    @Column
    days: string;
    @Column
    avg: string;
    @Column
    startDate: string;
    @Column
    endDate: string;
}

