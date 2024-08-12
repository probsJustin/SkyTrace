import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { AdbsService } from './adbs.service';
import { ApiTags } from '@nestjs/swagger';
import { AdbsDto } from './types/adbs.dto';

@ApiTags('ADBS')
@Controller("adbs")
export class AdbsController {
  constructor(private readonly adbsService: AdbsService) {}

  @Post("runMilitaryJob")
  runMilitaryJob(
    @Body() adbsRequest: AdbsDto
  ) {
    return this.adbsService.runMilitaryJob(adbsRequest);
  }

  @Get("callMilitaryAPI")
  callMilitaryAPI() {
    return this.adbsService.callMilitaryAPI();
  }
  
  @Get("callMilitaryAPIWriteDb")
  callMilitaryAPIWriteDb() {
    return this.adbsService.callMilitaryAPIWriteDb();
  }
}

 