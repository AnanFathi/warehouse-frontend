import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import PageLayout from "@/components/PageLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex flex-row w-full h-screen">
        <AdminSidebar />
        <main className="flex-1 flex flex-col">
          <Navbar />
          <PageLayout>{children}</PageLayout>
        </main>
      </div>
    </SidebarProvider>
  );
}
