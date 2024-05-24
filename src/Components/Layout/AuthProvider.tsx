"use client";
import useAuthStore, { IAuthStore } from "@/store/authStore";
import useContentStore from "@/store/contentStore";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
  const initializeAuth = useAuthStore(
    (state: IAuthStore) => state.initializeAuth
  );

  const getThemesAndCategories = useContentStore(
    (state) => state.getThemesAndCategories
  );

  useEffect(() => {
    initializeAuth();
    getThemesAndCategories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
