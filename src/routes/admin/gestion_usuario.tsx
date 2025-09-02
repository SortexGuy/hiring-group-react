import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/gestion_usuario')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/gestion_usuario"!</div>
}
