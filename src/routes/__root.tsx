import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Fondo con grid */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="p-2 flex gap-2 z-20 relative bg-white/80 backdrop-blur-sm">
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

      <div className="min-h-screen w-full bg-white relative flex items-center justify-center">
        {/* Contenido */}
        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Panel Admin</h1>
          <ul className="space-y-3">
            <li className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
              Nigga
            </li>
            <li className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
              Nigga
            </li>
            <li className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
              Nigga
            </li>
            <li className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
              Nigga
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
