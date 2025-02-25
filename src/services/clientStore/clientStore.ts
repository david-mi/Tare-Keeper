import { create, } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FoodContainerType } from "@/src/types";
import { foodContainersMock } from "@/src/__mock__/foodContainers";
import { appStorage } from "./storage";

interface StoreType {
  foodContainers: FoodContainerType[];
  addFoodContainer: (foodContainer: FoodContainerType) => void;
}

export const clientStore = create<StoreType>()(
  persist(
    (set, get) => ({
      foodContainers: foodContainersMock,
      addFoodContainer: (foodContainer) => set({
        foodContainers: [
          ...get().foodContainers,
          foodContainer
        ]
      })
    }),
    {
      name: "tare-keeper-persist",
      storage: createJSONStorage(() => ({
        setItem: (name, value) => {
          return appStorage.set(name, value);
        },
        getItem(name) {
          return appStorage.getString(name) ?? null;
        },
        removeItem: (name) => {
          return appStorage.delete(name);
        },
      })),
      partialize: (state) => {
        return {
          foodContainers: state.foodContainers
        };
      },
    }
  )
);