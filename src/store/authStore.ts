import { create } from "zustand";
import {
  getProfileService,
  loginUserService,
  registerUserService,
} from "@/services/authService";
import {
  ILoginPayload,
  IRegisterPayload,
} from "@/types/Services/AuthInterface";

export interface IAuthStore {
  user: any;
  token: string | null;
  isAuthenticated: boolean;

  initializeAuth: () => Promise<void>;
  login: (data: ILoginPayload) => Promise<void>;
  registerUser: (data: IRegisterPayload) => Promise<void>;
  logout: () => void;
  modalAuthOpen: (authOpen: "register" | "login" | null) => void;
  authOpen: "register" | "login" | null;
}

const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  authOpen: null,
  initializeAuth: async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await getProfileService();
        set({
          user: response.data.user,
          token: token,
          isAuthenticated: true,
        });
      } catch (error) {
        console.log("Error fetching profile", error);
      }
    }
  },

  modalAuthOpen: (authOpen) => {
    set({ authOpen });
  },

  login: async (data: ILoginPayload) => {
    try {
      const response = await loginUserService(data);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      set({ user, token, isAuthenticated: true, authOpen: null });
    } catch (error: any) {
      throw new Error(error.response.data.message || "An error occurred");
    }
  },

  registerUser: async (data: IRegisterPayload) => {
    try {
      const response = await registerUserService(data);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      set({ user, token, isAuthenticated: true, authOpen: null });
    } catch (error: any) {
      throw new Error(error.response.data.message || "An error occurred");
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
