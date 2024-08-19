import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';


@Table
export class InternalConfig extends Model{
    @Column
    tenant: string;
    @Column 
    communicationTypes: string;
    @Column
    discordChannel: string;
    @Column
    discordAdmin: string;
    @Column
    discordWebhook: string;
    @Column
    discordServer: string;
    @Column
    adbsApiToken: string;
}

