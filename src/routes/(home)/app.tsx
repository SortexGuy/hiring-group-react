import { createFileRoute, Link } from "@tanstack/react-router";
import "./app.css";

export const Route = createFileRoute("/(home)/app")({
  component: App,
});

function App() {
  const pMenuItems = [
    { id: "gestion_experiencia", label: "Gestionar experiencia" },
    { id: "aplicar_vacante", label: "Postular a una vacante" },
    { id: "ver_postulaciones", label: "ver postulaciones" },
  ];
  const aMenuItems = [
    { id: "gestion_usuario", label: "gestionar usuario" },
    { id: "contratar_postulante", label: "contratar postulante" },
    { id: "generar_nomina", label: "generar nomina" },
    { id: "reportes_nomina", label: "reportes de nomina" },
  ];

  return (
    <div className="flex justify-center space-x-4">
      <div className="flex flex-col relative z-10 bg-primary/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-primary-foreground">
        <h1 className="text-2xl font-bold mb-4">Postulante</h1>
        <ul className="flex flex-col grow space-y-3">
          {pMenuItems.map((item) => (
            <li
              key={item.id}
              className="grow rounded-xl bg-primary hover:bg-secondary hover:text-secondary-foreground cursor-pointer transition"
            >
              <Link to={"/user/" + item.id} className="h-full p-3 block" >
                <p className="flex h-full justify-center items-center">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col relative z-10 bg-primary/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-primary-foreground">
        <h1 className="text-2xl font-bold mb-4">Panel Admin</h1>
        <ul className="flex flex-col grow space-y-3">
          {aMenuItems.map((item) => (
            <li
              key={item.id}
              className="grow rounded-xl bg-primary hover:bg-secondary hover:text-secondary-foreground cursor-pointer transition"
            >
              <Link to={"/admin/" + item.id} className="h-full p-3 block" >
                <p className="flex h-full justify-center items-center">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
