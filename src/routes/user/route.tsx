import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user')({
  component: UserLayoutComponent,
})

function UserLayoutComponent() {
  return (
    <div>
      <h1>User Layout</h1>
      <Outlet />
    </div>
  )
}
