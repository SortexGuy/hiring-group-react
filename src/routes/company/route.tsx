import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/company')({
  component: CompanyLayoutComponent,
})

function CompanyLayoutComponent() {
  return (
    <div>
      <h1>Company Layout</h1>
      <Outlet />
    </div>
  )
}
