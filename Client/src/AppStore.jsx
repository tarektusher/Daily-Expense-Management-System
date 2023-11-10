// import create from 'zustand';
// import { persist } from 'zustand/middleware';

// let appStore = (set) => ({
//     dopen: true,
//     updateOpen:(dopen) =>set((state) => ({dopen : dopen})),
// });

// appStore = persist (appStore, {name: "Daily_Expense_System"});
// export const useAppStore = create(appStore);
import { create } from "zustand";
import { persist } from "zustand/middleware";

let appStore = (set) => ({
  dopen: true,
  rows: [],
  setRows: (rows) => set((state) => ({ rows: rows })),
  updateDopen: (dopen) => set((state) => ({ dopen: dopen })),
});

appStore = persist(appStore, { name: "cdot_store_api" });
export const useAppStore = create(appStore);
