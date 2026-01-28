<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  addItem: [name: string]
}>();

const itemName = ref('');

const handleSubmit = () => {
  if (itemName.value.trim()) {
    emit('addItem', itemName.value.trim());
    itemName.value = '';
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="add-item-form">
    <input
      v-model="itemName"
      type="text"
      placeholder="Add item (e.g., Milk, Bread...)"
      maxlength="255"
      class="item-input"
    />
    <button type="submit" class="add-button">Add</button>
  </form>
</template>

<style scoped>
.add-item-form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.item-input {
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  outline: none;
}

.item-input:focus {
  border-color: #42b983;
}

.add-button {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.add-button:hover {
  background-color: #369970;
}
</style>