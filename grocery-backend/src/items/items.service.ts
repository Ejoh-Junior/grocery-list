// ============================================
// 4. SERVICE - src/items/items.service.ts
// ============================================
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
    ) { }

    async findAll(): Promise<Item[]> {
        return this.itemsRepository.find({
            order: { createdAt: 'DESC' },
        });
    }

    async create(createItemDto: CreateItemDto): Promise<Item> {
        const item = this.itemsRepository.create(createItemDto);
        return this.itemsRepository.save(item);
    }

    async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
        const item = await this.itemsRepository.findOne({ where: { id } });

        if (!item) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }

        Object.assign(item, updateItemDto);
        return this.itemsRepository.save(item);
    }

    async remove(id: string): Promise<void> {
        const result = await this.itemsRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
    }
}
