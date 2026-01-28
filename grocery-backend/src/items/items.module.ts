/* eslint-disable prettier/prettier */

// ============================================
// 6. MODULE - src/items/items.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    controllers: [ItemsController],
    providers: [ItemsService],
})
export class ItemsModule { }