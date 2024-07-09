import {
  createCustomer,
  createOrder,
  getCategories,
  getContents,
} from "@/services/contentService";
import { Category } from "@/types/Models/Categories";
import { Theme } from "@/types/Models/Themes";
import { create } from "zustand";

interface IContentStore {
  themes: Theme[];
  categories: Category[];
  loadingContents: Boolean;
  loadingOrder: Boolean;
  getThemesAndCategories: () => void;
  filterByCategory: (category_id: string) => void;
  setStep: (step: number, id?: string) => void;
  getContentBoxs: () => any;
  getContentBox: () => any;
  preLoadOrder: () => void;
  contents: any[];
  filterContents: any[];
  order: any;
  step: number;
  selectedContent: string | null;
  selectedBox: string | null;
  customer: any;
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
  loadingOrder: false,
  loadingContents: false,
  step: 1,
  order: null,
  selectedContent: null,
  selectedBox: null,
  filterContents: [],
  customer: null,
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

    set({ filterContents: [] });

    setTimeout(() => {
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
    }, 300);
  },

  setStep: async (step: number, data: string | any) => {
    try {
      let disableStep = false;
      switch (step) {
        case 1:
          localStorage.removeItem("order");
          set({
            selectedContent: null,
            selectedBox: null,
            order: null,
            customer: null,
          });
          break;
        case 2:
          set({ selectedContent: data });
          break;
        case 3:
          set({ selectedBox: data });
          break;
        case 4:
          set({ customer: data });
          await createCustomer(data);
          break;

        case 6:
          const { selectedContent } = get();

          const box = get().getContentBox();

          const payload = {
            note: data.note,
            box_type_id: box.box_type_id._id,
            branch_id: selectedContent,
            payment_method: data.paymentMethod,
            customer: {
              name: data.name,
              email: data.email,
              dni: data.dni,
              phone: data.phone,
            },
          };

          set({ loadingOrder: true });

          const order = await createOrder(payload);

          set({ loadingOrder: false });

          if (order.data.preferenceResult.init_point) {
            localStorage.setItem("order", JSON.stringify(order.data));
            disableStep = true;
            window.location.href = order.data.preferenceResult.init_point;
          }

          set({ order: order.data });
          break;

        default:
          break;
      }

      !disableStep && set({ step });
    } catch (error) {
      console.log("Error setting step", error);
    }
  },

  preLoadOrder: async () => {
    try {
      const order = JSON.parse(localStorage.getItem("order") || "");

      set({
        order,
        selectedContent: order.order.branch_id,
        selectedBox: order.preferenceResult.box_id,
      });

      localStorage.removeItem("order");
    } catch (error) {
      window.location.href = "/";

      console.log("Error preloading order", error);
    }
  },

  getContentBoxs: () => {
    try {
      const { contents, selectedContent } = get();
      const content = contents.find(
        (content) => content._id === selectedContent
      );
      return content;
    } catch (error: any) {
      set({ loadingContents: false });
      console.log("Error getting contents", error);
    }
  },
  getContentBox: () => {
    try {
      const { contents, selectedContent, selectedBox } = get();
      const content = contents.find(
        (content) => content._id === selectedContent
      );
      const box = content?.boxes.find((box: any) => box._id === selectedBox);
      return box;
    } catch (error: any) {
      set({ loadingContents: false });
      console.log("Error getting contents", error);
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
