import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Fondo */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Contenedor principal */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {" "}
        <div className="p-2 flex gap-2 bg-white/80 backdrop-blur-sm shadow-sm">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/app" className="[&.active]:font-bold">
            App
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <Link to="/login" className="[&.active]:font-bold">
            Login
          </Link>
        </div>
        <hr />
        <div className="flex-grow flex items-center justify-center p-4">
          {" "}
          <Outlet />
        </div>
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
