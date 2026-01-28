// ============================================
// 2. DTO - src/items/dto/create-item.dto.ts
// ============================================

import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateItemDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    name: string;
}
