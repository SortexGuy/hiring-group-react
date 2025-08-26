import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Fondo con grid - Ahora abarca toda la página */}
      <div
        className="fixed inset-0 z-0" // Usar fixed para que cubra toda la ventana y z-0 para que esté detrás
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Contenedor principal para el layout y el contenido */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {" "}
        {/* z-10 para que esté por encima del fondo */}
        {/* Barra de navegación */}
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
        </div>
        <hr />
        {/* Contenido de la página - Esto es lo que Outlet renderizará */}
        <div className="flex-grow flex items-center justify-center p-4">
          {" "}
          {/* flex-grow para que ocupe el espacio restante */}
          <Outlet />
        </div>
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
