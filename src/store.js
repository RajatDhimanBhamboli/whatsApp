import { create } from 'zustand';

const useGlobalStore = create((set) => ({
  users: [], // Array initialize
  setusers: (userData) => set((state) => ({ users: Array.isArray(userData) ? userData : [userData] })),

  getuser: async (userid) => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid }),
      });

      const data = await response.json();

      if (response.ok) {
        set((state) => ({ users: Array.isArray(data) ? data : [data] }));
      } else {
        console.log(data, "user not found");
      }
    } catch (error) {
      console.error("Error checking auth:", error);
    }
  },
}));

export default useGlobalStore;