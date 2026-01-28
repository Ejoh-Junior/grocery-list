<script setup lang="ts">
import type { GroceryItem } from '../services/api';

defineProps<{
  item: GroceryItem
}>();

const emit = defineEmits<{
  toggle: [isBought: boolean]
  delete: []
}>();
</script>

<template>
  <div class="list-item" :class="{ bought: item.isBought }">
    <input
      type="checkbox"
      :checked="item.isBought"
      @change="emit('toggle', !item.isBought)"
      class="checkbox"
    />
    
    <span class="item-name">{{ item.name }}</span>
    
    <button @click="emit('delete')" class="delete-button">
      🗑️
    </button>
  </div>
</template>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background-color: white;
  border: 2px solid #eee;
  border-radius: 8px;
  transition: all 0.2s;
}

.list-item:hover {
  border-color: #ddd;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.list-item.bought {
  background-color: #f8f8f8;
  opacity: 0.7;
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.item-name {
  flex: 1;
  font-size: 1.1rem;
  color: #2c3e50;
}

.list-item.bought .item-name {
  text-decoration: line-through;
  color: #999;
}

.delete-button {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 5px;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.delete-button:hover {
  opacity: 1;
}
</style>