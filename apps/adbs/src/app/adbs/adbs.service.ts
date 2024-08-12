import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AdbsDto } from './types/adbs.dto';
import { map } from 'rxjs/operators';
import { AdbsPlane } from './types/adbs.plane.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AdbsService {
    
  constructor(    
    @InjectModel(AdbsPlane)
    private readonly planeModel: typeof AdbsPlane,
    private httpService: HttpService){
  }

  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }

  runMilitaryJob(adbsRequest: AdbsDto): {message: string } {
    return ({ message: 'Hello API' });
  }

  callMilitaryAPIWriteDb() {
    const url = 'https://adsbexchange-com1.p.rapidapi.com/v2/mil/';
    const headers = {
        'x-rapidapi-key': '0fd6c7c2f8msh8db404e19ba5c2ap1bdc98jsn5e2e3bda3527',
        'x-rapidapi-host': 'adsbexchange-com1.p.rapidapi.com'
    };

    try {
        const response = this.httpService.get(url, { headers }).pipe(
            map(response => response.data)
        );
        return this.planeModel.create({
            ...response
          });
        return response;
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
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
