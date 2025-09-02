import { createFileRoute, Link } from "@tanstack/react-router";
import "./app.css";

export const Route = createFileRoute("/app")({
  component: App,
});

function App() {
  const menuItems = [
    { id: "gestion_usuario", label: "gestionar usuario" },
    { id: "contratar_postulante", label: "contratar postulante" },
    { id: "generar_nomina", label: "generar nomina" },
    { id: "reportes_nomina", label: "reportes de nomina" },
  ];

  return (
    <>
      <div className="min-h-screen w-full bg-white relative flex items-center justify-center">
        {/* Contenido */}
        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Panel Admin</h1>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
              >
                <Link to={"/admin/" + item.id} className="p-3 block" >
                  <p>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
