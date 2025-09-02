import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/generar_nomina')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/generar_nomina"!</div>
}
