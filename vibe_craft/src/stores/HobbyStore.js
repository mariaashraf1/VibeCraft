import {create} from 'zustand';
import { getHobbies } from '../services/HobbyService';

export const useHobbyStore = create((set) => ({
    hobbies: [],
    loading: false,
    error: null,
    fetchHobbies: async () => {
        set({ loading: true, error: null });
        try {
            const hobbies = await getHobbies();
            set({ hobbies, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));