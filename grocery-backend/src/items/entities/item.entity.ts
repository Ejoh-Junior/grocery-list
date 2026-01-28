/* eslint-disable prettier/prettier */

// ============================================
// 1. ENTITY - src/items/entities/item.entity.ts
// ============================================
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('items')
export class Item {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'boolean', default: false })
    isBought: boolean;

    @CreateDateColumn()
    createdAt: Date;
}