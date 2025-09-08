import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute('/(home)')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="relative z-10 min-w-9/10 flex flex-col">
    <div className="p-2 flex gap-2 bg-background/80 backdrop-blur-sm shadow-sm">
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
      <div className="min-h-screen w-full bg-background relative flex items-center justify-center">
        {/* Contenido */}
        <Outlet />
      </div>
    </div>
  </div>
}
