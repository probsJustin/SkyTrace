import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';
import { InternalConfig } from '../config/types/internal.config.model';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([InternalConfig]),
    ],
    controllers: [DiscordController],
    providers: [DiscordService],
})
export class DiscordModule {}
