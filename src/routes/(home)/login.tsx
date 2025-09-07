import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)/login")({
  component: LoginComponent,
});

function LoginComponent() {
  return (
    <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ingresa tu usuario"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition font-semibold"
        >
          Entrar
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        ¿No tienes cuenta?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Regístrate aquí
        </a>
      </p>
    </div>
  );
}
