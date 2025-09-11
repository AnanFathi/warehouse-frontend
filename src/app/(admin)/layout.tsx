import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <AdminSidebar />
      <main className="w-full">
        {children}
      </main>
    </SidebarProvider>
  );
}
