import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex">
      <h1 className="text-2xl font-bold mb-4"> Bienvenido a hiring group!!! </h1>
    </div>
  );
}
