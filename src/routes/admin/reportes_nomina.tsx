import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/reportes_nomina')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/reportes_nomina"!</div>
}
