import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <AdminSidebar />
      <main className="w-full">
        <Navbar />
        <div className="w-full px-20 pt-8">{children}</div>
      </main>
    </SidebarProvider>
  );
}
