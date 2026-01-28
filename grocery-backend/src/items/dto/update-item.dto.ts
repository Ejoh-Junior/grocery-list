// ============================================
// 3. DTO - src/items/dto/update-item.dto.ts
// ============================================
import { IsBoolean } from 'class-validator';

export class UpdateItemDto {
    @IsBoolean()
    isBought: boolean;
}