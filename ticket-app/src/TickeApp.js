import React from "react";
import { UiProvider } from "./context/UiContext";
import { RoutePage } from "./pages/RoutePage";
import { SocketProvider } from "./context/SocketContext";

export const TickeApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RoutePage />
      </UiProvider>
    </SocketProvider>
  );
};
