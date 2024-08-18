import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';


@Table
export class InternalJobs extends Model{
    @Column
    jobNumber: string;
    @Column
    tenant: string;
    @Column
    jobStatus: string;
    @Column
    jobTimeout: string;
    @Column
    jobFunction: string;
}

