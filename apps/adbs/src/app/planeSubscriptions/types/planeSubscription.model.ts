import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';


@Table
export class PlaneSubscription extends Model{
    @Column
    planeType: string;
    @Column
    tenant: string;
    @Column
    discordServer: string;
    @Column
    discordChannel: string;
    @Column
    discordWebhook: string;
    @Column
    discordAdmin: string;
}

