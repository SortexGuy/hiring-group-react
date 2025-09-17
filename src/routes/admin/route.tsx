import { Outlet, createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";

export const Route = createFileRoute("/admin")({
  component: AdminLayoutComponent,
});

function AdminLayoutComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger className="relative -left-6 -top-6 z-100" />
      <main className="w-full h-full">
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="min-h-screen w-full bg-background relative flex items-center justify-center">
            {/* Contenido */}
            <Outlet />
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
