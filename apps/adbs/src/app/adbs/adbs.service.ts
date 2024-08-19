import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AdbsDto } from './types/adbs.dto';
import { map, mergeMap } from 'rxjs/operators';
import { AdbsPlane } from './types/adbs.plane.model';
import { InjectModel } from '@nestjs/sequelize';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { DiscordService } from '../discord/message/discord.service';

@Injectable()
export class AdbsService {
    
  constructor(    
    @InjectModel(AdbsPlane)
    private readonly planeModel: typeof AdbsPlane,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
    private discordService: DiscordService,
    private httpService: HttpService
    ){
  }

  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }

  runMilitaryJob(adbsRequest: AdbsDto): {message: string } {
    return ({ message: 'Hello API' });
  }

  async callMilitaryAPIWriteDb(): Promise<any> {
    console.log("Fetching configuration...");
    const configuration = await this.internalConfig.findOne({
        where: {
            tenant: "admin"
        }
    });

    const url = 'https://adsbexchange-com1.p.rapidapi.com/v2/mil/';
    const headers = {
        'x-rapidapi-key': configuration.adbsApiToken,
        'x-rapidapi-host': 'adsbexchange-com1.p.rapidapi.com'
    };

    console.log("Making HTTP request...");
    return this.httpService.get(url, { headers }).pipe(
        map(response => {
            console.log("HTTP response received.");
            return response.data;
        }),
        mergeMap(async data => {
            if (data?.ac) {
                console.log(`Processing ${data.ac.length} records...`);
                for (const acData of data.ac) {
                    console.log(`Creating record for hex: ${acData?.hex}`);
                    await this.planeModel.create({
                        hex: acData?.hex,
                        type: acData?.type,
                        flight: acData?.flight,
                        dbFlags: acData?.dbFlags,
                        t: (acData?.t || "").split(' ').join('')
                            .split('\n').join('')
                            .split('\t').join(''),
                        alt_baro: acData?.alt_baro,
                        alt_geom: acData?.alt_geom,
                        gs: acData?.gs,
                        track: acData?.track,
                        baro_rate: acData?.baro_rate,
                        squawk: acData?.squawk,
                        emergency: acData?.emergency,
                        category: acData?.category,
                        nav_qnh: acData?.nav_qnh,
                        nav_altitude_mcp: acData?.nav_altitude_mcp,
                        nav_heading: acData?.nav_heading,
                        lat: acData?.lat,
                        lon: acData?.lon,
                        nic: acData?.nic,
                        rc: acData?.rc,
                        seen_pos: acData?.seen_pos,
                        version: acData?.version,
                        nic_baro: acData?.nic_baro,
                        nac_p: acData?.nac_p,
                        nac_v: acData?.nac_v,
                        sil: acData?.sil,
                        sil_type: acData?.sil_type,
                        gva: acData?.gva,
                        sda: acData?.sda,
                        alert: acData?.alert,
                        spi: acData?.spi,
                        mlat: "",
                        tisb: "",
                        messages: acData?.messages,
                        seen: acData?.seen,
                        rssi: acData?.rssi                    
                    });
                }
                console.log("All records processed.");
                this.discordService.sendMessage({tenant: "admin", discordServer: "Justins Code Support", discordChannel: "", discordMessage: "Called Adbs...."});
                return { message: 'Data stored successfully' };
            }
            console.log("No data to process.");
            return { message: 'No data to store' };
        }),
        catchError(error => {
            console.error('Failed to fetch data:', error);
            return throwError(() => new Error('Failed to fetch data: ' + error.message));
        })
    ).toPromise();
}


  async callMilitaryAPI() {
    const configuration = await this.internalConfig.findOne({
        where: {
            discordServer: "Justins Code Support"
        }
    })

        const url = 'https://adsbexchange-com1.p.rapidapi.com/v2/mil/';
        const headers = {
            'x-rapidapi-key': configuration.adbsApiToken,
            'x-rapidapi-host': 'adsbexchange-com1.p.rapidapi.com'
        };

        try {
            const response = this.httpService.get(url, { headers }).pipe(
                map(response => response.data)
            );
            return response;
        } catch (error) {
            throw new Error(`Failed to fetch data: ${error.message}`);
        }
    }
  }
