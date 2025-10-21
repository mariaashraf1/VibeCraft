import {create} from "zustand";

export const useUserStore = create((set) => ({
    user: {
        name: "",
        age: null,
        location: "",
        job: "",
        bio: "",
        favplaces: [],
        favmusic: [],
        favmovies: [],
        favfood: [],
        hobbies: [],
        favbooks: [],
      
    },
    setUser:(userData)=>{
        set({user:{...userData}});
    },
    updateUserField:(field, value)=>{
        set((state)=>({
            user:{
                ...state.user,
                [field]:value
            }
        }))
    },

}));