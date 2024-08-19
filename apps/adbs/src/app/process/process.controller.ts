import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { ProcessService } from './process.service';
import { ApiTags } from '@nestjs/swagger';
import { ProcessDto } from './types/process.dto';

@ApiTags('PROCESS')
@Controller("process")
export class ProcessController {
  constructor(
    private readonly processService: ProcessService
    ) {}

  @Post("calculatePlaneTypeAvgVerseToday")
  calculatePlaneTypeAvgVerseToday(
    @Body() processRequest: ProcessDto
  ) {
    return this.processService.calculatePlaneTypeAvgVerseToday(processRequest);
  }
}

 