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
    r: string;
    @Column
    t: string;
    @Column
    dbFlags: string;
    @Column
    alt_baro: string;
    @Column
    alt_geom: string;
    @Column
    gs: string;
    @Column
    track: string;
    @Column
    baro_rate: string;
    @Column
    squawk: string;
    @Column
    emergency: string;
    @Column
    category: string;
    @Column
    nav_qnh: string;
    @Column
    nav_altitude_mcp: string;
    @Column
    nav_heading: string;
    @Column
    lat: string;
    @Column
    lon: string;
    @Column
    nic: string;
    @Column
    rc: string;
    @Column
    seen_pos: string;
    @Column
    version: string;
    @Column
    nic_baro: string;
    @Column
    nac_p: string;
    @Column
    nac_v: string;
    @Column
    sil: string;
    @Column
    sil_type: string;
    @Column
    gva: string;
    @Column
    sda: string;
    @Column
    alert: string;
    @Column
    spi: string;
    @Column
    mlat: string;
    @Column
    tisb: string;
    @Column
    messages: string;
    @Column
    seen: string;
    @Column
    rssi: string;
    }