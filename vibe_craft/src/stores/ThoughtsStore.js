import { create} from "zustand";

export const useThoughtsStore = create((set) => ({
    thoughts: [
        {
          idea: "Just had an amazing workout session! Feeling energized and ready to take on the day. 💪✨ #FitnessGoals #HealthyLiving",
          time: "2 hours ago",
        },
        {
          idea: "Just had an amazing workout session! Feeling energized and ready to take on the day. 💪✨ #FitnessGoals #HealthyLiving",
          time: "10 hours ago",
        },
      ],
    loading: false,
    error: null,
    fetchThoughts: async () => {
        set({ loading: true, error: null });
        try {
            set({ thoughts, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    addThought:(ideaText)=>{
        const newThought={
            idea:ideaText,
            time:new Date().toLocaleString(),
        };
        set((state)=>({
            thoughts:[newThought,...state.thoughts]
        }))
    }
}));