import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface GroceryItem {
    id: string;
    name: string;
    isBought: boolean;
    createdAt: string;
}

export const groceryApi = {
    // Get all items
    getItems: async (): Promise<GroceryItem[]> => {
        const response = await axios.get(`${API_URL}/items`);
        return response.data;
    },

    // Create new item
    createItem: async (name: string): Promise<GroceryItem> => {
        const response = await axios.post(`${API_URL}/items`, { name });
        return response.data;
    },

    // Toggle item bought status
    toggleItem: async (id: string, isBought: boolean): Promise<GroceryItem> => {
        const response = await axios.patch(`${API_URL}/items/${id}`, { isBought });
        return response.data;
    },

    // Delete item
    deleteItem: async (id: string): Promise<void> => {
        await axios.delete(`${API_URL}/items/${id}`);
    },
};