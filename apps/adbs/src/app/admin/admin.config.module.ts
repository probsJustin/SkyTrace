import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { DiscordService } from '../discord/discord.service';
import { AdminConfigController } from './admin.config.controller';
import { AdminConfigService } from './admin.config.service';
import { AdminConfig } from './types/admin.config.model';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([InternalConfig]),

    ],
    controllers: [AdminConfigController],
    providers: [AdminConfigService, DiscordService],
})
export class AdminConfigModule {}
