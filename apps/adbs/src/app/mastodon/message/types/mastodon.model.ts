import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';


@Table
export class Mastodon extends Model{
    @Column
    tenant: string;
    @Column
    mastodonAccount: string;
    @Column
    mastodonMessage: string;
}

