import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';


@Table
export class DiscordConfig extends Model{
    @Column
    tenant: string;
    @Column
    discordChannel: string;
    @Column
    discordServer: string;
    @Column
    discordMessage: string;
    @Column 
    discordWebhook: string;
}

