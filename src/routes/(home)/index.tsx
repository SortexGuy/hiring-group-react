import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)/")({
  component: Index,
});

function Index() {
  const menuItems = [
    { id: "gestion_experiencia", label: "Gestionar experiencia" },
    { id: "aplicar_vacante", label: "Postular a una vacante" },
    { id: "ver_postulaciones", label: "ver postulaciones" },
  ];

  return (
    <>
      <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Postulante</h1>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
