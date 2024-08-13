import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { DiscordService } from '../discord/discord.service';
import { InternalConfigController } from './internal.config.controller';
import { InternalConfigService } from './internal.config.service';
import { InternalConfig } from './types/internal.config.model';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { AdminConfig } from '../admin/types/admin.config.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([InternalConfig]),    ],
    controllers: [InternalConfigController],
    providers: [InternalConfigService, DiscordService],
})
export class InternalConfigModule {}
