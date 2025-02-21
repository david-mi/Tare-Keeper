import { create } from "zustand";
import { FoodContainerType } from "@/src/types";
import { foodContainersMock } from "@/src/__mock__/foodContainers";

interface StoreType {
  foodContainers: FoodContainerType[];
}

export const clientStore = create<StoreType>()(
  (set) => ({
    foodContainers: foodContainersMock
  }),
);