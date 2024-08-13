import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { DiscordService } from '../discord/discord.service';
import { AdminConfigController } from './admin.config.controller';
import { AdminConfigService } from './admin.config.service';
import { AdminConfig } from './types/admin.config.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdminConfig]),
    ],
    controllers: [AdminConfigController],
    providers: [AdminConfigService, DiscordService],
})
export class InternalConfigModule {}
