<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { groceryApi, type GroceryItem } from './services/api';
import GroceryList from './components/GroceryList.vue';
import AddItemForm from './components/AddItemForm.vue';

const items = ref<GroceryItem[]>([]);
const loading = ref(false);
const error = ref('');

// Fetch all items
const fetchItems = async () => {
  try {
    loading.value = true;
    error.value = '';
    items.value = await groceryApi.getItems();
  } catch (err) {
    error.value = 'Failed to load items';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

// Add new item
const handleAddItem = async (name: string) => {
  try {
    error.value = '';
    const newItem = await groceryApi.createItem(name);
    items.value.unshift(newItem); // Add to top
  } catch (err) {
    error.value = 'Failed to add item';
    console.error(err);
  }
};

// Toggle item bought status
const handleToggleItem = async (id: string, isBought: boolean) => {
  try {
    error.value = '';
    await groceryApi.toggleItem(id, isBought);
    const item = items.value.find(i => i.id === id);
    if (item) {
      item.isBought = isBought;
    }
  } catch (err) {
    error.value = 'Failed to update item';
    console.error(err);
  }
};

// Delete item
const handleDeleteItem = async (id: string) => {
  try {
    error.value = '';
    await groceryApi.deleteItem(id);
    items.value = items.value.filter(i => i.id !== id);
  } catch (err) {
    error.value = 'Failed to delete item';
    console.error(err);
  }
};

onMounted(() => {
  fetchItems();
});
</script>

<template>
  <div class="app">
    <header>
      <h1>🛒 Grocery List</h1>
    </header>

    <main>
      <AddItemForm @add-item="handleAddItem" />
      
      <div v-if="error" class="error">{{ error }}</div>
      
      <div v-if="loading" class="loading">Loading...</div>
      
      <GroceryList 
        v-else
        :items="items"
        @toggle-item="handleToggleItem"
        @delete-item="handleDeleteItem"
      />
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin: 0;
}

.error {
  background-color: #fee;
  color: #c33;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #666;
}
</style>