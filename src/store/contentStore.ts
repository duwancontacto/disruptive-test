import { getCategories, getContents } from "@/services/contentService";
import { Category } from "@/types/Models/Categories";
import { Theme } from "@/types/Models/Themes";
import { create } from "zustand";

interface IContentStore {
  themes: Theme[];
  categories: Category[];
  loadingContents: Boolean;
  getThemesAndCategories: () => void;
  filterByCategory: (category_id: string) => void;
  contents: any[];
  filterContents: any[];
  getContents: (
    search?: String,
    theme_id?: String,
    category_id?: String
  ) => void;
}

const useContentStore = create<IContentStore>((set, get) => ({
  themes: [],
  categories: [],
  contents: [],
  loadingContents: false,
  filterContents: [],
  getThemesAndCategories: async () => {
    try {
      const responseCategories = await getCategories();
      set({ categories: responseCategories.data });
    } catch (error: any) {
      console.log("Error getting themes", error);
    }
  },

  filterByCategory: (category_id: string) => {
    const contents = get().contents;

    if (category_id === "all") {
      set({
        filterContents: contents,
      });
    } else {
      set({
        filterContents: contents.filter(
          (content) => content.category === category_id
        ),
      });
    }
  },

  getContents: async () => {
    try {
      set({ loadingContents: true });
      const response = await getContents();

      set({
        filterContents: response.data,
        contents: response.data,
        loadingContents: false,
      });
    } catch (error: any) {
      set({ loadingContents: false });
      console.log("Error getting contents", error);
    }
  },
}));

export default useContentStore;
