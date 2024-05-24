import {
  getCategories,
  getContents,
  getThemes,
  uploadContent,
} from "@/services/contentService";
import { Category } from "@/types/Models/Categories";
import { Theme } from "@/types/Models/Themes";
import { IContentPayload } from "@/types/Services/ContentInterface";
import { create } from "zustand";

interface IContentStore {
  themes: Theme[];
  categories: Category[];
  loadingUploadContent: boolean;
  loadingContents: Boolean;
  getThemesAndCategories: () => void;
  UploadContent: (data: IContentPayload) => void;
  contents: any[];
  getContents: (
    search?: String,
    theme_id?: String,
    category_id?: String
  ) => void;
}

const useContentStore = create<IContentStore>((set) => ({
  themes: [],
  categories: [],
  contents: [],
  loadingUploadContent: false,
  loadingContents: false,
  getThemesAndCategories: async () => {
    try {
      const responseThemes = await getThemes();
      const responseCategories = await getCategories();
      set({ themes: responseThemes.data, categories: responseCategories.data });
    } catch (error: any) {
      console.log("Error getting themes", error);
    }
  },

  getContents: async (
    search?: String,
    theme_id?: String,
    category_id?: String
  ) => {
    try {
      set({ loadingContents: true });
      const response = await getContents(search, theme_id, category_id);

      setTimeout(() => {
        set({
          contents: response.data,
          loadingContents: false,
          loadingUploadContent: false,
        });
      }, 500);
    } catch (error: any) {
      set({ loadingContents: false });
      console.log("Error getting contents", error);
    }
  },

  UploadContent: async (data: IContentPayload) => {
    try {
      const { getContents } = useContentStore.getState();
      set({ loadingUploadContent: true });
      await uploadContent(data);
      await getContents();
    } catch (error: any) {
      set({ loadingUploadContent: false });
      console.log("Error uploading content", error);
    }
  },
}));

export default useContentStore;
