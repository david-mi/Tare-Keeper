import { create, } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FoodContainerType } from "@/src/types";
import { appStorage } from "./storage";

interface StoreType {
  foodContainers: FoodContainerType[];
  setFoodContainers: (foodContainers: FoodContainerType[]) => void;
  addFoodContainer: (foodContainer: FoodContainerType) => void;
  editFoodContainer: (foodContainer: FoodContainerType) => void;
  deleteFoodContainer: (id: string) => void;
}

export const clientStore = create<StoreType>()(
  persist(
    (set, get) => ({
      foodContainers: [],
      setFoodContainers: (foodContainers) => set({
        foodContainers: foodContainers
      }),
      addFoodContainer: (foodContainer) => set({
        foodContainers: [
          ...get().foodContainers,
          foodContainer
        ]
      }),
      editFoodContainer: (foodContainerToEdit) => set({
        foodContainers: get()
          .foodContainers
          .map((foodContainer) => {
            return foodContainer.id === foodContainerToEdit.id
              ? foodContainerToEdit
              : foodContainer;
          })
      }),
      deleteFoodContainer: (id: string) => set({
        foodContainers: get().foodContainers.filter((foodContainer) => {
          return foodContainer.id !== id;
        })
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
