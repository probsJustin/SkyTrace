import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { AdminConfigController } from './admin.config.controller';
import { AdminConfigService } from './admin.config.service';
import { AdminConfig } from './types/admin.config.model';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { DiscordService } from '../discord/message/discord.service';
import { DiscordConfig } from '../discord/configuration/types/discord.configuration.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([DiscordConfig]),

    ],
    controllers: [AdminConfigController],
    providers: [AdminConfigService, DiscordService],
})
export class AdminConfigModule {}
