import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/contratar_postulante')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/contratar_postulante"!</div>
}
