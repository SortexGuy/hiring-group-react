import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: AdminLayoutComponent,
})

function AdminLayoutComponent() {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Outlet />
    </div>
  )
}
