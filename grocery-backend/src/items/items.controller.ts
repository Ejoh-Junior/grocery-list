// ============================================
// 5. CONTROLLER - src/items/items.controller.ts
// ============================================
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('api/items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto) {
        return this.itemsService.create(createItemDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
        return this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.itemsService.remove(id);
    }
}