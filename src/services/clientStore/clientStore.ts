import { create, } from "zustand";
import { FoodContainerType } from "@/src/types";
import { foodContainersMock } from "@/src/__mock__/foodContainers";

interface StoreType {
  foodContainers: FoodContainerType[];
  addFoodContainer: (foodContainer: FoodContainerType) => void;
}

export const clientStore = create<StoreType>()(
  (set, get) => ({
    foodContainers: foodContainersMock,
    addFoodContainer: (foodContainer) => set({
      foodContainers: [
        ...get().foodContainers,
        foodContainer
      ]
    })
  }),
);