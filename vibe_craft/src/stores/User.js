import {create} from "zustand";

export const useUserStore = create((set) => ({
    user: {
        name: "",
        age: null,
        location: "",
        job: "",
        bio: "",
        places: [],
        music: [],
        movies: [],
        food: [],
        hobbies: [],
        books: [],
      
    },
    setUser:(userData)=>{
        set({user:{...userData}});
    },
    updateUserField: (field, value) => {
        set((state) => {
          const currentValue = state.user[field];
          return {
            user: {
              ...state.user,
              [field]: Array.isArray(currentValue)
                ? [...currentValue, value] 
                : value, 
            },
          };
        });
      },
      

}));