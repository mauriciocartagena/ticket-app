import React from "react";
import { UiProvider } from "./content/UiContext";
import { RoutePage } from "./pages/RoutePage";

export const TickeApp = () => {
  return (
    <UiProvider>
      <RoutePage />
    </UiProvider>
  );
};
