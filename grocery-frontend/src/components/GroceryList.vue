<script setup lang="ts">
import type { GroceryItem } from '../services/api';
import GroceryListItem from './GroceryListItem.vue';

defineProps<{
  items: GroceryItem[]
}>();

const emit = defineEmits<{
  toggleItem: [id: string, isBought: boolean]
  deleteItem: [id: string]
}>();
</script>

<template>
  <div class="grocery-list">
    <div v-if="items.length === 0" class="empty-state">
      No items yet. Add your first item above! 📝
    </div>
    
    <GroceryListItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @toggle="emit('toggleItem', item.id, $event)"
      @delete="emit('deleteItem', item.id)"
    />
  </div>
</template>

<style scoped>
.grocery-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 1.1rem;
}
</style>