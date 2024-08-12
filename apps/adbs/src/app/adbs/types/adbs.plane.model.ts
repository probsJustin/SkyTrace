import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
    
@Table
export class AdbsPlane extends Model{
    
    @Column
    hex: string;
    @Column
    type: string;
    @Column
    flight: string;
    @Column
    dbFlags: number;
    @Column
    alt_baro: number;
    @Column
    alt_geom: number;
    @Column
    gs: number;
    @Column
    track: number;
    @Column
    baro_rate: number;
    @Column
    squawk: string;
    @Column
    emergency: string;
    @Column
    category: string;
    @Column
    nav_qnh: number;
    @Column
    nav_altitude_mcp: number;
    @Column
    nav_heading: number;
    @Column
    lat: number;
    @Column
    lon: number;
    @Column
    nic: number;
    @Column
    rc: number;
    @Column
    seen_pos: number;
    @Column
    version: number;
    @Column
    nic_baro: number;
    @Column
    nac_p: number;
    @Column
    nac_v: number;
    @Column
    sil: number;
    @Column
    sil_type: string;
    @Column
    gva: number;
    @Column
    sda: number;
    @Column
    alert: Boolean;
    @Column
    spi: Boolean;
    @Column
    mlat: string;
    @Column
    tisb: string;
    @Column
    messages: number;
    @Column
    seen: number;
    @Column
    rssi: number;
    }