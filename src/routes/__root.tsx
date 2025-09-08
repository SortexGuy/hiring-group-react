import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider, useTheme } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* Fondo */}
        <div
          id="bg-image"
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute z-20 top-2 right-2">
          <ModeToggle />
        </div>
        {/* Contenedor principal */}
        <Outlet/>
      </ThemeProvider>

      <TanStackRouterDevtools />
    </>
  ),
});
