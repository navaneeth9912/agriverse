"use client";

import { Provider } from "mobx-react";
import { initializeStore } from "./index";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const store = initializeStore();
  return <Provider store={store}>{children}</Provider>;
}
