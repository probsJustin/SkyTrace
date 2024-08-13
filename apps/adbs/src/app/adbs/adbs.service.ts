import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AdbsDto } from './types/adbs.dto';
import { map } from 'rxjs/operators';
import { AdbsPlane } from './types/adbs.plane.model';
import { InjectModel } from '@nestjs/sequelize';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { DiscordService } from '../discord/discord.service';

@Injectable()
export class AdbsService {
    
  constructor(    
    @InjectModel(AdbsPlane)
    private readonly planeModel: typeof AdbsPlane,
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

  callMilitaryAPIWriteDb(): Observable<any> {

        const url = 'https://adsbexchange-com1.p.rapidapi.com/v2/mil/';
        const headers = {
          'x-rapidapi-key': '0fd6c7c2f8msh8db404e19ba5c2ap1bdc98jsn5e2e3bda3527',
          'x-rapidapi-host': 'adsbexchange-com1.p.rapidapi.com'
        };
    
        return this.httpService.get(url, { headers }).pipe(
          map(response => response.data),
          map(data => {
            if (data?.ac) {
                data?.ac.forEach(data =>{
                    this.planeModel.create({
                        hex: data?.hex,
                        type: data?.type,
                        flight: data?.flight,
                        dbFlags: data?.dbFlags,
                        t: (data?.t || "").split(' ').join('')   // Remove spaces
                        .split('\n').join('')  // Remove new line characters
                        .split('\t').join(''),
                        alt_baro: data?.alt_baro,
                        alt_geom: data?.alt_geom,
                        gs: data?.gs,
                        track: data?.track,
                        baro_rate: data?.baro_rate,
                        squawk: data?.squawk,
                        emergency: data?.emergency,
                        category: data?.category,
                        nav_qnh: data?.nav_qnh,
                        nav_altitude_mcp: data?.nav_altitude_mcp,
                        nav_heading: data?.nav_heading,
                        lat: data?.lat,
                        lon: data?.lon,
                        nic: data?.nic,
                        rc: data?.rc,
                        seen_pos: data?.seen_pos,
                        version: data?.version,
                        nic_baro: data?.nic_baro,
                        nac_p: data?.nac_p,
                        nac_v: data?.nac_v,
                        sil: data?.sil,
                        sil_type: data?.sil_type,
                        gva: data?.gva,
                        sda: data?.sda,
                        alert: data?.alert,
                        spi: data?.spi,
                        mlat: "",
                        tisb: "",
                        messages: data?.messages,
                        seen: data?.seen,
                        rssi: data?.rssi
                        
                });
              }); // Assuming data.ac is the object structure expected by your model
              this.discordService.sendMessage({discordChannel: "", message: "Called Adbs...."});
              return { message: 'Data stored successfully' };
            }
            return { message: 'No data to store' };
          }),
          catchError(error => {
            console.error('Failed to fetch data:', error);
            return throwError(() => new Error('Failed to fetch data: ' + error.message));
          })
        );
  }

  callMilitaryAPI() {
        const url = 'https://adsbexchange-com1.p.rapidapi.com/v2/mil/';
        const headers = {
            'x-rapidapi-key': '0fd6c7c2f8msh8db404e19ba5c2ap1bdc98jsn5e2e3bda3527',
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
